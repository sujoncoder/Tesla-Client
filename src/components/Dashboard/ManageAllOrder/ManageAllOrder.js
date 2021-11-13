import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import "./ManageAllOrder.css";

const ManageAllOrder = () => {
  const [orders, setOrders] = useState(false);
  useEffect(() => {
    const url = `/orders`;
    axios.get(url).then((res) => {
      setOrders(res.data);
    });
  }, []);

  const handleStatus = (status, id) => {
    let modifiredOrders = [];
    orders.forEach((order) => {
      if (order._id === id) {
        order.status = status;
      }
      modifiredOrders.push(order);
    });
    setOrders(modifiredOrders);

    const modifiredStatus = { id, status };

    const url = `/updateOrderStatus`;
    axios.patch(url, modifiredStatus).then((res) => {
      const data = res.data;
      if (data.acknowledged) {
        toast.success("Status Update Successfully!");
      } else {
        toast.error("Something Went Wrong!");
      }
    });
  };

  const handleOrderDelete = (id) => {
    const url = `/orders/${id}`;
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete(url)
          .then((res) => {
            const filterOrder = orders.filter((order) => order._id !== id);
            setOrders(filterOrder);
            toast.success("Successfully Delete Order✅");
          })
          .catch((error) => {
            toast.error("Something went wrong!");
          });
      } else {
        toast("Order Delete Cancel!", {
          icon: <i className="fas fa-info-circle"></i>,
        });
      }
    });
  };

  return (
    <Container>
      <h2 className="text-center my-4">Manage All Orders</h2>
      {!orders ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="spinner_wrapper">
            <svg viewBox="0 0 100 100">
              <defs>
                <filter id="shadow">
                  <feDropShadow
                    dx="0"
                    dy="0"
                    stdDeviation="1.5"
                    floodColor="#fc6767"
                  />
                </filter>
              </defs>
              <circle
                id="spinner"
                style={{
                  fill: "transparent",
                  stroke: "var(--main-color)",
                  strokeWidth: "7px",
                  strokeLinecap: "round",
                  filter: "url(#shadow)",
                }}
                cx="50"
                cy="50"
                r="45"
              />
            </svg>
          </div>
        </div>
      ) : (
        <div className="table_wrapper my-4">
          {orders.length === 0 ? (
            <div
              style={{ height: "60vh" }}
              className="d-flex flex-column align-items-center justify-content-center"
            >
              <h4 style={{ color: "var(--main-color)" }}>Order Not found </h4>
              <Link to="/car-listing" className="btn_round my-3 fs-6">
                Go to Order
              </Link>
            </div>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Email</th>
                  <th>Car</th>
                  <th>Details</th>
                  <th>Status</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {orders &&
                  orders.map((order) => {
                    // setStatus(order.status);
                    return (
                      <tr
                        className="manage_all_order"
                        key={order._id + "sodsfs"}
                      >
                        <td style={{ fontSize: "14px" }}>{order.email}</td>
                        <td style={{ fontSize: "14px" }}>{order.title}</td>
                        <td>
                          <Link style={{ fontSize: "14px" }} to="/">
                            View
                          </Link>
                        </td>
                        <td>
                          <select
                            className={
                              order.status === "pending"
                                ? "btn_round pending"
                                : order.status === "done"
                                ? "btn_round done"
                                : "btn_round on-going"
                            }
                            style={{
                              minHeight: "28px",
                              width: "100px",
                              borderRadius: "5px",
                              padding: "0 5px",
                              outline: "none",
                            }}
                            name="cars"
                            id="cars"
                            onChange={(e) =>
                              handleStatus(e.target.value, order._id)
                            }
                            defaultValue={order.status}
                          >
                            <option value="pending">Pending</option>
                            <option value="on-going">On Going</option>
                            <option value="done">Done</option>
                          </select>
                        </td>
                        <td style={{ fontSize: "14px" }} className="amount">
                          <button
                            onClick={() => handleOrderDelete(order._id)}
                            className="delete_btn"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          )}
        </div>
      )}
    </Container>
  );
};

export default ManageAllOrder;
