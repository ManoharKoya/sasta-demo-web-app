import ContactDeatils from "../components/ContactDetails";
import Contribute from "../components/Contribute";

const ContactUs = () => {

  return (
    <div id="contact-us-page" className="page">
      <div className="contribute-details">
        <Contribute />
      </div>
      <div className="contact-details">
        <ContactDeatils
          name="Manohar Koya"
          designation="Engineering"
          emailId="manohar@stem.com"
          phoneNo="+91-8498866263"
        />
        <ContactDeatils
          name="Vinay Thimmineni"
          designation="Product"
          emailId="vinay@stem.com"
          phoneNo="---"
        />
      </div>
    </div>
  );
};

export default ContactUs;
