import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

const AddContactModal = (props) => {
  const { addContact, handleClose, createUser } = props;
  const [addList, setaddList] = useState({
    id: addContact,
    name: "",
    phone: "",
    username: "",
    email: "",
  });
  return (
    <Modal show={addContact} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input value={addList.id} disabled={true}></input>
        </div>
        <div>
          <input
            placeholder="name"
            value={addList.name}
            onChange={(e) => {
              setaddList({ ...addList, name: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <input
            placeholder="phone"
            value={addList.phone}
            onChange={(e) => {
              setaddList({ ...addList, phone: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <input
            placeholder="username"
            value={addList.username}
            onChange={(e) => {
              setaddList({ ...addList, username: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <input
            placeholder="email"
            value={addList.email}
            onChange={(e) => {
              setaddList({ ...addList, email: e.target.value });
            }}
          ></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={() => createUser(addList)}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddContactModal;
