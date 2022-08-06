const ContactDeatils = (props) => {
  return (
    <div className="contact-info">
      <div className="name-info">{props.name}</div>
      <div className="designation-info">{props.designation}</div>
      <p>
        Email-Id: {props.emailId}
        <br />
        Mobile: {props.phoneNo}
      </p>
    </div>
  );
};

export default ContactDeatils;