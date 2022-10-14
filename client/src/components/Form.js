import React from "react";

function Form() {
  const [firstName, setFirstName] = React.useState(null);
  let [title, setTitle] = React.useState("Gourav");

  function updateTitle() {
    setTitle("Pass");
  }
  console.log("render!");
  return (
    <>
      <form>
        <label htmlFor="firstname">Firstname</label>
        <input type="text" id="firstname" name="firstname" />
        <input type="text" placeholder="Lastname..." name="lastname" />
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
