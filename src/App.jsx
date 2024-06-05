import "./styles/App.css";
import Information from "./components/Information";
import Resume from "./components/Resume";
import { useState } from "react";

function App() {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    linkdn: "",
  });
  const [saveButtonPressed, setSaveButtonPressed] = useState(false);

  function handleSaveButtonPressed() {
    saveButtonPressed
      ? setSaveButtonPressed(false)
      : setSaveButtonPressed(true);
    console.log("data.fname in App Component: " + data.fname);
  }

  return (
    <div className="content">
      <Information
        handleSaveButtonPressed={handleSaveButtonPressed}
        setData={setData}
        data={data}
        saveButtonPressed={saveButtonPressed}
      />
      <Resume
        saveButtonPressed={saveButtonPressed}
        data={data}
        setSaveButtonPressed={setSaveButtonPressed}
      />
    </div>
  );
}

export default App;
