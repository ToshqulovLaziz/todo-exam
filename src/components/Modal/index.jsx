import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Context as TodoContext } from "../../context/TodoContext";

function DeleteModal() {

  

  const {handleDelete, modal, toggle} = React.useContext(TodoContext);

  return (
    <div>
      <Modal
        isOpen={modal}
        toggle={toggle}
      >
        <ModalHeader toggle={toggle}>Delete</ModalHeader>
        <ModalBody>
          <p>Todoni ochirishni hohlaysizmi</p>
        </ModalBody>
        <ModalFooter>
          <Button className="btn-primary" onClick={() => handleDelete()}>
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
