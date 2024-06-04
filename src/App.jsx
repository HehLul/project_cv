import "./styles/App.css";
import Information from "./components/Information";
import Resume from "./components/Resume";
import { useState } from "react";
function App() {
  const [generalDataSaved, setGeneralDataSaved] = useState({
    firstName: "FIRSTNAME",
    lastName: "LASTNAME",
    email: "random@gmail.com",
    phoneNumber: "123-344-4343",
  });
  function handleGeneralDataSaved() {
    //setGeneralDataSaved to the form inputs
  }
  return (
    <div className="content">
      <Information
        generalDataSaved={generalDataSaved}
        onChange={handleGeneralDataSaved}
      ></Information>
      <Resume generalDataSaved={generalDataSaved}></Resume>
    </div>
  );
}

export default App;
