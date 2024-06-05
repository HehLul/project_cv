import Section from "./Section";
import InputField from "./InputField";
import "../styles/Information.css";
import { useState } from "react";
import GeneralInformationSection from "./GeneralInformationSection";
function Information({ setSaveButtonPressed }) {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    linkdn: "",
  });
  function handleSaveButtonPressed(e) {
    e.preventDefault();
    console.log(e.target);
    console.log("data.fname in Information Componenet:" + data.fname);
  }
  return (
    <div className="information">
      <GeneralInformationSection
        data={data}
        setData={setData}
        handleSaveButtonPressed={handleSaveButtonPressed}
      ></GeneralInformationSection>
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
