import { unwrapResult } from "@reduxjs/toolkit";
import Banner from "components/Banner";
import Images from "constant/images";
import PhotoList from "features/Photo/components/PhotoList";
import { deletePhoto, getOnePhoto, getPhoto } from "features/Photo/photoSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
const MainPage = () => {
  const [listPhoto, setListPhoto] = useState("");
  const dispatch = useDispatch();
  const Navigate = useNavigate();
  // const photos = useSelector((state) => state.photos);
  const getlistPhoto = async () => {
    const actionResult = await dispatch(getPhoto());
    const photo = unwrapResult(actionResult);
    setListPhoto(photo);
  };

  useEffect(() => {
    getlistPhoto();
  }, []);
  const handleEditPhoto = (photo) => {
    if (photo) {
      Navigate(`/photos/${photo.id}`);
    }
  };

  const handleRemovePhoto = async (photo) => {
    await dispatch(deletePhoto(photo.id));
    getlistPhoto();
  };
  const getPhotoById = async (photoId) => {
    const actionResult = await dispatch(getOnePhoto(photoId));
    const Photo = unwrapResult(actionResult);
    return Photo;
  };
  return (
    <div className="photo-main">
      <Banner title="🎉 Your awesome photos 🎉" backgroundUrl={Images.Sea_BG} />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add" className="btn btn-primary">
            Add new photo
          </Link>
        </div>
        <div className="photo-list">
          <PhotoList
            photoList={listPhoto}
            onPhotoRemoveClick={handleRemovePhoto}
            onPhotoEditClick={handleEditPhoto}
            onOnePhoto={getPhotoById}
          />
        </div>
      </Container>
    </div>
  );
};

export default MainPage;
