import React from "react";

import img1 from "../../img/download.png";


import {CiLocationOn} from "react-icons/ci"

function BoxBodyMain() {
  return (
    <div className="w-[447px] h-[186px] border border-[#eee] rounded-md flex items-center justify-between px-4 gap-5">
      <div className="text-right">
        <h3 className="text-right font-bold">
          طراح و برنامه نویس اپلیکیشن فروشگاهی
        </h3>
        <p className="flex justify-end mt-4">غیرحضوری <CiLocationOn/></p>
        <p className="mt-1">دستمزد: توافقی</p>
        <p className="mt-1">1402/5/24 | 28 بازدید | 2 پیشنهاد</p>
      </div>
      <div className="w-[160px] h-[160px] border border-[#eee]">
        <img src={img1} alt="" />
      </div>
    </div>
  );
}

export default BoxBodyMain;
