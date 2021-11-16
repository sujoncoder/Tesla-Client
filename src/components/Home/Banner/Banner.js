import { useState } from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  const [video, setVideo] = useState(false);
  return (
    <div className="banner_container">
      <Container
        style={{
          height: "100%",
        }}
      >
        <div className="banner_header py-5">
          <div>
            <h1 className="my-5 my-md-4">
              Make your inner connection and never limit your way to journey
              with our best car
            </h1>
            <div className="d-flex justify-context-center my-5">
              <button
                onClick={() => setVideo(!video)}
                className="play_btn fs-5 m-3 mx-auto"
              >
                <i className="fas fa-play"></i>
              </button>
            </div>
            <div className="d-flex justify-content-center banner_btn_wrapper mt-5">
              <Link to="/car-listing" className="btn_round fs-5 m-3">
                Buy Now!
              </Link>
              <Link to="/" className="btn_round_outline fs-5 m-3">
                Learn More
              </Link>
            </div>
          </div>
        </div>
        <div
          className={video ? "video active" : "video"}
          onClick={() => setVideo(false)}
        >
          <iframe
            style={{
              width: "80%",
              height: "80vh",
            }}
            src="https://www.youtube.com/embed/SxmUcG2qcUo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
