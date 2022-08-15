import React, { useState } from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (age < 0) {
      alert("Age has to be higher than 0!");
      return;
    }

    const user = {
      name: username,
      years: age,
    };
    props.passData(user);

    setUsername("");
    setAge("");
  };

  return (
    <form onSubmit={submitHandler} className="form-input">
      <div class="input-first">
        <label for="username">Username</label>
        <input
          onChange={(e) => setUsername(e.target.value)}
          id="username"
          type="text"
          value={username}
        />
      </div>
      <div className="input-second">
        <label for="age">Age</label>
        <input
          onChange={(e) => setAge(e.target.value)}
          id="age"
          type="number"
          value={age}
        />
      </div>
      <button id="btn">Add User</button>
    </form>
  );
};

export default FormInput;
