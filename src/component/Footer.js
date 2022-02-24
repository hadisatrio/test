import React from "react";

function Footer() {
  return (
    <div>
      <footer className="text-left bg-[#D4DEF3] text-[#3560B2] ">
        <div className="mx-6 py-5  text-left">
          <div className="grid grid-1 grid-cols-3 gap-8">
            <div className="ml-10">
              <p className="text-xl font-semibold mb-4 flex justify-start">
                Quick links
              </p>
              <p className="mb-4">
                <a href="#" className="hover:underline">
                  FAQ
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="hover:underline">
                  Business inquiries
                </a>
              </p>
              <p className="mb-4">
                <a href="#" className="hover:underline">
                  Terms of service
                </a>
              </p>
              <p>
                <a href="#" className="hover:underline">
                  Refund & Policy
                </a>
              </p>
            </div>
            <div className="">
              <p className="text-xl font-semibold mb-4 flex justify-start">
                Powered by
              </p>
              <p className="mb-4">
                <a href="#" className="hover:underline">
                  PT. Ruangan Pendingi Indonesia
                </a>
              </p>
              <p className="text-xl mb-4 font-semibold">Supplied by</p>
              <p className="mb-4">
                <a href="#" className="hover:underline">
                  PT. Ruangan Pendingi Indonesia
                </a>
              </p>
            </div>
            <div className="">
              <p className="ml-28 font-semibold mb-4 flex justify-start">
                Newsletter
              </p>
              <div className="text-gray-400 p-2 bg-gray-400 w-3/4 flex items-center justify-start mb-4">
                .
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mr-4 py-1 flex justify-end">
          <p className="" href="https://tailwind-elements.com/">
            Copyright Reserved © 2021. Fishop Indonesia
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
