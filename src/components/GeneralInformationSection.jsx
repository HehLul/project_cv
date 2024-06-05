function GeneralInformationSection({
  data,
  setData,
  handleSaveButtonPressed,
  saveButtonPressed,
}) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log();
  };

  return (
    <>
      <section className="general-information-section">
        <h1>General Information</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSaveButtonPressed();
          }}
        >
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleInputChange}
            value={data.fname}
            disabled={saveButtonPressed}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleInputChange}
            value={data.lname}
            disabled={saveButtonPressed}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={data.email}
            disabled={saveButtonPressed}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleInputChange}
            value={data.phone}
            disabled={saveButtonPressed}
          />
          <input
            type="text"
            placeholder="Linkdn"
            name="linkdn"
            onChange={handleInputChange}
            value={data.linkdn}
            disabled={saveButtonPressed}
          />
          <button>Edit</button>
          {!saveButtonPressed && <button type="submit">Save</button>}
        </form>
      </section>
    </>
  );
}
export default GeneralInformationSection;
