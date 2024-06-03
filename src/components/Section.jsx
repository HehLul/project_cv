import { useState } from "react";
import Button from "./Button";
function Section({ sectionTitle, children }) {
  const [saveClicked, setSaveClicked] = useState(false);
  function handleSaveClicked() {
    setSaveClicked(true);
    console.log("inside saveClicked");
  }
  return (
    <div className="section">
      <h1>{sectionTitle}</h1>
      {children}
      <div className="button-row">
        <Button text={"Edit"} />
        <Button text={"Save"} onChange={handleSaveClicked} />
      </div>
    </div>
  );
}
export default Section;
