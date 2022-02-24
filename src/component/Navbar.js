import React from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="text-center bg-[#FB6060] text-white p-1">
        Gratis pengirima untuk pembelanjaan diatas Rp.750.00 atau lebih
      </div>

      <nav className="bg-white px-2 py-2 rounded shadow-sm">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <NavLink to="/" className="">
            <img
              src="logo.svg"
              alt="logo"
              className="absolute w-40 top-3 left-10"
            />
          </NavLink>
          <div className="flex order-2 space-x-4">
            <svg
              width="25"
              height="25"
              viewBox="0 0 30 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_293)">
                <path
                  d="M29.6344 27.8672L22.1719 20.4047C24.2044 17.9188 25.2037 14.7468 24.9631 11.5447C24.7225 8.34272 23.2603 5.35568 20.8791 3.20145C18.4979 1.04723 15.3798 -0.109364 12.1698 -0.029089C8.95974 0.0511861 5.90334 1.36219 3.63279 3.63274C1.36223 5.9033 0.0512319 8.95969 -0.0290433 12.1697C-0.109318 15.3798 1.04727 18.4979 3.2015 20.8791C5.35572 23.2603 8.34277 24.7224 11.5448 24.9631C14.7468 25.2037 17.9188 24.2044 20.4047 22.1719L27.8672 29.6344C28.1057 29.8474 28.4166 29.9612 28.7363 29.9522C29.0559 29.9432 29.36 29.8122 29.5862 29.5861C29.8123 29.36 29.9433 29.0559 29.9522 28.7363C29.9612 28.4166 29.8475 28.1056 29.6344 27.8672ZM12.5016 22.5C10.5228 22.5009 8.58813 21.9149 6.94241 20.8161C5.29669 19.7173 4.01384 18.1551 3.25614 16.3271C2.49845 14.4991 2.29996 12.4874 2.68578 10.5465C3.0716 8.60566 4.02441 6.82285 5.42365 5.4236C6.82289 4.02436 8.60571 3.07156 10.5466 2.68574C12.4874 2.29991 14.4991 2.4984 16.3271 3.2561C18.1551 4.01379 19.7174 5.29664 20.8162 6.94237C21.915 8.58809 22.501 10.5227 22.5 12.5016C22.4963 15.1522 21.4417 17.6932 19.5675 19.5674C17.6932 21.4417 15.1522 22.4963 12.5016 22.5Z"
                  fill="#3560B3"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_293">
                  <rect width="30" height="30" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19 3H3V19H19V3Z"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M13 22V29H29V13H20"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M11 5V8"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M6 9H16"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M13 9C13 12.3 10.3 15 7 15H6"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M9 9C9 12.3 11.7 15 15 15H16"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M17 26L21 17L25 26"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M18 23H24"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 19L6.4 4.5C6.2 3.6 5.3 3 4.4 3H2"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M26 23H8.40002C7.30002 23 6.40002 22.1 6.40002 21C6.40002 19.9 7.30002 19.2 8.40002 19L29 16V6H11"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M11 29C11.5523 29 12 28.5523 12 28C12 27.4477 11.5523 27 11 27C10.4477 27 10 27.4477 10 28C10 28.5523 10.4477 29 11 29Z"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
              <path
                d="M24 29C24.5523 29 25 28.5523 25 28C25 27.4477 24.5523 27 24 27C23.4477 27 23 27.4477 23 28C23 28.5523 23.4477 29 24 29Z"
                stroke="#3560B3"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linejoin="round"
              />
            </svg>
            <svg
              width="25"
              height="25"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.1313 20.7331C15.0508 20.5784 16.9792 20.5784 18.8988 20.7331C19.9441 20.794 20.9844 20.9248 22.0132 21.1246C24.2395 21.5753 25.6929 22.3108 26.3158 23.497C26.7836 24.4228 26.7836 25.525 26.3158 26.4508C25.6929 27.637 24.2972 28.4199 21.9902 28.8233C20.9622 29.0306 19.9216 29.1653 18.8757 29.2266C17.9068 29.3333 16.9378 29.3333 15.9573 29.3333H14.1925C13.8234 29.2859 13.4658 29.2622 13.1197 29.2622C12.0738 29.2084 11.033 29.0775 10.0053 28.8707C7.77902 28.4437 6.32561 27.6845 5.70272 26.4982C5.46226 26.0387 5.33549 25.5254 5.33345 25.0036C5.32859 24.4786 5.45152 23.9606 5.69118 23.497C6.30254 22.3108 7.75595 21.5397 10.0053 21.1246C11.0375 20.9219 12.0819 20.7912 13.1313 20.7331ZM16.0035 2.66667C19.8704 2.66667 23.0052 5.89043 23.0052 9.86715C23.0052 13.8439 19.8704 17.0676 16.0035 17.0676C12.1365 17.0676 9.00173 13.8439 9.00173 9.86715C9.00173 5.89043 12.1365 2.66667 16.0035 2.66667Z"
                fill="#3560B3"
              />
            </svg>
          </div>
          <div className="space-x-3 justify-between items-center flex w-auto md:order-1">
            <ul className="flex flex-row space-x-1 mt-0 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="block py-1 pr-4 pl-3 text-[#3560B2] text-xl hover:bg-[#ED9D9D] rounded-full"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 mb-2 pr-2 pl-2 text-[#3560B2] text-xl bg-[#ED9D9D] rounded-full place-content-center"
                >
                  Products{" "}
                  <svg
                    className="inline"
                    width="20"
                    height="8"
                    viewBox="0 0 24 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.16999 0.28442C0.590899 0.651178 0.590899 1.24248 1.16999 1.60924L10.9909 7.82915C11.4518 8.12106 12.1964 8.12106 12.6573 7.82915L22.4782 1.60924C23.0573 1.24248 23.0573 0.651178 22.4782 0.28442C21.8991 -0.0823369 20.9654 -0.0823369 20.3864 0.28442L11.8182 5.70345L3.24999 0.276937C2.68272 -0.0823359 1.73726 -0.0823369 1.16999 0.28442Z"
                      fill="#3560B3"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 pr-4 pl-3 text-[#3560B2] text-xl hover:bg-[#ED9D9D] rounded-full"
                >
                  Journal{" "}
                  <svg
                    className="inline"
                    width="20"
                    height="8"
                    viewBox="0 0 24 9"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M1.16999 0.28442C0.590899 0.651178 0.590899 1.24248 1.16999 1.60924L10.9909 7.82915C11.4518 8.12106 12.1964 8.12106 12.6573 7.82915L22.4782 1.60924C23.0573 1.24248 23.0573 0.651178 22.4782 0.28442C21.8991 -0.0823369 20.9654 -0.0823369 20.3864 0.28442L11.8182 5.70345L3.24999 0.276937C2.68272 -0.0823359 1.73726 -0.0823369 1.16999 0.28442Z"
                      fill="#3560B3"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 pr-4 pl-3 text-[#3560B2] text-xl hover:bg-[#ED9D9D] rounded-full "
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 pr-4 pl-3 text-[#3560B2] text-xl hover:bg-[#ED9D9D] rounded-full "
                >
                  Fishop-Go
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-1 pr-4 pl-3 text-[#3560B2] text-xl hover:bg-[#ED9D9D] rounded-full"
                >
                  Customer Care
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
