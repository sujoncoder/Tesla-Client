import { Col } from "react-bootstrap";
import calender from "../../../assests/images/appointment-p-500.png";
import oil from "../../../assests/images/oil.png";
import man from "../../../assests/images/manual-transmission.png";

const Card = ({ data, handleBookNow }) => {
  const { image, title, date, desc, price } = data;
  return (
    <Col lg="4" className="mb-4">
      <div className="card_wrapper m-3">
        <img className="img-fluid" src={image} alt="" />
        <div className="card_content my-4">
          <h5 className="text-white">{title}</h5>
          <div className="card_menu d-flex my-4">
            <div className="card_item">
              <img
                className="img-fluid mb-2 fw-light"
                style={{
                  height: "40px",
                }}
                src={calender}
                alt=""
              />
              <h5>{date}</h5>
            </div>
            <div className="card_item">
              <img
                className="img-fluid mb-2 fw-light"
                style={{
                  height: "40px",
                }}
                src={oil}
                alt=""
              />
              <h5>Petrol</h5>
            </div>
            <div className="card_item">
              <img
                className="img-fluid mb-2 fw-light"
                style={{
                  height: "40px",
                }}
                src={man}
                alt=""
              />
              <h5>Manual</h5>
            </div>
          </div>
          <p>{desc}</p>
          <div className="d-flex  align-items-center">
            <button
              onClick={() => handleBookNow(data)}
              className="btn_round"
              style={{
                minHeight: "40px",
                width: "140px",
              }}
            >
              Book Now
            </button>
            <h5 style={{ marginBottom: 0, marginLeft: "20px" }}>
              Price {"$" + price}
            </h5>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default Card;
