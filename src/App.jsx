import "./styles/App.css";
import Information from "./components/Information";
import Resume from "./components/Resume";
import { useState } from "react";
function App() {
  const [data, setData] = useState({
    firstName: "FIRSTNAME",
    lastName: "LASTNAME",
    email: "random@gmail.com",
    phoneNumber: "123-344-4343",
  });
  function handleSaveButtonPressed() {
    setSaveButtonPressed(true);
  }
  const [saveButtonPressed, setSaveButtonPressed] = useState(false);
  return (
    <div className="content">
      <Information setSaveButtonPressed={setSaveButtonPressed}></Information>
      <Resume data={data}></Resume>
    </div>
  );
}

export default App;
