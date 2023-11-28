// import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/Counter";
import InputField from "./components/InputField";
import SubmitBtn from "./components/SubmitBtn";
import Form from "./components/Form";
import ImageDiv from "./components/ImageDiv";
import CollageName from "./components/ImageDiv";
// import CollageName from "./components/CollageName";
// import CollageName from "./components/CollageName";

function App() {
  return (
    <div className="App">
      <Counter />
      <InputField />
      <SubmitBtn />
      <Form />
      <ImageDiv />
    </div>
  );
}

export default App;
