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
  const [educationalData, setEducationalData] = useState({
    degree: "",
    university: "",
    location: "",
    start: "",
    end: "",
  });
  const [professionalData, setProfessionalData] = useState({
    title: "",
    location: "",
    detail: "",
    start: "",
    end: "",
  });
  const [saveButtonPressed, setSaveButtonPressed] = useState(false);
  const [educationalSaveButtonPressed, setEducationalSaveButtonPressed] =
    useState(false);
  const [professionalSaveButtonPressed, setProfessionalSaveButtonPressed] =
    useState(false);
  function handleSaveButtonPressed() {
    saveButtonPressed
      ? setSaveButtonPressed(false)
      : setSaveButtonPressed(true);
    console.log("data.fname in App Component: " + data.fname);
  }
  function handleEducationalSaveButtonPressed() {
    educationalSaveButtonPressed
      ? setEducationalSaveButtonPressed(false)
      : setEducationalSaveButtonPressed(true);
    console.log(
      "educationalData.degree in App Component: " + educationalData.degree
    );
  }
  function handleProfessionalSaveButtonPressed() {
    professionalSaveButtonPressed
      ? setProfessionalSaveButtonPressed(false)
      : setProfessionalSaveButtonPressed(true);
    console.log(
      "professionalData.title in App Component: " + professionalData.title
    );
  }

  return (
    <div className="content">
      <Information
        handleSaveButtonPressed={handleSaveButtonPressed}
        setData={setData}
        data={data}
        educationalData={educationalData}
        setEducationalData={setEducationalData}
        saveButtonPressed={saveButtonPressed}
        educationalSaveButtonPressed={educationalSaveButtonPressed}
        handleEducationalSaveButtonPressed={handleEducationalSaveButtonPressed}
        professionalData={professionalData}
        setProfessionalData={setProfessionalData}
        professionalSaveButtonPressed={professionalSaveButtonPressed}
        handleProfessionalSaveButtonPressed={
          handleProfessionalSaveButtonPressed
        }
      />
      <Resume
        saveButtonPressed={saveButtonPressed}
        educationalSaveButtonPressed={educationalSaveButtonPressed}
        data={data}
        educationalData={educationalData}
        professionalData={professionalData}
        professionalSaveButtonPressed={professionalSaveButtonPressed}
      />
    </div>
  );
}

export default App;
