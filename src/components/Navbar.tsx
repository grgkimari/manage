"use client"
import { useState } from "react";

export default function Navbar() {
  
  function toggleMenuOpen(){
    document.getElementById("menu-btn")?.classList.toggle("open")
    document.getElementById("menu")?.classList.toggle("hidden")
  }
  return (
    <nav className="relative container mx-auto p-6">
      <div className="flex items-center justify-between">
        <div className="pt-2">
          <img src="/logo.svg" alt="manage logo" />
        </div>
        <div className="hidden md:flex  space-x-6">
          <a href="#" className="hover:text-darkGrayishBlue">
            Pricing
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Product
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            About us
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Careers
          </a>
          <a href="#" className="hover:text-darkGrayishBlue">
            Community
          </a>
          <a
            href="#"
            className="hidden md:block p-3 px-6 pt-2 text-white bg-brightRed rounded-full items-baseline hover:bg-brightRedLight"
          >
            Get Started
          </a>
        </div>
        <button onClick={toggleMenuOpen} title="Menu" type="button" id="menu-btn" className="block hamburger md:hidden focus:outline-none">
                <span className="hamburger-top"></span>
                <span className="hamburger-middle"></span>
                <span className="hamburger-bottom"></span>
            </button>
      </div>
      
            <div className="md:hidden">
      <div
        id="menu"
        className="hidden absolute flex flex-col items-center self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md"
      >
        <a href="#" className="hover:text-darkGrayishBlue">
          Pricing
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Product
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          About us
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Careers
        </a>
        <a href="#" className="hover:text-darkGrayishBlue">
          Community
        </a>
      </div>
      </div>
    </nav>
  );
}
