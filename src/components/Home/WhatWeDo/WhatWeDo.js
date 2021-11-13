// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper";
import { Col, Container, Row } from "react-bootstrap";
import "./WhatWeDo.css";
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel, Keyboard]);

const data = [
  {
    title: "What we do",
    header: "Protective car headlight and taillight",
    desc: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. SHOP NOW",
  },
  {
    title: "What we do",
    header: "Tires and velgs 5 years guarantee",
    desc: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. SHOP NOW",
  },
  {
    title: "What we do",
    header: "Best leather fot your cozy interior",
    desc: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. SHOP NOW",
  },
];

const services = [
  {
    title: "Trade-In Value",
    icon: <i className="fas fa-sync-alt fs-1"></i>,
    desc: "Get the latest information on your vehicle’s trade-in value today.",
  },
  {
    title: "Your Credit Score",
    icon: <i className="fas fa-tachometer-alt fs-1"></i>,
    desc: "See where you stand on your journey to owning a new car.",
  },
  {
    title: "Apply for Financing",
    icon: <i className="fas fa-dollar-sign fs-1"></i>,
    desc: "Own a new car of your dreams with Sorum Financial Services.",
  },
  {
    title: "24 Hours Service",
    icon: <i className="fas fa-history fs-1"></i>,
    desc: "Receive the latest offers, releases, and news from Sorum.",
  },
];

export default function WhatWeDo() {
  return (
    <>
      <div
        style={{
          backgroundColor: "#000",
        }}
      >
        <Container className="py-5 text-white">
          <Row className="mb-4">
            {services.map((item, ind) => {
              const { title, icon, desc } = item;
              return (
                <Col
                  className="service_header"
                  lg="3"
                  md="6"
                  sm="12"
                  key={ind + "osndf"}
                >
                  <div className="d-flex align-items-center my-2">
                    {icon}
                    <h5 className="m-0 ms-3 fw-bold">{title}</h5>
                  </div>
                  <p>{desc}</p>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
      <div className="what_we_do">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          className="mySwiper"
        >
          {data.map((item, ind) => {
            const { title, header, desc } = item;
            return (
              <SwiperSlide key={ind + "osdnf"}>
                <Container className="text-white">
                  <Row>
                    <Col lg="5">
                      <h6>{title}</h6>
                      <h2
                        style={{
                          fontWeight: 700,
                        }}
                      >
                        {header}
                      </h2>
                      <p>{desc}</p>
                      <button className="btn_round fs-6">SHOP NOW</button>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}
