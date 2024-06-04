import { useState } from "react";
import Button from "./Button";
function GeneralInformationSection({ sectionTitle, children }) {
  const [data, setData] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    linkdn: "",
  });
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
        <form action="">
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
        </form>
      </section>
    </>
  );
}
export default GeneralInformationSection;
