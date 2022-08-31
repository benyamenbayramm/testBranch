import React from "react";
import Navbar from "./../components/Navbar";
import CartContainer from "../components/CartContainer";
import { useDispatch, useSelector } from "react-redux";
import { calculateAmount } from "./reducers/cartSlice";
import { useEffect } from "react";
import Modal from "../components/Model";

export default function Cart() {
  const { cartItems } = useSelector((store) => store.cart);
  const { isOpen } = useSelector((store) => store.model);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateAmount());
  }, [cartItems]);
  return (
    <div>
      {isOpen && <Modal />}
      <Navbar />
      <CartContainer />
    </div>
  );
}
