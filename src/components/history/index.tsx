import { useEffect } from "react";
import { Swiper } from "swiper";
import "swiper/swiper-bundle.css";
const zx = require("../../images/zhangxin.png");
const gift = require("../../images/feishuGroup.png");
import "./index.scss";

const History = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      autoplay: true,
      loop: true,
    });
    console.log('mySwiper', swiper);
  }, []);
  return (
    <div className="swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img src={zx} />
        </div>
        <div className="swiper-slide">
          <img src={gift} />
        </div>
      </div>
    </div>
  );
};

export default History;
