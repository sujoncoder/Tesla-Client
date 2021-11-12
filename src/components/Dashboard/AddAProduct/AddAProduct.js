import axios from "axios";
import { useState } from "react";
import ProductForm from "../ProductForm/ProductForm";
import { toast } from "react-hot-toast";
import "./AddAProduct.css";

const AddAProduct = () => {
  const [carData, setCarData] = useState({
    title: "",
    fuel: "Petrol",
    driver: "Manual",
    date: "",
    price: "",
    image: "",
    desc: "",
  });

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

  const handleAddProduct = (e) => {
    const url = `${process.env.REACT_APP_REST_API}cars`;
    axios.post(url, carData).then((res) => {
      if (res.data.acknowledged) {
        toast.success("Successfully Car Added!");
        clearForm();
      } else {
        toast.error(res.data.message);
      }
    });
    e.preventDefault();
  };

  return (
    <ProductForm
      data={{ carData, handleInput, handleAddProduct, edit: false }}
    ></ProductForm>
  );
};

export default AddAProduct;
