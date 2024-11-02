import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import "./footer.css";
function Footer() {
  return (
    <>
      <div className="footer_container">
        <div className="footer_address">
          <div className="footer_logo">
            <img src="./img_heder/logo.png" alt="" />
            <h2>KASUKA</h2>
          </div>
          <div className="footer_address_text">
            <ul>
              <li>تهران خیابان آزادی</li>
              <li>تلفن: 01234567895</li>
              <li>ایمیل: info@example.com</li>
            </ul>
          </div>
          <div className="footer_social">
            <a href="">
              <InstagramIcon />
            </a>
            <a href="">
              <FacebookIcon />
            </a>
            <a href="">
              <LinkedInIcon />
            </a>
          </div>
        </div>
        <div className="footer_link">
          <h4>لینک های مفید</h4>
          <ul>
            <li>
              <ArrowLeftIcon sx={{ fontSize: 16 }} />
              <a href="#">خانه</a>
            </li>
            <li>
              <ArrowLeftIcon sx={{ fontSize: 16 }} />
              <a href="#">درباره ما</a>
            </li>
            <li>
              <ArrowLeftIcon sx={{ fontSize: 16 }} />
              <a href="#">خدمات</a>
            </li>
            <li>
              <ArrowLeftIcon sx={{ fontSize: 16 }} />
              <a href="#">شرایط حقوقی</a>
            </li>
            <li>
              <ArrowLeftIcon sx={{ fontSize: 16 }} />
              <a href="#">سیاست ها</a>
            </li>
          </ul>
        </div>
        <div className="footer_serves">
  <h2>خدمات ما</h2>
  <ul>
    <li>
      <ArrowLeftIcon sx={{ fontSize: 16 }} />
      <a href="#">طراحی سایت فروشگاهی</a>
    </li>
    <li>
      <ArrowLeftIcon sx={{ fontSize: 16 }} />
      <a href="#">طراحی اپلیکیشن موبایل</a>
    </li>
    <li>
      <ArrowLeftIcon sx={{ fontSize: 16 }} />
      <a href="#">سئو و بهینه سازی</a>
    </li>
    <li>
      <ArrowLeftIcon sx={{ fontSize: 16 }} />
      <a href="#">دیجیتال مارکتینگ</a>
    </li>
    <li>
      <ArrowLeftIcon sx={{ fontSize: 16 }} />
      <a href="#">پشتیبانی فنی</a>
    </li>
  </ul>
</div>

        <div className="footer_nws">
          <h4> خبر نامه</h4>
          <p>
            با این حال ، هیچ یک از چیزهایی که من می خوانم تقصیر بزرگ ما نخواهد
            بود
          </p>
          <div className="input_nws">
            <input type="email" placeholder="Email" />
            <button>دنبال کردن</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
