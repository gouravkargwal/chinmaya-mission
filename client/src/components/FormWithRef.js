import React, { useRef } from "react";

function FormWithRef() {
  const firstNameInput = useRef(null);
  const lastNameInput = useRef(null);

  function handleForm(e) {
    e.preventDefault();
    let firstname = firstNameInput.current.value;
    let lastname = lastNameInput.current.value;
    console.log(firstname, lastname);
  }

  console.log("render");

  return (
    <>
      <form onSubmit={handleForm}>
        <input
          type="text"
          placeholder="Firstname..."
          name="firstname"
          ref={firstNameInput}
        />
        <input
          type="text"
          placeholder="Lastname..."
          name="lastname"
          ref={lastNameInput}
        />
        <input type="submit" value="Add" />
      </form>
    </>
  );
}

export default FormWithRef;
