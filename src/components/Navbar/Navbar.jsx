import React from "react";
import logo from "../../img/navbar-logo.e4dac051.jpg";
import { CiLogin } from "react-icons/ci";

function Navbar() {
  return (
    <div className="container mx-auto flex justify-between items-center">
      <div>
        <button className="bg-blue-600 text-white py-1 px-4 rounded-md flex items-center justify-center gap-1">
          ورود | ثبت نام
          <CiLogin size={30} />
        </button>
      </div>
      <div className="flex flex-row-reverse gap-x-20">
        <a href="#" className="text-[18px]">
          {" "}
          صفحه ‌اصلی
        </a>
        <a href="#" className="text-[18px] relative before:w-full before:h-[2px] before:bg-[#9292EF] before:absolute before:bottom-[-5px]">
          سفارشات کار
        </a>
        <a href="#" className="text-[18px]">
          درباره ‌ما
        </a>
        <a href="#" className="text-[18px]">
          شرایط ‌و ‌قوانین
        </a>
        <a href="#" className="text-[18px]">
          مرکز پشتیبانی
        </a>
        <a href="#" className="text-[18px]">
          وبلاگ
        </a>
      </div>
      <img src={logo} width="280px" />
    </div>
  );
}

export default Navbar;
