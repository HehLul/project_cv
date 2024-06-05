function ProfessionalExperienceSection({
  professionalData,
  setProfessionalData,
  professionalSaveButtonPressed,
  handleProfessionalSaveButtonPressed,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfessionalData({
      ...professionalData,
      [name]: value,
    });
    console.log(professionalData);
  };

  return (
    <>
      <section className="professional-experience-section">
        <h1>Professional Experience</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleProfessionalSaveButtonPressed();
          }}
        >
          <input
            type="text"
            name="title"
            placeholder="Title"
            onChange={handleInputChange}
            value={professionalData.title}
            disabled={professionalSaveButtonPressed}
          />
          <input
            type="text"
            name="location"
            placeholder="City/Country"
            onChange={handleInputChange}
            value={professionalData.location}
            disabled={professionalSaveButtonPressed}
          />
          <textarea
            type="text"
            name="detail"
            placeholder="Details"
            onChange={handleInputChange}
            value={professionalData.detail}
            disabled={professionalSaveButtonPressed}
          />
          <input
            type="text"
            name="start"
            placeholder="Start Date"
            onChange={handleInputChange}
            value={professionalData.start}
            disabled={professionalSaveButtonPressed}
          />
          <input
            type="text"
            placeholder="End Date"
            name="end"
            onChange={handleInputChange}
            value={professionalData.end}
            disabled={professionalSaveButtonPressed}
          />
          <button>Edit</button>
          {!professionalSaveButtonPressed && (
            <button type="submit">Save</button>
          )}
        </form>
      </section>
    </>
  );
}
export default ProfessionalExperienceSection;
