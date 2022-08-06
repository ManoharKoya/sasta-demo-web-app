import { useState } from "react";
import axios from "axios";

const Contribute = () => {
  const [values, setValues] = useState({
    personName: "",
    personEmailId: "",
    personMobile: "",
    personResumeUrl: "",
  });

  const [submitted, setSubmission] = useState(false);

  const [requiredValues, setRequiredValues] = useState({
    requiredName: false,
    requiredEmail: false,
    requiredMobile: false,
    requiredResume: false,
  });

  const handleNameChange = (event) => {
    setValues({ ...values, personName: event.target.value });
    console.log(values);
  };

  const handleEmailChange = (event) => {
    setValues({ ...values, personEmailId: event.target.value });
    console.log(values);
  };

  const handleMobileChange = (event) => {
    setValues({ ...values, personMobile: event.target.value });
    console.log(values);
  };

  const handleResumeUrlChange = (event) => {
    setValues({ ...values, personResumeUrl: event.target.value });
    console.log(values);
  };
  const writeToSheet = () => {
    const postUrl =
      "https://sheet.best/api/sheets/1354792b-d830-451f-8fbd-94f477d4d7d5";
    const data = {
      Name: values.personName,
      EmailId: values.personEmailId,
      PhoneNumber: values.personMobile,
      ResumeUrl: values.personResumeUrl,
    };
    console.log(postUrl);
    console.log(data);
    axios.post(postUrl, data).then((response) => {
      console.log(response);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    console.log(requiredValues);
    requiredValues.requiredName = isNullOrEmptyUndefined(values.personName);
    requiredValues.requiredEmail = isNullOrEmptyUndefined(values.personEmailId);
    requiredValues.requiredMobile = isNullOrEmptyUndefined(values.personMobile);
    requiredValues.requiredResume = isNullOrEmptyUndefined(
      values.personResumeUrl
    );
    if (
      !requiredValues.requiredName &&
      !requiredValues.requiredEmail &&
      !requiredValues.requiredMobile &&
      !requiredValues.requiredResume
    ) {
      writeToSheet();
      setSubmission(true);
    } else {
      setSubmission(false);
    }
  };

  const isNullOrEmptyUndefined = (fieldValue) => {
    return fieldValue === null || fieldValue === undefined || fieldValue === "";
  };

  return (
    <div className="contribute">
      <div className="form-title">Want to Contribute?</div>
      <form className="contribute-form" onSubmit={handleSubmit}>
        <div className="name-field">
          <input
            onChange={handleNameChange}
            value={values.personName}
            className="form-field"
            type="text"
            placeholder="Name*"
            name="personName"
          />
          <span
            id="required-name"
            style={{
              visibility: requiredValues.requiredName ? "visible" : "hidden",
            }}
          >
            *
          </span>
        </div>
        <div className="email-id-field">
          <input
            onChange={handleEmailChange}
            value={values.personEmailId}
            className="form-field"
            type="text"
            placeholder="EmailId*"
            name="personEmailId"
          />
          <span
            id="required-email"
            style={{
              visibility: requiredValues.requiredEmail ? "visible" : "hidden",
            }}
          >
            *
          </span>
        </div>
        <div className="mobile-field">
          <input
            onChange={handleMobileChange}
            value={values.personMobile}
            className="form-field"
            type="text"
            placeholder="Mobile*"
            name="personMobile"
          />
          <span
            id="required-mobile"
            style={{
              visibility: requiredValues.requiredMobile ? "visible" : "hidden",
            }}
          >
            *
          </span>
        </div>
        <div className="resume-url-field">
          <input
            onChange={handleResumeUrlChange}
            value={values.personResumeUrl}
            className="form-field"
            type="text"
            placeholder="Resume URL* (should be accessible)"
            name="personResumeUrl"
          />
          <span
            id="resume-required"
            style={{
              visibility: requiredValues.requiredResume ? "visible" : "hidden",
            }}
          >
            *
          </span>
        </div>
        <input className="form-submit" type="submit" value="Submit" />
      </form>
      {submitted ? (
        <div className="success-message">Thanks for showing interest!</div>
      ) : null}
    </div>
  );
};

export default Contribute;
