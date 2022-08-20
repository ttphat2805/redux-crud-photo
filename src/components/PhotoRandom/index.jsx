import React from "react";
import { Button } from "reactstrap";
import "./style.scss";

const getRandomImageUrl = () => {
  const randomId = Math.trunc(Math.random() * 2000);
  return `https://picsum.photos/id/${randomId}/300/300`;
};

const PhotoRandom = (props) => {
  const { name, imageUrl, onImageUrlChange, onRandomButtonBlur, className } =
    props;
  const handleRandomPhotoClick = async () => {
    if (onImageUrlChange) {
      const randomImageUrl = getRandomImageUrl();
      onImageUrlChange(randomImageUrl);
    }
  };
  return (
    <>
      <div className="random-photo">
        <div className="random-photo__button">
          <Button
            outline
            name={name}
            color="primary"
            onBlur={onRandomButtonBlur}
            onClick={handleRandomPhotoClick}
          >
            Random a photo
          </Button>
        </div>

        <div className="random-photo__photo">
          {imageUrl && (
            <img
              src={imageUrl}
              alt="Ooops ... not found. Please click random again!"
              onError={handleRandomPhotoClick}
            />
          )}
        </div>
      </div>
      <div className={className ? "is-invalid" : ""}></div>
    </>
  );
};

export default PhotoRandom;
