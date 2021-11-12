import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams, useHistory } from "react-router";
import Card from "../../Home/Card/Card";
import carPhoto from "../../../assests/images/undraw_off_road_-9-oae.svg";

const DisplayProduct = () => {
  const [product, setProduct] = useState({});
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const url = `${process.env.REACT_APP_REST_API}cars/${id}`;
    axios.get(url).then((res) => {
      setProduct(res.data);
    });
  }, [id]);
  return (
    <Container>
      <Row>
        <Card data={{ ...product, btnHide: true }} />
        <Col lg="6">
          <img className="img-fluid p-2 p-lg-5" src={carPhoto} alt="" />
          <button
            onClick={() => history.goBack()}
            className="btn_round mx-auto fs-6"
          >
            Back to previous
          </button>
        </Col>
      </Row>
    </Container>
  );
};

export default DisplayProduct;
