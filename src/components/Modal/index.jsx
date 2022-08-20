import { useEffect, useState } from "react";
import { Modal, ModalBody, ModalFooter } from "reactstrap";

const ModalBox = (props) => {
  const { modal, onRemoveClick, content, text } = props;

  const [isModal, setIsModal] = useState(false);

  useEffect(() => {
    setIsModal(modal);
  }, [modal]);
  const toggle = () => setIsModal(!modal);

  const handleRemovePhoto = () => {
    if (onRemoveClick) {
      onRemoveClick();
    }
  };
  return (
    <Modal isOpen={isModal} toggle={toggle}>
      <ModalBody>{text}</ModalBody>
      <ModalFooter>{content(handleRemovePhoto, toggle)}</ModalFooter>
    </Modal>
  );
};

export default ModalBox;
