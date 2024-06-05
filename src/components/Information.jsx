import Section from "./Section";
import InputField from "./InputField";
import "../styles/Information.css";
import EducationalExperienceSection from "./EducationalExperienceSection";
import { useState } from "react";
import GeneralInformationSection from "./GeneralInformationSection";
function Information({
  handleSaveButtonPressed,
  setData,
  data,
  educationalData,
  setEducationalData,
  saveButtonPressed,
  educationalSaveButtonPressed,
  handleEducationalSaveButtonPressed,
}) {
  return (
    <div className="information">
      <GeneralInformationSection
        data={data}
        setData={setData}
        handleSaveButtonPressed={handleSaveButtonPressed}
        saveButtonPressed={saveButtonPressed}
      ></GeneralInformationSection>

      <EducationalExperienceSection
        educationalData={educationalData}
        setEducationalData={setEducationalData}
        handleEducationalSaveButtonPressed={handleEducationalSaveButtonPressed}
        educationalSaveButtonPressed={educationalSaveButtonPressed}
      ></EducationalExperienceSection>
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
