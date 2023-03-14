import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { FaCartArrowDown } from "react-icons/fa";
import { useSelector } from "react-redux";
import Cart from "./Cart";
function NavigationBar() {
  const pathname = usePathname();
  const UnderLined = function ({ path }) {
    return pathname === path ? (
      <span className="ease-in-out transition-transform w-4/5 h-1 bg-sky-500 rounded-xl"></span>
    ) : (
      <></>
    );
  };
  const { isLogged } = useSelector((state) => state.user);
  const { carts } = useSelector((state) => state.product);
  const [isModalOpen, setIsModalOpen] = useState(false);
  useEffect(() => {
    if (isModalOpen && carts.length == 0) setIsModalOpen(false);
  }, [carts]);
  return (
    <nav className="fixed drop-shadow-md flex flex-row justify-evenly items-center w-screen bg-white z-10">
      <div className="z-10">
        <img className="w-28 h-28 z-10" src="/logo.jpg" alt="Zadicus logo" />
      </div>
      <ul className="flex flex-row space-x-7">
        <li className="flex flex-col items-center z-10">
          <Link href="/"> Home</Link>
          <UnderLined path={"/"} />
        </li>
        <li className="flex flex-col items-center z-10">
          <Link href="/products"> Products</Link>
          <UnderLined path={"/products"} />
        </li>
        <li className="flex flex-col items-center z-10">
          <Link href="/about"> About</Link>
          <UnderLined path={"/about"} />
        </li>
        <li className="flex flex-col items-center z-10">
          <Link href="/contact"> Contact</Link>
          <UnderLined path={"/contact"} />
        </li>
      </ul>
      <div className="flex space-x-3">
        <div className="relative h-max">
          {isModalOpen ? <Cart /> : <></>}
          <button
            className=" z-10"
            onClick={(_) => {
              if (carts.length > 0) setIsModalOpen(!isModalOpen);
            }}
          >
            <FaCartArrowDown className="text-xl z-10" />
            <span className="absolute z-10 -top-2 -right-2 bg-red-500 h-4 w-4 text-white font-semibold rounded-full text-xs flex justify-center items-center">
              {carts.length}
            </span>
          </button>
        </div>
        {isLogged ? (
          <div></div>
        ) : (
          <div className="space-x-4">
            <button className="z-10">
              <Link href="/auth/login">Login</Link>
            </button>
            <button className="z-10">
              <Link href="/auth/register">Register</Link>
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default NavigationBar;
