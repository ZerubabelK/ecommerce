import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FcLikePlaceholder } from "react-icons/fc";
import Link from "next/link";
import StarRating from "../common/StarRating";
import { addToCart } from "@/store/slices/product";
function Products() {
  const { products } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const handleAddCart = (product) => {
    dispatch(addToCart(product));
  };
  return (
    <div className="w-screen lg:grid lg:grid-cols-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="col-span-1 mx-4 shadow-md my-5 ease-in-out transition rounded-xl px-4 py-3 hover:scale-105"
        >
          <div className="relative">
            <img
              className="object-contain h-56 w-full z-0"
              src={product.image}
              alt=""
            />
            <FcLikePlaceholder className="absolute top-0 right-0 text-xl" />
          </div>
          <div className="flex flex-col mx-auto">
            <h3 className="text-xl">{product.title}</h3>
            <div className="self-start">
              <p className="text-xl font-bold">{product.price}$</p>
            </div>
            <StarRating rating={product.rating} />
            <p>({product.rating.count} reviews)</p>
            <button className="w-36 my-2 rounded-lg px-3 py-1 bg-green-500 text-white self-center">
              <Link href={`/products/${product.id}`}>DETAILS</Link>
            </button>
            <button
              className="border w-36 rounded-lg px-3 py-1 border-green-500 text-green-500 self-center hover:bg-green-500 hover:text-white"
              onClick={(_) => handleAddCart(product)}
            >
              ADD TO CART
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Products;
