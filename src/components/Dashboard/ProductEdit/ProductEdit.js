import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useHistory, useParams } from "react-router";
import ProductForm from "../ProductForm/ProductForm";

const ProductEdit = () => {
  const [carData, setCarData] = useState({
    title: "",
    fuel: "Petrol",
    driver: "Manual",
    date: "",
    price: "",
    image: "",
    desc: "",
  });

  const params = useParams();
  const history = useHistory();

  const clearForm = () => {
    setCarData({
      title: "",
      fuel: "Petrol",
      driver: "Manual",
      date: "",
      price: "",
      image: "",
      desc: "",
    });
  };

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setCarData({ ...carData, [name]: value });
  };

  useEffect(() => {
    const id = params.id;
    const url = `http://localhost:5000/cars/${id}`;
    axios.get(url).then((res) => {
      if (res.data._id) {
        setCarData(res.data);
      } else {
        toast.error(res.data.message);
      }
    });
  }, []);

  const handleAddProduct = (e) => {
    const id = params.id;
    const url = `http://localhost:5000/cars/${id}`;
    axios.put(url, carData).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Product Edit Successfully!");
        clearForm();
        history.push("/dashboard/manage-products");
      } else {
        toast.error(res.data.message);
      }
    });
    e.preventDefault();
  };

  return (
    <ProductForm
      data={{ carData, handleInput, handleAddProduct, edit: true }}
    ></ProductForm>
  );
};

export default ProductEdit;
