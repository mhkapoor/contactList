import axios from "axios";
import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import EditModal from "./EditModal";

const ListTable = (props) => {
  const { list, setlist } = props;
  const [show, setShow] = useState("");
  const handleModal = (item) => {
    setShow(item);
  };

  const handleDelete = async (id) => {
    const result = await axios.delete(
      `https://jsonplaceholder.typicode.com/users/${id}`
    );
    console.log(result);
    if (result.status == 200) {
      const arr = list.filter((item) => {
        return item.id != id;
      });

      setlist(arr);
    }
  };
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Username</th>
            <th>email</th>
          </tr>
        </thead>
        <tbody>
          {list?.length > 0 &&
            list.map((item) => {
              return (
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.phone}</td>
                  <td>{item.username}</td>
                  <td>{item.email}</td>
                  <td>
                    <button onClick={() => handleModal(item)}>Edit</button>
                  </td>
                  <td>
                    <button onClick={() => handleDelete(item.id)}>
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {show && (
        <EditModal
          show={show}
          setlist={setlist}
          list={list}
          handleClose={() => setShow("")}
        />
      )}
    </>
  );
};

export default ListTable;
