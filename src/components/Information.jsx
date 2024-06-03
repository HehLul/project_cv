import Section from "./Section";
import InputField from "./InputField";
import "../styles/Information.css";
function Information() {
  return (
    <div className="information">
      <Section sectionTitle={"General Information"}>
        <InputField placeholder={"First Name"} />
        <InputField placeholder={"Last Name"} />
        <InputField placeholder={"Email"} />
        <InputField placeholder={"Phone Number"} />
        <InputField placeholder={"Linkdn"} />
      </Section>
      <Section sectionTitle={"Educational Experience"}>
        <InputField placeholder={"Degree"} />
        <InputField placeholder={"University"} />
        <InputField placeholder={"City/Country"} />
        <InputField placeholder={"Start Date"} />
        <InputField placeholder={"End Date"} />
      </Section>
      <Section sectionTitle={"Professional Experience"}>
        <InputField placeholder={"Title"} />
        <InputField placeholder={"City/Country"} />
        <InputField placeholder={"Details"} />
        <InputField placeholder={"Start Date"} />
        <InputField placeholder={"End Date"} />
      </Section>
    </div>
  );
}
export default Information;
