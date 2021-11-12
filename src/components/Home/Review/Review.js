import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import { useEffect, useState } from "react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

import SwiperCore, { Pagination } from "swiper";
import Rating from "react-rating";
import "./Review.css";
import { Container } from "react-bootstrap";
import axios from "axios";

// install Swiper modules
SwiperCore.use([Pagination]);

const Review = () => {
  const [review, setReview] = useState(3);
  const [reviewData, setReviewData] = useState([]);

  useEffect(() => {
    const url = `${process.env.REACT_APP_REST_API}review`;
    axios.get(url).then((res) => setReviewData(res.data));
  }, [reviewData]);

  const handleReview = () => {
    const width = window.innerWidth;
    if (width <= 992) {
      setReview(1);
    } else {
      setReview(3);
    }
  };

  window.addEventListener("resize", handleReview);

  return (
    <Container className="pb-5 pt-3 review_container">
      <h1
        style={{
          color: "var(--main-color)",
        }}
        className="text-center mb-5"
      >
        Review And Rating
      </h1>
      <Swiper
        slidesPerView={review}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        style={{
          color: "#fff",
        }}
      >
        {reviewData.map((item) => (
          <SwiperSlide key={item._id}>
            <div className="review_card">
              <img src={item.user?.photoURL} alt="" />
              <Rating
                emptySymbol="fa fa-star-o fa-2x"
                fullSymbol="fa fa-star fa-2x"
                fractions={2}
                initialRating={item.rating}
                readonly
                className="rating"
              />
              <p className="text-center">{item.reviewMessage}</p>
              <h5>{item.user?.displayName}</h5>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </Container>
  );
};

export default Review;
