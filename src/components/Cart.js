import React, { useState } from "react";
import Modal from "./Modal";
import { useSelector, useDispatch } from "react-redux";
import { AvailableMeals } from "../Data/data";
import { removeItem } from "../features/cartSlice";
import Total from "../utils/Total";
import { useNavigate } from "react-router-dom";
import useFetch from "../util/useFetch";

const Cart = (props) => {
  //const [data] = useFetch('https://thucannhanh-production.up.railway.app/food')
  const navigate = useNavigate();
    const handleSubmit = (event) => {
        console.log(event.value)
        event.preventDefault();
        navigate("/payment");
      };
  const toggleModal = useSelector((state) => state.modal.IsOpen);
  const cartItems = useSelector((state) => state.cart.cart);
  console.log('cart: ',cartItems)
  //   const getcartItems = AvailableMeals.filter((meal) => meal.id === cartItems.id);
  const getcartItems = cartItems.map((item) =>
    AvailableMeals.find((meal) => meal.id === item.id)
  );
  const dispatch = useDispatch();

  return (
    <>
      {toggleModal && (
        <Modal>
          {cartItems.length === 0 ? (
            <p className="empty__cart">Your cart is empty</p>
          ) : (
            <div className="cart__container">
              <table className="table" cellPadding="100">
                <thead>
                  <tr>
                    <th>Item</th>
                    <th>Qty</th>
                    <th>Unit Price</th>
                    <th>Sub-total</th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems.map(
                    ({ id, MealPrice, MealImage, MealName }) => (
                      <tr key={id}>
                        <td className="removeItem__container">
                          <img
                            className="cartItem__image"
                            alt={
                              cartItems.find((meal) => meal.id === id)
                                .name
                            }
                            src={
                              cartItems.find((meal) => meal.id === id)
                                .img
                            }
                          />
                          <div>
                            <p className="cartItem__name">{
                              cartItems.find((meal) => meal.id === id)
                                .name
                            }</p>
                            <p
                              className="remove__item"
                              onClick={() => dispatch(removeItem(id))}
                            >
                              Remove
                            </p>
                          </div>
                        </td>
                        <td>
                          <p>
                            {
                              cartItems.find((meal) => meal.id === id)
                                .orderAmount
                            }
                          </p>
                        </td>
                        <td>
                          <p> {
                              cartItems.find((meal) => meal.id === id)
                                .price
                            } </p>
                        </td>
                        <td>
                          <p>       
                          {
                              cartItems.find((meal) => meal.id === id)
                                .orderAmount
                            }                     
                            {/* {Number(
                              MealPrice *
                                cartItems.find((meal) => meal.id === id)
                                  .orderAmount
                            )} */}
                          </p>
                        </td>
                      </tr>
                    )
                  )}
                  <tr></tr>
                </tbody>
              </table>
              <div className="total__container">
                <span>Total:</span>
                <Total />
              </div>

              <div className="checkout__btn__container">
                <button className="checkout__btn" onClick={handleSubmit}>checkout</button>
              </div>
            </div>
          )}
        </Modal>
      )}
    </>
  );
};

export default Cart;
