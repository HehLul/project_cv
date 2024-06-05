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
    setSaveButtonPressed(true);
    console.log("data.fname in App Component: " + data.fname);
    <Resume
      saveButtonPressed={saveButtonPressed}
      data={data}
      setSaveButtonPressed={setSaveButtonPressed}
    />;
  }

  return (
    <div className="content">
      <Information
        handleSaveButtonPressed={handleSaveButtonPressed}
        setData={setData}
        data={data}
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
