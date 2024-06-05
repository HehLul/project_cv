function EducationalExperienceSection({
  educationalData,
  setEducationalData,
  educationalSaveButtonPressed,
  handleEducationalSaveButtonPressed,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEducationalData({
      ...educationalData,
      [name]: value,
    });
    console.log(educationalData);
  };

  return (
    <>
      <section className="educational-experience-section">
        <h1>Educational Experience</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleEducationalSaveButtonPressed();
          }}
        >
          <input
            type="text"
            name="degree"
            placeholder="Degree"
            onChange={handleInputChange}
            value={educationalData.degree}
            disabled={educationalSaveButtonPressed}
          />
          <input
            type="text"
            name="university"
            placeholder="University"
            onChange={handleInputChange}
            value={educationalData.university}
            disabled={educationalSaveButtonPressed}
          />
          <input
            type="text"
            name="location"
            placeholder="City/Country"
            onChange={handleInputChange}
            value={educationalData.location}
            disabled={educationalSaveButtonPressed}
          />
          <input
            type="text"
            name="start"
            placeholder="Start Date"
            onChange={handleInputChange}
            value={educationalData.start}
            disabled={educationalSaveButtonPressed}
          />
          <input
            type="text"
            placeholder="End Date"
            name="end"
            onChange={handleInputChange}
            value={educationalData.end}
            disabled={educationalSaveButtonPressed}
          />
          <button>Edit</button>
          {!educationalSaveButtonPressed && <button type="submit">Save</button>}
        </form>
      </section>
    </>
  );
}
export default EducationalExperienceSection;
