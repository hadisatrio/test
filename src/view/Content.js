import React from "react";
import { NavLink } from "react-router-dom";

function Content() {
  return (
    <div>
      <div className="grid grid-cols-2 justify-items-stretch mt-16 text-[#3560B2]">
        <div className="justify-self-center place-self-center">
          <img src="1.png" alt="" className="" width="701" height="440" />
        </div>
        <div className="">
          <div className="flex justify-start ">
            <div class="">
              <p className="">Rp. 83.000</p>
            </div>
            <div class="ml-16">
              <p className="">| Ready to cook</p>
            </div>
          </div>
          <div className="flex justify-start font-semibold ml-28 mt-3">
            <p className="text-lg border border-r-4 border-l-4 border-[#3560B2] rounded">
              Description
            </p>
            <p className="text-lg inline ml-1"> | Prep and Storage</p>
          </div>
          <div>
            <div className="flex justify-center w-3/4 mt-3">
              <p>
                Fishop menyediakan pilihan daging ikan Salmon yang segar dan
                sehat untuk menemani waktu bersantap anda dirumah bersama
                keluarga. Trojan adalah pilihan daging salmon dengan kandungan
                lemak yang lebih banyak. Membuat tektur daging lebih tebal serta
                rasa yang lebih enak dan juicy.
              </p>
            </div>
            <div>
              <p className="flex justify-start w-3/4 mt-3">
                Deskripsi Produk :
              </p>
            </div>
            <div className="mt-3">
              <p>Ready to Eat</p>
              <p>Origin Norwey, jenis Salmon budidaya</p>
              <p>Produk Fresh</p>
              <p>Skin On</p>
              <p>Without Belly</p>
              <p>Berat 200-210 gram/pack</p>
              <p>Dikemas Rapi secara Higienis (Skin Pack) </p>
            </div>
          </div>
        </div>
      </div>
      <div class="grid grid-cols-2">
        <div className="grid grid-rows-2 justify-items-center text-[#3560B2] font-bold mt-2 ">
          <div>
            <select
              name=""
              id=""
              className="font-bold p-1 border border-r-4 border-l-4 border-[#FB6060]"
            >
              <option className="font-bold" value="" selected>
                Variants
              </option>
            </select>
            <div className="p-1 px-2 inline ml-3 border border-r-4 border-l-4 border-[#FB6060]">
              - 2 +
            </div>
            {/* <div>
              <button
                type="button"
                class="text-white text-lg bg-[#FB6060] font-medium rounded-full px-5 py-2.5 text-center mr-2 mt-2 ml-7"
              >
                Add to cart
              </button>
            </div> */}
          </div>
          <div className="">
            <button
              type="button"
              class="text-white text-lg bg-[#FB6060] font-medium rounded-full  px-5 py-2.5 text-center mr-2"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div class="grid gap-x-2 gap-y-1 grid-cols-6 mb-6">
          <div>
            <img src="c.svg" alt="" className="w-20 h-20" />
          </div>
          <div>
            <NavLink to="/2">
              <img
                src="o.svg"
                alt=""
                className="w-20 h-20 hover:bg-gray-200 rounded-full"
              />
            </NavLink>
          </div>
          <div>
            <img src="f.svg" alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src="w.svg" alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src="a.svg" alt="" className="w-20 h-20" />
          </div>
          <div>
            <img src="b.svg" alt="" className="w-20 h-20" />
          </div>
          <div className="ml-2">
            <p>Cooking Tutorial</p>
          </div>
          <div className="ml-4">
            <p>Origin</p>
          </div>
          <div className="">
            <p>Fresh & Frozen</p>
          </div>
          <div className="ml-1">
            <p>Farm/ Wild</p>
          </div>
          <div className="ml-2">
            <p>Certificate</p>
          </div>
          <div className="ml-2">
            <p>Customer Favorite</p>
          </div>
        </div>
      </div>
      <div className="mt-10 text-center text-xl font-bold text-[#3560B2]">
        You May Also Like
      </div>
      <div className="flex space-x-5 justify-center mb-8 text-[#3560B2]">
        <div>
          <img src="i.svg" alt="" />
          <div className="block ml-8">
            <p className="font-bold">Saba Whole Twin Pack (600gr)</p>
            <p>Rp 285.000</p>
          </div>
        </div>
        <div>
          <img src="i.svg" alt="" />
          <div className="block ml-8">
            <p className="font-bold">Saba Whole Twin Pack (600gr)</p>
            <p>Rp 285.000</p>
          </div>
        </div>
        <div>
          <img src="i.svg" alt="" />
          <div className="block ml-8">
            <p className="font-bold">Saba Whole Twin Pack (600gr)</p>
            <p>Rp 285.000</p>
          </div>
        </div>
      </div>
      <div className="text-center mb-8 text-[#3560B2] underline">
        <a href=""> more like this</a>
      </div>
    </div>
  );
}

export default Content;
