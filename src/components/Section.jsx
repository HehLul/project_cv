import Button from "./Button";
function Section({ sectionTitle, children }) {
  return (
    <div className="section">
      <h1>{sectionTitle}</h1>
      {children}
      <div className="button-row">
        <Button text={"Edit"} />
        <Button text={"Save"} />
      </div>
    </div>
  );
}
export default Section;
