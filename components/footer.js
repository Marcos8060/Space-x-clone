import React from "react";
import { footer } from "./data";

const Footer = () => {
  return (
    <>
      <div className="bg-black py-12">
        <div className="flex items-center gap-4 justify-center">
          <span className="text-white text-xs font-thin">spacex @ 2023</span>
          {footer.map((foot, index) => (
            <>
              <p
                key={index}
                className="text-white text-xs uppercase font-semibold"
              >
                {foot}
              </p>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
