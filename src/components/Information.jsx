import Section from "./Section";
import InputField from "./InputField";
import "../styles/Information.css";
import { useState } from "react";
import GeneralInformationSection from "./GeneralInformationSection";
function Information({
  handleSaveButtonPressed,
  setData,
  data,
  saveButtonPressed,
}) {
  return (
    <div className="information">
      <GeneralInformationSection
        data={data}
        setData={setData}
        handleSaveButtonPressed={handleSaveButtonPressed}
        saveButtonPressed={saveButtonPressed}
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
