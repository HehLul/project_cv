function GeneralInformationSection({ data, setData, handleSaveButtonPressed }) {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    console.log();
  };
  const handleSaveClicked = (e) => {
    e.preventDefault();
    setData(data);
  };
  return (
    <>
      <section className="general-information-section">
        <h1>General Information</h1>
        <form onSubmit={handleSaveClicked}>
          <input
            type="text"
            name="fname"
            placeholder="First Name"
            onChange={handleInputChange}
            value={data.fname}
          />
          <input
            type="text"
            name="lname"
            placeholder="Last Name"
            onChange={handleInputChange}
            value={data.lname}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            onChange={handleInputChange}
            value={data.email}
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleInputChange}
            value={data.phone}
          />
          <input
            type="text"
            placeholder="Linkdn"
            name="linkdn"
            onChange={handleInputChange}
            value={data.linkdn}
          />
          <button>Edit</button>
          <button type="submit" onClick={handleSaveButtonPressed}>
            Save
          </button>
        </form>
      </section>
    </>
  );
}
export default GeneralInformationSection;
