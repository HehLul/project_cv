import { useState } from "react";
import Button from "./Button";
function Section({ sectionTitle, children }) {
  const [saveClicked, setSaveClicked] = useState(false);
  const [sectionData, setSectionData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    linkdn: "",
  });
  function handleSaveClicked(e) {
    e.preventDefault(); // Prevent the default form submission
    setSaveClicked(true);
    console.log("inside saveClicked:");
    console.log(e.target.value);
  }
  return (
    <>
      <form onSubmit={handleSaveClicked} className="section">
        <h1>{sectionTitle}</h1>
        {children}
        <div className="button-row">
          <Button text={"Edit"} />
          <Button text={"Save"} onChange={handleSaveClicked} />
        </div>
      </form>
      {/* <form action="" onSubmit={handleSaveClicked}>
        <input type="text" />
        <button type="submit"></button>
      </form> */}
    </>
  );
}
export default Section;
