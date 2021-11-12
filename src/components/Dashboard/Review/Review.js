import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import Rating from "react-rating";
import useAuth from "../../../hook/useAuth";

const Review = () => {
  const [rating, setRating] = useState(0);
  const [reviewMessage, setReviewMessage] = useState("");
  const { firebaseContext } = useAuth();
  const { user } = firebaseContext;

  useEffect(() => {
    const url = `${process.env.REACT_APP_REST_API}review/${user.email}`;
    axios.get(url).then((res) => {
      const data = res.data;
      setRating(data?.rating);
      setReviewMessage(data?.reviewMessage);
    });
  }, [user.email]);

  const handleReview = (e) => {
    if (rating > 0) {
      if (reviewMessage.length >= 20) {
        const url = `${process.env.REACT_APP_REST_API}review`;
        axios
          .put(url, {
            rating,
            reviewMessage,
            user: {
              displayName: user.displayName,
              photoURL: user.photoURL,
              email: user.email,
            },
          })
          .then((res) => {
            const data = res.data;
            if (data.acknowledged) {
              toast.success("Review Post Successfully!");
            }
          });
      } else {
        toast.error("Review message write greater than 20 letter!");
      }
    } else {
      toast.error("Please Rating Something!");
    }

    e.preventDefault();
  };

  return (
    <Container>
      <div className="d-flex justify-content-center">
        <form className="mx-0 mx-lg-5 mx-md-4 add_product_form">
          <div className="my-4">
            <h3 className="text-center">Review And Rating</h3>
            <p className="text-center" style={{ fontSize: "14px" }}>
              Your review will be posted publicly on the website
            </p>
          </div>
          <Row>
            <Col lg="12" className="d-flex justify-content-center">
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                onChange={(rate) => setRating(rate)}
                initialRating={rating}
              />
            </Col>
            <Col lg="12">
              <div className="input_item">
                <label htmlFor="car-details">Review Message</label>
                <textarea
                  onChange={(e) => {
                    setReviewMessage(e.target.value);
                  }}
                  value={reviewMessage}
                  rows="4"
                  id="car-details"
                  type="date"
                  style={{ color: "#fff" }}
                  placeholder="Share details of you own expricence..."
                ></textarea>
              </div>
            </Col>
            <Col lg="12" className="my-4 d-flex justify-content-center ">
              <button onClick={handleReview} className="btn_round fs-6">
                Review Post
              </button>
            </Col>
          </Row>
        </form>
      </div>
    </Container>
  );
};

export default Review;
