import { unwrapResult } from "@reduxjs/toolkit";
import Banner from "components/Banner";
import Spinner from "components/Spinner";
import PhotoForm from "features/Photo/components/PhotoForm";
import {
  createPhoto,
  getOnePhoto,
  updatePhoto,
} from "features/Photo/photoSlice";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { v4 as uuid } from "uuid";
import "./style.scss";
const AddEdit = (props) => {
  const [loading, setLoading] = useState(false);
  const [onePhoto, setOnePhoto] = useState();

  const dispatch = useDispatch();
  const Navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 1000);
  }, []);
  const { photoId } = useParams();
  useEffect(() => {
    if (photoId) {
      const getPhotoById = async () => {
        const actionResult = await dispatch(getOnePhoto(photoId));
        const Photo = unwrapResult(actionResult);
        setOnePhoto(Photo);
      };

      getPhotoById();
    }
  }, []);

  // const editPhotoValue = useSelector((state) =>
  //   state.photos.find((photo) => String(photo.id) === photoId)
  // );

  const isAddMode = !photoId;

  const initialValues = !isAddMode ? onePhoto : "";

  // RANDOM_ID
  const unique_id = uuid();
  const handleSubmit = (values) => {
    console.log(values);
    setTimeout(() => {
      if (isAddMode) {
        const newPhoto = {
          ...values,
          id: unique_id,
        };
        const action = createPhoto(newPhoto);
        dispatch(action);
      } else {
        const action = updatePhoto(values);
        dispatch(action);
      }
      Navigate("/photos");
    }, 1500);
  };
  return (
    <>
      {!loading ? (
        <Spinner />
      ) : (
        <div className="photo-edit">
          <Banner title="Pick your amazing photo 😎" />

          <div className="photo-edit__form">
            <PhotoForm onSubmit={handleSubmit} initialValues={initialValues} />
          </div>
        </div>
      )}
    </>
  );
};

export default AddEdit;
