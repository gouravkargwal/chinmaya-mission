import "./App.css";
import CatFact from "./components/CatFact";
import Form from "./components/Form";
import FormWithRef from "./components/FormWithRef";

function App() {
  return (
    <>
      <div>
        <h1>Welcome!</h1>
        <p className="red">lad asd asdas as d</p>
      </div>
      <h1 className="red">Hello!</h1>
      {/* <Form /> */}
      {/* <CatFact /> */}
      <h1>Ref Form</h1>
      <FormWithRef />
    </>
  );
}

export default App;
