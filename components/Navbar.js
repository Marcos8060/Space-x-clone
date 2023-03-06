import React from "react";
import { menu } from "./data";

const Navbar = () => {
  return (
    <>
      <section className="absolute -top-12">
        <div className="flex items-center justify-between gap-4">
          <div className="w-2/12">
            <img className="" src="/images/logo.png" alt="" />
          </div>
          <div className="w-8/12 mx-auto">
            <ul className="flex items-center gap-4 mx-auto">
              {menu.map((menu, index) => (
                <li key={index} className="text-white text-center text-sm font-semibold uppercase">
                  {menu}
                </li>
              ))}
            </ul>
          </div>
          <div className="w-2/12 mx-auto">
            <p className="uppercase text-center">Shop</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
