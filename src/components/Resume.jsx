import React, { useEffect } from "react";

function Resume({
  saveButtonPressed,
  data,
  educationalData,
  educationalSaveButtonPressed,
}) {
  console.log(
    "saveButtonPressed inside Resume Component: " + saveButtonPressed
  );

  return (
    <div className="resume">
      <div className="general-information-section">
        {saveButtonPressed && (
          <>
            <h1>
              {data.fname} {data.lname}
            </h1>
            <p>
              {data.phone} {data.email} {data.linkdn}
            </p>
          </>
        )}
      </div>
      <div className="educational-experience-section">
        {educationalSaveButtonPressed && (
          <>
            <h2>{educationalData.degree}</h2>
            <h3>{educationalData.university}</h3>
            <h4>{educationalData.location}</h4>
            <div className="dates">
              {educationalData.start} {educationalData.end}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Resume;
