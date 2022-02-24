import React from "react";
import { NavLink } from "react-router-dom";

function Content2() {
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-stretch content-end">
        <div className="justify-self-end place-self-center">
          <div className="text-[#3560B2] font-bold bg-[#D3DEF2] text-xl">
            <p className="text-center">OUR PRODUCTS</p>
            <p className="text-center">FROM AUSTRALIA</p>
          </div>
          <div className="flex flex-row bg-[#D3DEF2]">
            <div class="basis-1/2">
              <NavLink to="/">
                <img
                  src="mockup.png"
                  alt=""
                  className="hover:bg-blue-300/50 rounded-full"
                />
              </NavLink>
              <p className="absolute bottom-16 ml-20 text-center text-[#3560B2] ">
                Trojan Salmon{" "}
              </p>
            </div>
            <div class="basis-1/2">
              <NavLink to="/">
                <img
                  src="fresh.png"
                  alt=""
                  className="hover:bg-blue-300/50 rounded-full"
                />
              </NavLink>
              <p className="absolute bottom-16 ml-24 text-center text-[#3560B2]">
                Fatty Salmon{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <img
            src="vector.svg"
            alt=""
            className="bottom-24 ml-16 w-40 absolute"
          />
          <NavLink to="/3">
            <img
              src="australia.svg"
              className="hover:bg-gray-100 rounded-full"
              alt="..."
              width="1251"
              height="1476"
            />
          </NavLink>
        </div>
      </div>
      {/* <div className="flex flex-row items-stretch">
        <div className="basis-1/2 self-end">
          <img src="mockup.png" alt="" className="" />
        </div>
        <div className="basis-1/2">
          <img
            src="australia.svg"
            class=""
            alt="..."
            width="1251"
            height="1476"
          />
        </div>
      </div> */}
    </div>
  );
}

export default Content2;
