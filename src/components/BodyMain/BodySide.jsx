import React from "react";

function BodySide() {
  return (
    <div className="col-span-3 shadow text-right p-2">
      <form className="flex flex-col">
        <label className="mt-1 font-medium">دسته‌بندی اصلی</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md mt-2"
          style={{ direction: "rtl" }}
        >
          <option>خدمات ارایش</option>
          <option>خدمات مجالبش</option>
          <option> خدمات اموزشی</option>
        </select>
        <label className="mt-4 font-medium">دسته‌بندی فرعی</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md mt-2"
          style={{ direction: "rtl" }}
        >
          <option>خدمات ارایش</option>
          <option>خدمات مجالبش</option>
          <option> خدمات اموزشی</option>
        </select>
        <label className="mt-4 font-medium"> استان</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md"
          style={{ direction: "rtl" }}
        >
          <option> خوزستان</option>
          <option> تهران</option>
          <option> البرز</option>
        </select>
        <label className="mt-4 font-medium"> شهر</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md"
          style={{ direction: "rtl" }}
          disabled
        >
          <option> اهواز</option>
        </select>
        <label className="mt-4 font-medium"> حداقل دستمزد از</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md"
          style={{ direction: "rtl" }}
        >
          <option> مبلغ دلخواه</option>
        </select>
        <label className="mt-4 font-medium"> حداکثر دستمزد تا</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md"
          style={{ direction: "rtl" }}
        >
          <option> مبلغ دلخواه</option>
        </select>
        <label className="mt-4 font-medium">نوع کار</label>
        <div className="flex justify-center">
          <button className="bg-blue-300 text-white rounded-tl-md rounded-bl-md py-2 px-5 w-full">
            همه
          </button>
          <button className="bg-[#eeeeee] py-2 px-5 w-full">غیر حضوری</button>
          <button className="bg-[#eeeeee] py-2 px-5 rounded-tr-md rounded-br-md w-full">
            {" "}
            حضوری
          </button>
        </div>
        <label className="mt-4 font-medium">مهارت</label>
        <select
          className="text-right border border-[#eee] py-1 outline-blue-300 outline-1 rounded-md"
          style={{ direction: "rtl" }}
        >
          <option>جستجوی مهارت</option>
        </select>
        <label className="mt-4 font-medium"> نوع دستمزد</label>
        <div className="flex justify-center">
          <button className="bg-blue-300 text-white rounded-tl-md rounded-bl-md py-2 px-5 w-full">
            همه
          </button>
          <button className="bg-[#eeeeee] py-2 px-5 rounded-tr-md rounded-br-md w-full">
            {" "}
            دارای قیمت
          </button>
        </div>
        <div className="w-full h-[1px] bg-[#eee] block my-5"></div>
        <div className="flex justify-center gap-10">
            <button className="border border-red-600 text-red-600 w-full py-2 rounded-md hover:bg-red-100">حذف فیلتر</button>
            <button className="bg-blue-300 text-white w-full py-2 rounded-md">اعمال فیلتر</button>
        </div>
      </form>
    </div>
  );
}

export default BodySide;
