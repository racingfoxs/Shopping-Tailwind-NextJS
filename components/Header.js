import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsCart } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import Cart from "./Cart";

const Header = ({ cart, setCart }) => {
  const cartHandler = () => {
    setCart(true);
  };

  return (
    <>
      <header className="text-gray-600 body-font ">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center border-b-2">
          <Link
            href="/"
            className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
          >
            <Image
              priority={true}
              alt="Logo"
              src="/images/mainlogo.png"
              width={200}
              height={40}
              className="w-full h-auto"
            />
          </Link>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
            <Link href="/tshirt" className="mr-5 hover:text-gray-900">
              T-Shirt
            </Link>
            <Link href="/category" className="mr-5 hover:text-gray-900">
              Category
            </Link>
            <Link href="/about" className="mr-5 hover:text-gray-900">
              About
            </Link>
            <Link href="/contact" className="mr-5 hover:text-gray-900">
              Contact
            </Link>
          </nav>
          <div className="flex justify-center align-center">
            <div className="text-2xl px-2">
              <Link href="/login" className="mr-5 hover:text-gray-900">
                <FaUserCircle />
              </Link>
            </div>
            <div className="text-2xl px-2">
              <button onClick={cartHandler}>
                <BsCart />
              </button>
            </div>
          </div>
        </div>
      </header>
      {cart && <Cart setCart={setCart} title="raj here" />}
    </>
  );
};

export default Header;
