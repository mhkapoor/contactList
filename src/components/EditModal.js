import axios from "axios";
import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../style/modal.css";

const EditModal = (props) => {
  const { handleClose, show, setlist, list } = props;

  const [editlist, setEditlist] = useState(show);

  const saveChanges = async () => {
    const result = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${editlist.id}`,
      editlist
    );
    const index = list.findIndex((item) => {
      return item.id == result.data.id;
    });
    let data = list;
    data[index] = result.data;
    setlist(data);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Contact List</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
          <input value={editlist.id} disabled={true}></input>
        </div>
        <div>
          <input
            value={editlist.name}
            onChange={(e) => {
              setEditlist({ ...editlist, name: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <input
            value={editlist.phone}
            onChange={(e) => {
              setEditlist({ ...editlist, phone: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <input
            value={editlist.username}
            onChange={(e) => {
              setEditlist({ ...editlist, username: e.target.value });
            }}
          ></input>
        </div>
        <div>
          <input
            value={editlist.email}
            onChange={(e) => {
              setEditlist({ ...editlist, email: e.target.value });
            }}
          ></input>
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={saveChanges}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default EditModal;
