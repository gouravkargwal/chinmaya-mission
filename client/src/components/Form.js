import React, { useState } from "react";

function Form() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  let [title, setTitle] = useState("Gourav");

  function updateTitle() {
    setTitle("Pass");
  }

  function handleForm(e) {
    e.preventDefault();
    const formData = { firstname: firstName, lastName: lastName };
    console.log(formData);
  }

  return (
    <>
      <form onSubmit={handleForm}>
        <label htmlFor="firstname">Firstname</label>
        <input
          type="text"
          id="firstname"
          name="firstname"
          onChange={function (event) {
            setFirstName(event.target.value);
          }}
        />
        <input
          type="text"
          placeholder="Lastname..."
          name="lastname"
          onChange={(e) => {
            setLastName(e.target.value);
          }}
        />
        {/* Ctrl + ? */}
        {/* <label htmlFor="cars">Choose a car:</label>
        <select id="cars">
          <option>Volvo</option>
          <option>Saab</option>
          <option>Fiat</option>
          <option>Audi</option>
        </select> */}
        <input type="submit" value="Add" />
      </form>
      <h1>{title}</h1>
      <button onClick={updateTitle}>Update Title</button>
    </>
  );
}

export default Form;
