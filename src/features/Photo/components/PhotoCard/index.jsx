import ModalBox from "components/Modal";
import { useState } from "react";
import { Button } from "reactstrap";
import PhotoDetail from "../PhotoDetail";
import "./style.scss";

const renderButton = (handleRemovePhoto, toggle) => {
  return (
    <>
      <Button color="danger" onClick={handleRemovePhoto}>
        Remove
      </Button>
      <Button color="secondary" onClick={toggle}>
        Cancel
      </Button>
    </>
  );
};

const PhotoCard = (props) => {
  const { photo, onEditClick, onRemoveClick, onOnePhotoClick } = props;
  const [isModalBox, setIsModalBox] = useState(false);
  const [ModalOnePhoto, setModalOnePhoto] = useState(false);
  const handleEditClick = () => {
    if (onEditClick) {
      onEditClick(photo);
    }
  };

  const handleModalRemove = () => {
    setIsModalBox(!isModalBox);
  };

  const handleRemoveClick = () => {
    if (onRemoveClick) {
      onRemoveClick(photo);
    }
  };

  const handleOnePhoto = async (id) => {
    if (onOnePhotoClick) {
      onOnePhotoClick(id);
      setModalOnePhoto(!ModalOnePhoto);
    }
  };

  return (
    <div className="photo">
      <img src={photo.photo} alt={photo.title} />

      <div className="photo__overlay">
        <h3 className="photo__title">{photo.title}</h3>

        <div className="photo__actions">
          <div>
            <Button outline size="sm" color="light" onClick={handleEditClick}>
              Edit
            </Button>
          </div>

          <div>
            <Button
              outline
              size="sm"
              color="danger"
              onClick={handleModalRemove}
            >
              Remove
            </Button>
          </div>
          <div>
            <Button
              outline
              size="sm"
              color="info"
              onClick={() => handleOnePhoto(photo.id)}
            >
              Detail
            </Button>
          </div>
        </div>
      </div>
      <ModalBox
        modal={isModalBox}
        onRemoveClick={handleRemoveClick}
        content={renderButton}
        text="Do you want to Remove Photo ?"
      />

      <PhotoDetail modal={ModalOnePhoto} />
    </div>
  );
};

export default PhotoCard;
