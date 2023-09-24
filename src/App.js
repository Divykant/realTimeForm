// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [txtValue, setTxtValue] = useState("");

//   const handleInputChange = (e) => {
//     setTxtValue(e.target.value);
//   };

//   return (
//     <div>
//       <input id="txt" onChange={handleInputChange} value={txtValue} />
//       <br />
//       <span id="result">{txtValue}</span>
//     </div>
//   );
// }

// export default App;

//method2

// import React, { useState } from "react";

// function App() {
//   const [stage, setStage] = useState(1);
//   const [formData, setFormData] = useState({
//     stage1: { RequistionTitle: "", numberOfOpenings: "", urgency: "" },
//     stage2: { jobTitle: "", jobDetails: "", jobLocation: "" },
//     stage3: { InterviewMode: "", InterviewDuration: "", interviewLanguage: "" },
//   });

//   const handleNext = () => {
//     setStage(stage + 1);
//   };

//   const handlePrevious = () => {
//     setStage(stage - 1);
//   };

//   const handleInputChange = (e, stageName) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [stageName]: {
//         ...formData[stageName],
//         [name]: value,
//       },
//     });
//   };

//   const handleSubmit = () => {
// Handle form submission here, you can access all form data in formData object.
//     console.log(formData);
//   };

//   return (
//     <div>
//       <h1>3-Stage Form</h1>
//       {stage === 1 && (
//         <div>
//           <h2>Stage 1</h2>
//           <input
//             type="text"
//             name="RequistionTitle"
//             placeholder="Field 1"
//             value={formData.stage1.RequistionTitle}
//             onChange={(e) => handleInputChange(e, "stage1")}
//           />
//           <input
//             type="text"
//             name="numberOfOpenings"
//             placeholder="Field 2"
//             value={formData.stage1.numberOfOpenings}
//             onChange={(e) => handleInputChange(e, "stage1")}
//           />
//           <input
//             type="text"
//             name="urgency"
//             placeholder="Field 3"
//             value={formData.stage1.urgency}
//             onChange={(e) => handleInputChange(e, "stage1")}
//           />
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}

//       {stage === 2 && (
//         <div>
//           <h2>Stage 2</h2>
//           <input
//             type="text"
//             name="jobTitle"
//             placeholder="Field 4"
//             value={formData.stage2.jobTitle}
//             onChange={(e) => handleInputChange(e, "stage2")}
//           />
//           <input
//             type="text"
//             name="jobDetails"
//             placeholder="Field 5"
//             value={formData.stage2.jobDetails}
//             onChange={(e) => handleInputChange(e, "stage2")}
//           />
//           <input
//             type="text"
//             name="jobLocation"
//             placeholder="Field 6"
//             value={formData.stage2.jobLocation}
//             onChange={(e) => handleInputChange(e, "stage2")}
//           />
//           <button onClick={handlePrevious}>Previous</button>
//           <button onClick={handleNext}>Next</button>
//         </div>
//       )}

//       {stage === 3 && (
//         <div>
//           <h2>Stage 3</h2>
//           <input
//             type="text"
//             name="InterviewMode"
//             placeholder="Field 7"
//             value={formData.stage3.InterviewMode}
//             onChange={(e) => handleInputChange(e, "stage3")}
//           />
//           <input
//             type="text"
//             name="InterviewDuration"
//             placeholder="Field 8"
//             value={formData.stage3.InterviewDuration}
//             onChange={(e) => handleInputChange(e, "stage3")}
//           />
//           <input
//             type="text"
//             name="interviewLanguage"
//             placeholder="Field 9"
//             value={formData.stage3.interviewLanguage}
//             onChange={(e) => handleInputChange(e, "stage3")}
//           />
//           <button onClick={handlePrevious}>Previous</button>
//           <button onClick={handleSubmit}>Submit</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

//method 3

// import React, { useState } from "react";

// function App() {
//   const [stage, setStage] = useState(1);
//   const [formData, setFormData] = useState({
//     stage1: { RequistionTitle: "", numberOfOpenings: "", urgency: "" },
//     stage2: { jobTitle: "", jobDetails: "", jobLocation: "" },
//     stage3: { InterviewMode: "", InterviewDuration: "", interviewLanguage: "" },
//   });

//   const handleNext = () => {
//     if (stage < 3) {
//       setStage(stage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (stage > 1) {
//       setStage(stage - 1);
//     }
//   };

//   const handleInputChange = (e, stageName) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [stageName]: {
//         ...formData[stageName],
//         [name]: value,
//       },
//     });
//   };

//   const handleSubmit = () => {
// Handle form submission here, you can access all form data in formData object.
//     console.log(formData);
//   };

//   return (
//     <div>
//       <h1>3-Stage Form</h1>
//       <div>
//         {stage === 1 && (
//           <div>
//             <h2>Stage 1</h2>
//             <input
//               type="text"
//               name="RequistionTitle"
//               placeholder="Field 1"
//               value={formData.stage1.RequistionTitle}
//               onChange={(e) => handleInputChange(e, "stage1")}
//             />
//             <input
//               type="text"
//               name="numberOfOpenings"
//               placeholder="Field 2"
//               value={formData.stage1.numberOfOpenings}
//               onChange={(e) => handleInputChange(e, "stage1")}
//             />
//             <input
//               type="text"
//               name="urgency"
//               placeholder="Field 3"
//               value={formData.stage1.urgency}
//               onChange={(e) => handleInputChange(e, "stage1")}
//             />
//           </div>
//         )}

//         {stage === 2 && (
//           <div>
//             <h2>Stage 2</h2>
//             <input
//               type="text"
//               name="jobTitle"
//               placeholder="Field 4"
//               value={formData.stage2.jobTitle}
//               onChange={(e) => handleInputChange(e, "stage2")}
//             />
//             <input
//               type="text"
//               name="jobDetails"
//               placeholder="Field 5"
//               value={formData.stage2.jobDetails}
//               onChange={(e) => handleInputChange(e, "stage2")}
//             />
//             <input
//               type="text"
//               name="jobLocation"
//               placeholder="Field 6"
//               value={formData.stage2.jobLocation}
//               onChange={(e) => handleInputChange(e, "stage2")}
//             />
//           </div>
//         )}

//         {stage === 3 && (
//           <div>
//             <h2>Stage 3</h2>
//             <input
//               type="text"
//               name="InterviewMode"
//               placeholder="Field 7"
//               value={formData.stage3.InterviewMode}
//               onChange={(e) => handleInputChange(e, "stage3")}
//             />
//             <input
//               type="text"
//               name="InterviewDuration"
//               placeholder="Field 8"
//               value={formData.stage3.InterviewDuration}
//               onChange={(e) => handleInputChange(e, "stage3")}
//             />
//             <input
//               type="text"
//               name="interviewLanguage"
//               placeholder="Field 9"
//               value={formData.stage3.interviewLanguage}
//               onChange={(e) => handleInputChange(e, "stage3")}
//             />
//           </div>
//         )}

//         <div>
//           {stage > 1 && <button onClick={handlePrevious}>Previous</button>}
//           {stage < 3 ? (
//             <button onClick={handleNext}>Next</button>
//           ) : (
//             <button onClick={handleSubmit}>Submit</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

// method4

// import React, { useState } from "react";

// function App() {
//   const [stage, setStage] = useState(1);
//   const [formData, setFormData] = useState({
//     stage1: { RequistionTitle: "", numberOfOpenings: "", urgency: "" },
//     stage2: { jobTitle: "", jobDetails: "", jobLocation: "" },
//     stage3: { InterviewMode: "", InterviewDuration: "", interviewLanguage: "" },
//   });

//   const handleStageClick = (newStage) => {
//     setStage(newStage);
//   };

//   const handleNext = () => {
//     if (stage < 3) {
//       setStage(stage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (stage > 1) {
//       setStage(stage - 1);
//     }
//   };

//   const handleInputChange = (e, stageName) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [stageName]: {
//         ...formData[stageName],
//         [name]: value,
//       },
//     });
//   };

//   const handleSubmit = () => {

//     console.log(formData);
//   };

//   return (
//     <div>
//       <h1>3-Stage Form</h1>
//       <div>
//         <div className="nav-bar">
//           <button onClick={() => handleStageClick(1)}>Stage 1</button>
//           <button onClick={() => handleStageClick(2)}>Stage 2</button>
//           <button onClick={() => handleStageClick(3)}>Stage 3</button>
//         </div>
//         {stage === 1 && (
//           <div>
//             <h2>Stage 1</h2>
//             <input
//               type="text"
//               name="RequistionTitle"
//               placeholder="Field 1"
//               value={formData.stage1.RequistionTitle}
//               onChange={(e) => handleInputChange(e, "stage1")}
//             />
//             <input
//               type="text"
//               name="numberOfOpenings"
//               placeholder="Field 2"
//               value={formData.stage1.numberOfOpenings}
//               onChange={(e) => handleInputChange(e, "stage1")}
//             />
//             <input
//               type="text"
//               name="urgency"
//               placeholder="Field 3"
//               value={formData.stage1.urgency}
//               onChange={(e) => handleInputChange(e, "stage1")}
//             />
//           </div>
//         )}

//         {stage === 2 && (
//           <div>
//             <h2>Stage 2</h2>
//             <input
//               type="text"
//               name="jobTitle"
//               placeholder="Field 4"
//               value={formData.stage2.jobTitle}
//               onChange={(e) => handleInputChange(e, "stage2")}
//             />
//             <input
//               type="text"
//               name="jobDetails"
//               placeholder="Field 5"
//               value={formData.stage2.jobDetails}
//               onChange={(e) => handleInputChange(e, "stage2")}
//             />
//             <input
//               type="text"
//               name="jobLocation"
//               placeholder="Field 6"
//               value={formData.stage2.jobLocation}
//               onChange={(e) => handleInputChange(e, "stage2")}
//             />
//           </div>
//         )}

//         {stage === 3 && (
//           <div>
//             <h2>Stage 3</h2>
//             <input
//               type="text"
//               name="InterviewMode"
//               placeholder="Field 7"
//               value={formData.stage3.InterviewMode}
//               onChange={(e) => handleInputChange(e, "stage3")}
//             />
//             <input
//               type="text"
//               name="InterviewDuration"
//               placeholder="Field 8"
//               value={formData.stage3.InterviewDuration}
//               onChange={(e) => handleInputChange(e, "stage3")}
//             />
//             <input
//               type="text"
//               name="interviewLanguage"
//               placeholder="Field 9"
//               value={formData.stage3.interviewLanguage}
//               onChange={(e) => handleInputChange(e, "stage3")}
//             />
//           </div>
//         )}

//         <div>
//           {stage > 1 && <button onClick={handlePrevious}>Previous</button>}
//           {stage < 3 ? (
//             <button onClick={handleNext}>Next</button>
//           ) : (
//             <button onClick={handleSubmit}>Submit</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//method5

// import React, { useState } from "react";

// function App() {
//   const [stage, setStage] = useState(1);
//   const [formData, setFormData] = useState({
//     stage1: { RequistionTitle: "", numberOfOpenings: "", urgency: "" },
//     stage2: { jobTitle: "", jobDetails: "", jobLocation: "" },
//     stage3: { InterviewMode: "", InterviewDuration: "", interviewLanguage: "" },
//   });

//   const handleStageClick = (newStage) => {
//     setStage(newStage);
//   };

//   const handleNext = () => {
//     if (stage < 3) {
//       setStage(stage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (stage > 1) {
//       setStage(stage - 1);
//     }
//   };

//   const handleInputChange = (e, stageName) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [stageName]: {
//         ...formData[stageName],
//         [name]: value,
//       },
//     });
//   };

//   return (
//     <div>
//       <h1>3-Stage Form</h1>
//       <div className="form-container">
//         <div className="nav-bar">
//           <button onClick={() => handleStageClick(1)}>Stage 1</button>
//           <button onClick={() => handleStageClick(2)}>Stage 2</button>
//           <button onClick={() => handleStageClick(3)}>Stage 3</button>
//         </div>
//         <div className="form">
//           {stage === 1 && (
//             <div>
//               <h2>Stage 1</h2>
//               <input
//                 type="text"
//                 name="RequistionTitle"
//                 placeholder="Field 1"
//                 value={formData.stage1.RequistionTitle}
//                 onChange={(e) => handleInputChange(e, "stage1")}
//               />
//               <input
//                 type="text"
//                 name="numberOfOpenings"
//                 placeholder="Field 2"
//                 value={formData.stage1.numberOfOpenings}
//                 onChange={(e) => handleInputChange(e, "stage1")}
//               />
//               <input
//                 type="text"
//                 name="urgency"
//                 placeholder="Field 3"
//                 value={formData.stage1.urgency}
//                 onChange={(e) => handleInputChange(e, "stage1")}
//               />
//             </div>
//           )}

//           {stage === 2 && (
//             <div>
//               <h2>Stage 2</h2>
//               <input
//                 type="text"
//                 name="jobTitle"
//                 placeholder="Field 4"
//                 value={formData.stage2.jobTitle}
//                 onChange={(e) => handleInputChange(e, "stage2")}
//               />
//               <input
//                 type="text"
//                 name="jobDetails"
//                 placeholder="Field 5"
//                 value={formData.stage2.jobDetails}
//                 onChange={(e) => handleInputChange(e, "stage2")}
//               />
//               <input
//                 type="text"
//                 name="jobLocation"
//                 placeholder="Field 6"
//                 value={formData.stage2.jobLocation}
//                 onChange={(e) => handleInputChange(e, "stage2")}
//               />
//             </div>
//           )}

//           {stage === 3 && (
//             <div>
//               <h2>Stage 3</h2>
//               <input
//                 type="text"
//                 name="InterviewMode"
//                 placeholder="Field 7"
//                 value={formData.stage3.InterviewMode}
//                 onChange={(e) => handleInputChange(e, "stage3")}
//               />
//               <input
//                 type="text"
//                 name="InterviewDuration"
//                 placeholder="Field 8"
//                 value={formData.stage3.InterviewDuration}
//                 onChange={(e) => handleInputChange(e, "stage3")}
//               />
//               <input
//                 type="text"
//                 name="interviewLanguage"
//                 placeholder="Field 9"
//                 value={formData.stage3.interviewLanguage}
//                 onChange={(e) => handleInputChange(e, "stage3")}
//               />
//             </div>
//           )}
//         </div>
//         <div className="values">
//           <h2>Input Values</h2>
//           <div>
//             {Object.keys(formData[`stage${stage}`]).map((fieldName) => (
//               <p key={fieldName}>
//                 {fieldName}: {formData[`stage${stage}`][fieldName]}
//               </p>
//             ))}
//           </div>
//         </div>
//         <div className="buttons">
//           {stage > 1 && <button onClick={handlePrevious}>Previous</button>}
//           {stage < 3 ? (
//             <button onClick={handleNext}>Next</button>
//           ) : (
//             <button onClick={() => alert("Form submitted!")}>Submit</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//method6

// import React, { useState } from "react";

// function App() {
//   const [stage, setStage] = useState(1);
//   const [formData, setFormData] = useState({
//     stage1: { RequistionTitle: "", numberOfOpenings: "", urgency: "" },
//     stage2: { jobTitle: "", jobDetails: "", jobLocation: "" },
//     stage3: { InterviewMode: "", InterviewDuration: "", interviewLanguage: "" },
//   });

//   const handleStageClick = (newStage) => {
//     setStage(newStage);
//   };

//   const handleNext = () => {
//     if (stage < 3) {
//       setStage(stage + 1);
//     }
//   };

//   const handlePrevious = () => {
//     if (stage > 1) {
//       setStage(stage - 1);
//     }
//   };

//   const handleInputChange = (e, stageName) => {
//     const { name, value } = e.target;
//     setFormData({
//       ...formData,
//       [stageName]: {
//         ...formData[stageName],
//         [name]: value,
//       },
//     });
//   };

//   return (
//     <div>
//       <h1>3-Stage Form</h1>
//       <div className="form-container">
//         <div className="nav-bar">
//           <button onClick={() => handleStageClick(1)}>Stage 1</button>
//           <button onClick={() => handleStageClick(2)}>Stage 2</button>
//           <button onClick={() => handleStageClick(3)}>Stage 3</button>
//         </div>
//         <div className="form">
//           {stage === 1 && (
//             <div>
//               <h2>Stage 1</h2>
//               <input
//                 type="text"
//                 name="RequistionTitle"
//                 placeholder="Field 1"
//                 value={formData.stage1.RequistionTitle}
//                 onChange={(e) => handleInputChange(e, "stage1")}
//               />
//               <input
//                 type="text"
//                 name="numberOfOpenings"
//                 placeholder="Field 2"
//                 value={formData.stage1.numberOfOpenings}
//                 onChange={(e) => handleInputChange(e, "stage1")}
//               />
//               <input
//                 type="text"
//                 name="urgency"
//                 placeholder="Field 3"
//                 value={formData.stage1.urgency}
//                 onChange={(e) => handleInputChange(e, "stage1")}
//               />
//             </div>
//           )}

//           {stage === 2 && (
//             <div>
//               <h2>Stage 2</h2>
//               <input
//                 type="text"
//                 name="jobTitle"
//                 placeholder="Field 4"
//                 value={formData.stage2.jobTitle}
//                 onChange={(e) => handleInputChange(e, "stage2")}
//               />
//               <input
//                 type="text"
//                 name="jobDetails"
//                 placeholder="Field 5"
//                 value={formData.stage2.jobDetails}
//                 onChange={(e) => handleInputChange(e, "stage2")}
//               />
//               <input
//                 type="text"
//                 name="jobLocation"
//                 placeholder="Field 6"
//                 value={formData.stage2.jobLocation}
//                 onChange={(e) => handleInputChange(e, "stage2")}
//               />
//             </div>
//           )}

//           {stage === 3 && (
//             <div>
//               <h2>Stage 3</h2>
//               <input
//                 type="text"
//                 name="InterviewMode"
//                 placeholder="Field 7"
//                 value={formData.stage3.InterviewMode}
//                 onChange={(e) => handleInputChange(e, "stage3")}
//               />
//               <input
//                 type="text"
//                 name="InterviewDuration"
//                 placeholder="Field 8"
//                 value={formData.stage3.InterviewDuration}
//                 onChange={(e) => handleInputChange(e, "stage3")}
//               />
//               <input
//                 type="text"
//                 name="interviewLanguage"
//                 placeholder="Field 9"
//                 value={formData.stage3.interviewLanguage}
//                 onChange={(e) => handleInputChange(e, "stage3")}
//               />
//             </div>
//           )}
//         </div>
//         <div className="values">
//           <h2>Input Values</h2>
//           <div>
//             {Object.keys(formData).map((stageName) =>
//               Object.keys(formData[stageName]).map((fieldName) => (
//                 <p key={fieldName}>
//                   {fieldName}: {formData[stageName][fieldName]}
//                 </p>
//               ))
//             )}
//           </div>
//         </div>
//         <div className="buttons">
//           {stage > 1 && <button onClick={handlePrevious}>Previous</button>}
//           {stage < 3 ? (
//             <button onClick={handleNext}>Next</button>
//           ) : (
//             <button onClick={() => alert("Form submitted!")}>Submit</button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

//method7

import React, { useState } from "react";
import "./App.css";
function App() {
  const [stage, setStage] = useState(1);
  const [formData, setFormData] = useState({
    stage1: {
      RequistionTitle: "",
      numberOfOpenings: "",
      urgency: "",
      gender: "male",
    },
    stage2: {
      jobTitle: "",
      jobDetails: "",
      jobLocation: "",
      interviewMode: "online",
    },
    stage3: {
      InterviewMode: "",
      InterviewDuration: "short",
      interviewLanguage: "english",
    },
  });

  const [validationErrors, setValidationErrors] = useState({
    stage1: {
      RequistionTitle: "",
      numberOfOpenings: "",
      urgency: "",
    },
    stage2: {
      jobTitle: "",
      jobDetails: "",
      jobLocation: "",
    },
    stage3: {
      InterviewMode: "",
    },
  });

  const handleStageClick = (newStage) => {
    // Validate fields before moving to the next stage
    if (validateStage(stage)) {
      setStage(newStage);
    }
  };

  const handleNext = () => {
    // Validate fields before moving to the next stage
    if (validateStage(stage)) {
      if (stage < 3) {
        setStage(stage + 1);
      }
    }
  };

  const handlePrevious = () => {
    if (stage > 1) {
      setStage(stage - 1);
    }
  };

  const handleInputChange = (e, stageName) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [stageName]: {
        ...formData[stageName],
        [name]: value,
      },
    });
    // Reset validation error for the current field
    setValidationErrors({
      ...validationErrors,
      [stageName]: {
        ...validationErrors[stageName],
        [name]: "",
      },
    });
  };

  const validateStage = (stageNumber) => {
    const stageData = formData[`stage${stageNumber}`];
    const errors = {};
    let isValid = true;

    // Stage 1 validation
    if (stageNumber === 1) {
      if (
        stageData.RequistionTitle.length < 2 ||
        !/^[a-zA-Z]+$/.test(stageData.RequistionTitle)
      ) {
        errors.RequistionTitle =
          "Field 1 must have at least 2 alphabetical characters.";
        isValid = false;
      }

      if (
        stageData.numberOfOpenings.length < 2 ||
        !/^[0-9]+$/.test(stageData.numberOfOpenings)
      ) {
        errors.numberOfOpenings =
          "Field 2 must have at least 2 numeric characters.";
        isValid = false;
      }

      if (
        stageData.urgency.length < 2 ||
        !/^[a-zA-Z]+$/.test(stageData.urgency)
      ) {
        errors.urgency =
          "Field 3 must have at least 2 alphabetical characters.";
        isValid = false;
      }
    }

    // Stage 2 validation
    if (stageNumber === 2) {
      if (
        stageData.jobTitle.length < 2 ||
        !/^[a-zA-Z]+$/.test(stageData.jobTitle)
      ) {
        errors.jobTitle =
          "Field 4 must have at least 2 alphabetical characters.";
        isValid = false;
      }

      if (
        stageData.jobDetails.length < 2 ||
        !/^[0-9]+$/.test(stageData.jobDetails)
      ) {
        errors.jobDetails = "Field 5 must have at least 2 numeric characters.";
        isValid = false;
      }

      if (
        stageData.jobLocation.length < 2 ||
        !/^[a-zA-Z]+$/.test(stageData.jobLocation)
      ) {
        errors.jobLocation =
          "Field 6 must have at least 2 alphabetical characters.";
        isValid = false;
      }
    }

    // Stage 3 validation
    if (stageNumber === 3) {
      if (!stageData.InterviewMode) {
        errors.InterviewMode = "Please select an Interview Mode.";
        isValid = false;
      }
    }

    setValidationErrors({
      ...validationErrors,
      [`stage${stageNumber}`]: errors,
    });

    return isValid;
  };

  return (
    <div>
      <h1>Create Candidate Requistion</h1>
      <div className="form-container">
        <div className="nav-bar">
          <button onClick={() => handleStageClick(1)}>
            Requistion Details{" "}
          </button>
          <button onClick={() => handleStageClick(2)}>Job Details</button>
          <button onClick={() => handleStageClick(3)}>
            Interview Settings
          </button>
        </div>
        <div className="main-div">
          <div className="form">
            {stage === 1 && (
              <div>
                <h2>Stage 1</h2>
                <label>Requistion Title</label>
                <input
                  type="text"
                  name="RequistionTitle"
                  placeholder="Field 1 (Alphabet)"
                  value={formData.stage1.RequistionTitle}
                  onChange={(e) => handleInputChange(e, "stage1")}
                />
                <br></br>
                <span className="error">
                  {validationErrors.stage1.RequistionTitle}
                </span>
                <label>number of openings </label>
                <input
                  type="text"
                  name="numberOfOpenings"
                  placeholder="Field 2 (Number)"
                  value={formData.stage1.numberOfOpenings}
                  onChange={(e) => handleInputChange(e, "stage1")}
                />
                <br></br>
                <span className="error">
                  {validationErrors.stage1.numberOfOpenings}
                </span>
                <label>urgency</label>
                <input
                  type="text"
                  name="urgency"
                  placeholder="Field 3 (Alphabet)"
                  value={formData.stage1.urgency}
                  onChange={(e) => handleInputChange(e, "stage1")}
                />
                <br></br>
                <span className="error">{validationErrors.stage1.urgency}</span>
                <label>gender</label>
                <select
                  name="gender"
                  value={formData.stage1.gender}
                  onChange={(e) => handleInputChange(e, "stage1")}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
                </select>
                <br></br>
              </div>
            )}

            {stage === 2 && (
              <div>
                <h2>Stage 2</h2>
                <label>job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  placeholder="Field 4 (Alphabet)"
                  value={formData.stage2.jobTitle}
                  onChange={(e) => handleInputChange(e, "stage2")}
                />
                <br></br>
                <span className="error">
                  {validationErrors.stage2.jobTitle}
                </span>
                <label>job Details</label>
                <input
                  type="text"
                  name="jobDetails"
                  placeholder="Field 5 (Number)"
                  value={formData.stage2.jobDetails}
                  onChange={(e) => handleInputChange(e, "stage2")}
                />
                <br></br>
                <span className="error">
                  {validationErrors.stage2.jobDetails}
                </span>
                <label>job location</label>
                <input
                  type="text"
                  name="jobLocation"
                  placeholder="Field 6 (Alphabet)"
                  value={formData.stage2.jobLocation}
                  onChange={(e) => handleInputChange(e, "stage2")}
                />
                <br></br>
                <span className="error">
                  {validationErrors.stage2.jobLocation}
                </span>
              </div>
            )}

            {stage === 3 && (
              <div>
                <h2>Stage 3</h2>
                {/* <select
                name="interviewMode"
                value={formData.stage2.interviewMode}
                onChange={(e) => handleInputChange(e, "stage2")}
              >
                <option value="online">Online</option>
                <option value="offline">Offline</option>
              </select> */}
                  <label>Interview Mode</label>
                  <select
                    name="InterviewMode"
                    value={formData.stage3.InterviewMode}
                    onChange={(e) => handleInputChange(e, "stage3")}
                  >
                    <option value="">Select Interview Mode</option>
                    <option value="online">Online</option>
                    <option value="offline">Offline</option>
                  </select>
                <br></br>
                <span className="error">
                  {validationErrors.stage3.InterviewMode}
                </span>
                <label>Interview duration</label>
                <select
                  name="InterviewDuration"
                  value={formData.stage3.InterviewDuration}
                  onChange={(e) => handleInputChange(e, "stage3")}
                >
                  <option value="short">Short</option>
                  <option value="medium">Medium</option>
                  <option value="long">Long</option>
                </select>
                <br></br>
                <label>interview Language</label>
                <select
                  name="interviewLanguage"
                  value={formData.stage3.interviewLanguage}
                  onChange={(e) => handleInputChange(e, "stage3")}
                >
                  <option value="english">English</option>
                  <option value="hindi">Hindi</option>
                </select>
                <br></br>
              </div>
            )}
            <div className="buttons">
              {stage > 1 && <button onClick={handlePrevious}>Previous</button>}
              {stage < 3 ? (
                <button onClick={handleNext}>Next</button>
              ) : (
                <button
                  className="submit-button"
                  onClick={() => alert("Form submitted!")}
                >
                  Submit
                </button>
              )}
            </div>
          </div>
          <div className="values">
            <h2>Input Values</h2>
            <div>
              {Object.keys(formData).map((stageName) =>
                Object.keys(formData[stageName]).map((fieldName) => (
                  <p key={fieldName}>
                    {fieldName}: {formData[stageName][fieldName]}
                    <br></br>
                  </p>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
