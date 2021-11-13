import { Container, Row } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center text-white text-capitalize fw-bold my-5">
        contact Form
      </h1>
      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <Row>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-control"
                  required=""
                  data-error="Please enter your name"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-control"
                  required=""
                  data-error="Please enter your email"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="phone_number"
                  id="phone_number"
                  required=""
                  data-error="Please enter your number"
                  className="form-control"
                  placeholder="Phone"
                />
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="form-group">
                <input
                  type="text"
                  name="msg_subject"
                  id="msg_subject"
                  className="form-control"
                  required=""
                  data-error="Please enter your subject"
                  placeholder="Subject"
                />
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <div className="form-group">
                <textarea
                  name="message"
                  className="form-control"
                  id="message"
                  cols="30"
                  rows="5"
                  required=""
                  data-error="Write your message"
                  placeholder="Your Message"
                ></textarea>
                <div className="help-block with-errors"></div>
              </div>
            </div>
            <div className="col-lg-12 col-md-12">
              <button
                type="submit"
                className="btn_round fs-6"
                style={{
                  pointerEvents: "all",
                  cursor: "pointer",
                  margin: "0 auto",
                }}
              >
                Send Message
              </button>
            </div>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Contact;
