import React from "react";
import FormUser from "./FormUser";
import "./FormAppend.css";

const FormAppend = (props) => {
  return (
    <div className="display-user">
      {props.items.map((el) => {
        return (
          <FormUser key={el.id} id={el.id}>
            {el.username}({el.age})
          </FormUser>
        );
      })}
    </div>
  );
};

export default FormAppend;
