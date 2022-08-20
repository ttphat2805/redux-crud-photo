import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./style.scss";
const PhotoDetail = (props) => {
  const { modal } = props;
  const photo = useSelector((state) => state.photos.onePhoto);
  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setIsModal(modal);
  }, [modal]);
  const toggle = () => setIsModal(!modal);
  return (
    <div>
      <Modal isOpen={isModal} toggle={toggle}>
        <ModalHeader className="text-center" toggle={toggle}>
          {photo.title}
        </ModalHeader>
        <ModalBody>
          <img src={photo.photo} alt={photo.title} className="image-detail" />
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default PhotoDetail;
