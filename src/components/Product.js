import React from "react";
import Modal from "./Modal";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import "../css/Modal.css";
import { addItem } from "../features/cartSlice";
import { useSelector } from "react-redux";

const Product = (props) => {
  const toggleModal = useSelector((state) => state.modal.IsOpen);
  const product = useSelector((state) => state.product.product);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const [orderAmount, setOrderAmount] = useState(1);

  function ChangeAmount(operation) {
    if (operation === "subtract" && orderAmount > 1) {
      setOrderAmount(orderAmount - 1);
    } else if (operation === "add") {
      setOrderAmount(orderAmount + 1);
    } else {
      setOrderAmount(1);
    }
  }

  function addToCart() {
    dispatch(addItem({ id, orderAmount,price:product.MealPrice, name:product.MealName, img:product.MealImage }));
    setOrderAmount(1);
    navigate("/");
  }
  return (
    toggleModal && (
      <Modal>
        <div className="modal__content">
          <img src={product.MealImage} alt="food" className="modal-img" />
          <h3 className="order-name">{product.MealName}</h3>
          <p className="order-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            malesuada convallis arcu vel eleifend. Vivamus est justo, aliquet
            non consectetur eget, eleifend vitae ipsum. Donec et dolor rutrum,
            pellentesque ligula at, porta leo. Phasellus at lacus eget ex
          </p>
          <div className="order-details-conatiner">
            <h4>{product.MealPrice}</h4>
            <h4>10-20 Mins</h4>
            <h4>10 Pcs Available</h4>
          </div>

          <div className="order-details-conatiner">
            <div className="order-controls">
              <button
                style={
                  orderAmount === 1
                    ? { backgroundColor: "lightgrey" }
                    : { backgroundColor: "rgb(243, 195, 149)" }
                }
                className="control-btn subtract"
                onClick={() => ChangeAmount("subtract")}
              >
                -
              </button>
              <p className="order-quantity">{orderAmount}</p>
              <button
                className="control-btn add"
                onClick={() => ChangeAmount("add")}
              >
                +
              </button>
            </div>

            <div>
              <button className="add-order-btn" onClick={() => addToCart()}>
                Add to cart
              </button>
            </div>
          </div>
        </div>
      </Modal>
    )
  );
};

export default Product;
