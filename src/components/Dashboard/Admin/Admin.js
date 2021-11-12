import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import toast from "react-hot-toast";
import swal from "sweetalert";
// import dashboard from "../../../assests/images/undraw_data_trends_re_2cdy.svg";
import "./Admin.css";

const Admin = () => {
  const [adminUser, setAdminUser] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [message, setMessage] = useState({});

  useEffect(() => {
    const url = `${process.env.REACT_APP_REST_API}users`;
    axios.get(url, { email: userInput }).then((res) => {
      setAdminUser(res.data);
    });
  }, [userInput, message]);

  const handleAddAdmin = (email) => {
    const url = `${process.env.REACT_APP_REST_API}users/admin/${email}`;
    axios.put(url).then((res) => {
      setMessage(res.data);
      if (res.data.acknowledged) {
        if (res.data?.modifiedCount >= 1) {
          swal("Good job!", "Admin Added Succesfully!", "success");
        }
      } else {
        swal("Opps!", "User Not Found!", "error");
      }
      console.log(res.data);
    });
  };

  const handleAdminDelete = (email) => {
    const url = `${process.env.REACT_APP_REST_API}users/admin/${email}`;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios.delete(url).then((res) => {
          const data = res.data;
          if (data.acknowledged) {
            setMessage(data);
            setUserInput("");
            toast.success("Admin Remove Successfully!");
          } else {
            swal("Opps!", data.message, "error");
          }
        });
      } else {
        toast("Admin Delete Cancel!", {
          icon: <i class="fas fa-info-circle"></i>,
        });
      }
    });
  };

  return (
    <Container>
      <Row>
        <Col lg="5" md="12">
          <h2 className="text-center my-4">Make Admin</h2>
          <div className="input_item">
            <label htmlFor="make-admin">Email address</label>
            <input
              id="make-admin"
              type="text"
              name="email"
              placeholder="example@gmail.com"
              onChange={(e) => setUserInput(e.target.value)}
              value={userInput}
            />
            <button
              onClick={() => handleAddAdmin(userInput)}
              style={{ maxWidth: "150px", minHeight: "40px" }}
              className="btn_round"
            >
              Make Admin
            </button>
          </div>
          {/* <img src={dashboard} className="img-fluid p-3 p-md-4 p-lg-5" alt="" /> */}
        </Col>
        <Col lg="7" md="12" className="mb-4">
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
                {adminUser.map((user) => (
                  <tr key={user._id}>
                    <td style={{ fontSize: "14px" }}>{user.name}</td>
                    <td style={{ fontSize: "14px" }} className="amount">
                      {user.email}
                    </td>
                    <td>
                      <button
                        style={{ fontSize: "16px" }}
                        onClick={() => handleAdminDelete(user.email)}
                        className="delete_btn"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Admin;
