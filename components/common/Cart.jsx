import {
  changeCartItemQuantity,
  deleteItemFromCart,
} from "@/store/slices/product";
import Link from "next/link";
import React from "react";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

function Cart() {
  const { carts } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const getTotalPrice = () => {
    let total_price = 0;
    carts.forEach((cart) => {
      if (cart.quantity) total_price += +cart.quantity * cart.price;
      else total_price += cart.price;
    });
    return total_price.toFixed(2);
  };
  return (
    <div className="cart absolute right-0 bg-white top-12 min-w-max p-3 max-h-[80vh] box-content space-y-3 z-20 shadow-md overflow-y-scroll">
      {carts.map((cart) => {
        return (
          <div
            key={cart.id}
            className="flex border-t py-2 items-center space-x-3"
          >
            <div className="flex items-center">
              <img src={cart.image} className="w-16" alt="" />
            </div>
            <div className="">
              <div className="flex justify-between">
                <h3 className="text-sm w-[40ch] font-bold">{cart.title}</h3>
                <button onClick={(_) => dispatch(deleteItemFromCart(cart.id))}>
                  <FaTrash className="text-red-500 cursor-pointer hover:scale-110 transition ease-in-out" />
                </button>
              </div>
              <p className="text-xs w-[45ch] whitespace-pre-line">
                {cart.description}
              </p>
              <div>
                <label htmlFor="quantity">Quantity</label>
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  className="w-10 mx-4 border h-7 text-center"
                  defaultValue={1}
                  onChange={(ev) => {
                    const value = ev.target.value;
                    if (value > 0) {
                      dispatch(
                        changeCartItemQuantity({ id: cart.id, quantity: value })
                      );
                    } else {
                      ev.target.value = 1;
                    }
                  }}
                />
                <span>
                  Price:{" "}
                  {cart.quantity ? +cart.quantity * cart.price : cart.price}$
                </span>
              </div>
            </div>
          </div>
        );
      })}
      <Link href="/checkout">
        <button className="flex w-5/6 mx-auto rounded-lg justify-center space-x-3 py-3 border border-green-700 text-green-600 hover:bg-green-700 hover:text-white mt-3">
          <span className="font-semibold text-xl">Checkout: </span>
          <p className="font-semibold text-xl">{getTotalPrice()}$</p>
        </button>
      </Link>
    </div>
  );
}

export default Cart;
