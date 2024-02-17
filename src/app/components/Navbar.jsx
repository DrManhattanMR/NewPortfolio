"use client"; // for NextJS 13.4>
import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsThreeDotsVertical } from "react-icons/bs";

export function Navbar() {
  const [isMenuHidden, setIsMenuHidden] = useState(true);
  const menuRef = useRef(null);

  const navigationItems = [
    {
      text: "Home",
      className: "text-lg text-blue-600 font-bold hover:text-blue-500",
      href: "/",
    },
    {
      text: "About Me",
      className: "text-lg text-blue-600 font-bold hover:text-blue-500",
      href: "/about",
    },
    {
      text: "Resume",
      className: "text-lg text-blue-600 font-bold hover:text-blue-500",
      href: "/resume",
    },
    {
      text: "Contact",
      className: "text-lg text-blue-600 font-bold hover:text-blue-500",
      href: "/contact",
    },
  ];

  const handleMenuToggle = () => {
    setIsMenuHidden((prev) => !prev);
  };
  const handleMenuLinkClick = () => {
    setIsMenuHidden(true);
  };

  useEffect(() => {
    // Add event listeners
    const backdrop = document.querySelectorAll(".navbar-backdrop");

    backdrop.forEach((item) =>
      item.addEventListener("click", handleMenuToggle)
    );

    // Clean up event listeners on component unmount
    return () => {
      backdrop.forEach((item) =>
        item.removeEventListener("click", handleMenuToggle)
      );
    };
  }, []);

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-slate-300">
        <Link
          className="text-2xl text-teal-800 font-bold leading-none"
          href="/"
        >
          Manfred Solutions
        </Link>
        <div className="lg:hidden">
          <button
            className="flex items-center text-blue-600 p-3"
            onClick={handleMenuToggle}
          >
            <AiOutlineMenu />
          </button>
        </div>
        <ul
          className={`hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6`}
        >
          {navigationItems.map((item, index) => (
            <React.Fragment key={index}>
              <li>
                <Link className={item.className} href={item.href}>
                  {item.text}
                </Link>
              </li>
              {index < navigationItems.length - 1 && (
                <li className="text-gray-300">
                  <BsThreeDotsVertical />
                </li>
              )}
            </React.Fragment>
          ))}
        </ul>
        {/* <a
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign In
        </a>
        <a
          className="hidden lg:inline-block py-2 px-6 bg-purple-500 hover:bg-purple-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="#"
        >
          Sign up
        </a> */}
      </nav>
      <div
        className={`navbar-menu relative z-50 ${
          isMenuHidden
            ? "opacity-0 pointer-events-none"
            : "opacity-100 pointer-events-auto"
        } transition-opacity duration-300 ease-in-out`}
      >
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-slate-300 border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a
              className="mr-auto text-xl text-teal-800 font-bold leading-none"
              href="#"
            >
              Manfred Solutions
            </a>
            <button className="navbar-close" onClick={handleMenuToggle}>
              <AiOutlineClose />
            </button>
          </div>
          <div>
            <ul>
              {navigationItems.map((item, index) => (
                <React.Fragment key={index}>
                  <li className="mb-1">
                    <Link
                      className="block p-4 text-base font-semibold text-blue-600 hover:bg-blue-50 hover:text-blue-600 rounded"
                      href={item.href}
                      onClick={handleMenuLinkClick}
                    >
                      {item.text}
                    </Link>
                  </li>
                </React.Fragment>
              ))}
            </ul>
          </div>
          {/* <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold  bg-gray-50 hover:bg-gray-100 rounded-xl"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-purple-600 hover:bg-purple-700  rounded-xl"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div> */}
        </nav>
      </div>
    </>
  );
}
