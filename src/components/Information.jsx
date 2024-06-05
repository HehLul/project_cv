import "../styles/Information.css";
import EducationalExperienceSection from "./EducationalExperienceSection";
import ProfessionalExperienceSection from "./ProfessionalExperienceSection";
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
  professionalData,
  setProfessionalData,
  professionalSaveButtonPressed,
  handleProfessionalSaveButtonPressed,
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
      <ProfessionalExperienceSection
        professionalData={professionalData}
        setProfessionalData={setProfessionalData}
        handleProfessionalSaveButtonPressed={
          handleProfessionalSaveButtonPressed
        }
        professionalSaveButtonPressed={professionalSaveButtonPressed}
      ></ProfessionalExperienceSection>
    </div>
  );
}

export default Information;
