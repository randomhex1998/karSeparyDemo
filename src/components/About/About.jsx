import React from "react";
import video from "../../img/job-list-page.mp4";
import videoPoster from "../../img/poster.4c98e5ec.png";

function About() {
  return (
    <div className="bg-[#13A1CD] mx-[3rem] px-12 py-4 rounded-md">
      <div className="grid grid-cols-3">
        <video controls poster={videoPoster} className="rounded-md h-[200px]">
          <source src={video} type="video/webm" />
          <source src={video} type="video/mp4" />
        </video>

        <p
          className="text-justify text-[20px] col-span-2 flex items-center text-white"
          style={{ direction: "rtl" }}
        >
          در این صفحه کارگیران عزیز می‌توانند سفارشات کار و خدمات کارسپاران را
          که مستقیم از طریق صفحه آگهی خدمات به کارگیر سفارش داده نشده و در سایت
          منشتر شده است را مشاهده کنند. در ابتدای ورود کاربران محترم لیست کارها
          و خدمات غیرحضوری از کل کشور و هم‌چنین کار و خدمات حضوری از استان خود
          را در این صفحه مشاهده می‌کنند. برای دستیابی به نتایج بهتر می‌توانید از
          طریق منوی سمت راست نسبت به فیلتر کارها و خدمات اقدام کنید و مطابق با
          مهارت و نیاز خود کارها را جستجو و بررسی کنید. برای مشاهده جزئیات هر
          کار روی آن کلیک کنید.
        </p>
      </div>
    </div>
  );
}

export default About;
