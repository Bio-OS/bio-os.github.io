import { tosDomain } from "../const";
import { JoinButton } from "../home";
const feishu = require("../../images/qrcode/feishuGroup.png");
const weixin = `${tosDomain}bioos_weixinGroup.png`;
const zhushou = require("../../images/qrcode/zhushou.png");

import "./index.scss";

const comList = [
  {
    img: zhushou,
    title: "小助手二维码",
  },
  {
    img: weixin,
    title: "微信群二维码",
  },
  {
    img: feishu,
    title: "飞书群二维码",
  },
];

const ImgCard = ({ imgSrc, hasTitle = false, title = "" }) => {
  return (
    <div className="flex flex-col items-center">
      {hasTitle && (
        <div className="text-[20px] font-500 mb-[20px]">{title}</div>
      )}
      <div className="rounded-[12px] w-[324px] h-[280px] bg-[white] flex items-center justify-center overflow-hidden py-[12px]">
        <img src={imgSrc} className="h-full" />
      </div>
    </div>
  );
};
const Award = () => {
  return (
    <div className="flex flex-col items-center w-full">
      {/* <div className="award-wrapper mt-[80px] mb-[30px]">
        <div className="titlePart"></div>
        <div className="money">
          <img
            src={require("../../images/money.png")}
            style={{ height: "100%" }}
          />
        </div>
        <div className="titleText">此奖金为税前奖金</div>
      </div> */}
      <div className="w-full mb-[30px]">
        <img src={require('../../images/money.svg')}/>
      </div>
      <JoinButton textColor="white" />
    </div>
  );
};

export const Community = () => {
  return (
    <div className="flex justify-between items-center mb-[20px] w-full">
      {comList.map((ele) => (
        <ImgCard key={ele.title} imgSrc={ele.img} hasTitle title={ele.title} />
      ))}
    </div>
  );
};

export default Award;
