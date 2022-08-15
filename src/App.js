import React, { useState } from "react";
import FormInput from "./components/FormInput";
import FormAppend from "./components/FormAppend";
import "./App.css";

function App() {
  const [users, setUsers] = useState([]);

  const passDataHandler = (data) => {
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers];
      updatedUsers.unshift({
        username: data.name,
        age: data.years,
        id: Math.random().toString(),
      });
      console.log(users)
      return updatedUsers;


    });
  };

  return (
    <div className="container">
      <FormInput passData={passDataHandler} />
      <FormAppend items={users} />
    </div>
  );
}

export default App;
