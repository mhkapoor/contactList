import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import AddContactModal from "./components/AddContactModal";
import ListTable from "./components/ListTable";

function App() {
  const [list, setlist] = useState([]);
  useEffect(() => {
    async function getList() {
      const result = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setlist(result.data);
    }
    getList();
  }, []);
  const [addContact, setaddContact] = useState("");
  async function createUser(item) {
    console.log(item);
    const result = await axios.post(
      `https://jsonplaceholder.typicode.com/users`,
      item
    );
    console.log(result);
    let data = [...list, result.data];
    setlist(data);
    setaddContact("");
  }

  return (
    <div className="container">
      {addContact && (
        <AddContactModal
          addContact={addContact}
          handleClose={() => setaddContact("")}
          createUser={createUser}
        />
      )}
      <button onClick={() => setaddContact(list.length + 1)}>
        Add Contact
      </button>
      <ListTable list={list} setlist={setlist} />
    </div>
  );
}

export default App;
