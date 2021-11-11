import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
// import dashboard from "../../../assests/images/undraw_data_trends_re_2cdy.svg";
import "./Admin.css";

const Admin = () => {
  return (
    <Container>
      <Row>
        <Col lg="5">
          <h2 className="text-center my-4">Make Admin</h2>
          <div className="input_item">
            <label htmlFor="make-admin">Email address</label>
            <input
              id="make-admin"
              type="text"
              name="email"
              placeholder="example@gmail.com"
            />
            <button
              style={{ maxWidth: "150px", minHeight: "40px" }}
              className="btn_round"
            >
              Make Admin
            </button>
          </div>
          {/* <img src={dashboard} className="img-fluid p-3 p-md-4 p-lg-5" alt="" /> */}
        </Col>
        <Col lg="7">
          <h2 className="text-center my-4">Admin List</h2>
          <div className="table_wrapper">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Sohel Rana</td>
                  <td className="amount">fsmdsohelrana@gmail.com</td>
                  <td>
                    <button className="delete_btn">Delete</button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
