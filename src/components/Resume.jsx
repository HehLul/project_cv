import React, { useEffect } from "react";

function Resume({ saveButtonPressed, data, setSaveButtonPressed }) {
  // useEffect(() => {
  //   if (saveButtonPressed) {
  //     const timer = setTimeout(() => {
  //       setSaveButtonPressed(false);
  //     }, 2000); // Adjust the delay as needed (in milliseconds)

  //     return () => clearTimeout(timer);
  //   }
  // }, [saveButtonPressed, setSaveButtonPressed]);

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
    </div>
  );
}

export default Resume;
