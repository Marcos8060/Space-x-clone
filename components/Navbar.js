import React,{useState} from "react";
import { menu } from "./data";
import { BiMenu } from 'react-icons/bi'
import Drawer from "./drawer";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <section className="absolute -top-16">
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
          <div className="w-2/12 flex items-center gap-4 mx-auto">
            <p className="uppercase text-center text-sm font-semibold">Shop</p>
            <BiMenu
            className="cursor-pointer text-2xl"
            onClick={() => setIsOpen(true)}
            />
            <Drawer isOpen={isOpen} setIsOpen={setIsOpen} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Navbar;
