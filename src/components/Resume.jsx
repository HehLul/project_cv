import React, { useEffect } from "react";
import "../styles/Resume.css";
function Resume({
  saveButtonPressed,
  data,
  educationalData,
  educationalSaveButtonPressed,
  professionalSaveButtonPressed,
  professionalData,
}) {
  console.log(
    "saveButtonPressed inside Resume Component: " + saveButtonPressed
  );

  return (
    <>
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
          <h2 className="section-title">Educational Experience</h2>
          {educationalSaveButtonPressed && (
            <>
              <div className="title-and-date">
                <h2>{educationalData.degree}</h2>
                <small>
                  {educationalData.start} {educationalData.end}
                </small>
              </div>

              <h3>
                {educationalData.university}/{educationalData.location}
              </h3>
              <div className="dates"></div>
            </>
          )}
        </div>
        <div className="professional-experience-section">
          <h2 className="section-title">Professional Experience</h2>
          {professionalSaveButtonPressed && (
            <>
              <div className="title-and-date">
                <h2>{professionalData.title}</h2>
                <small>
                  {professionalData.start} {professionalData.end}
                </small>
              </div>
              <h4>{professionalData.location}</h4>
              <p>{professionalData.detail}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}

export default Resume;
