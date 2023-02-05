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
      <header className="p-4 bg-gray-100 text-gray-800  border-b-2 border-gray-200">
        <div className="container flex justify-between h-16 mx-auto">
          <div className="flex">
            <Link
              rel="noopener noreferrer"
              href="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
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
            <nav
              aria-label="Header Navigation"
              className="items-stretch hidden space-x-3 lg:flex"
            >
              <ul className="items-stretch hidden space-x-3 lg:flex">
                <li className="flex">
                  <Link
                    href="/tshirt"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                    T-Shirt
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/category"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                    Category
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/about"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                  >
                    About
                  </Link>
                </li>
                <li className="flex">
                  <Link
                    href="/contact"
                    className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-fuchsia-600 border-fuchsia-600"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="items-center flex-shrink-0 hidden lg:flex lg:items-center">
            <fieldset className="w-full space-y-1 text-gray-800 border-2 border-gray-200">
              <label for="Search" className="hidden">
                Search
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                  <button
                    type="button"
                    title="search"
                    className="p-1 focus:outline-none focus:ring"
                  >
                    <svg
                      fill="currentColor"
                      viewBox="0 0 512 512"
                      className="w-4 h-4 text-gray-800"
                    >
                      <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                    </svg>
                  </button>
                </span>
                <input
                  type="search"
                  name="Search"
                  placeholder="Search..."
                  className="w-32 py-2 pl-10 text-sm rounded-md sm:w-auto focus:outline-none bg-gray-100 text-gray-800 focus:bg-gray-50 focus:border-fuchsia-600"
                />
              </div>
            </fieldset>
            <div className="text-2xl px-2">
              <button onClick={cartHandler}>
                <BsCart />
              </button>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="flex space-x-5 w-8 h-8">
                <img
                  alt=""
                  className="w-12 rounded-full ring-2 ring-offset-2 bg-gray-500 ring-fuchsia-600 ring-offset-gray-100"
                  src="https://source.unsplash.com/40x40/?portrait?2"
                />
              </div>
            </div>
          </div>
          <button className="p-4 lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6 text-gray-800"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </header>
      {cart && <Cart setCart={setCart} title="raj here" />}
    </>
  );
};

export default Header;
