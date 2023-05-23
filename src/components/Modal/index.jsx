import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Context as TodoContext } from "../../context/TodoContext";

const DeleteModal = () => {

  const {handleDelete, modal, toggle, id} = React.useContext(TodoContext);

  return (
    <div>
      <Modal
        isOpen={modal}
        modalTransition={{ timeout: 700 }}
        backdropTransition={{ timeout: 1300 }}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Delete</ModalHeader>
        <ModalBody>
          <p>Todoni ochirishni hohlaysizmi</p>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-primary" onClick={() => handleDelete(id)}>
            Yes
          </Button>{" "}
          <Button className="btn-secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default DeleteModal;
