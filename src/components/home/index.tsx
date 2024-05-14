import { Popover } from "@arco-design/web-react";
import { getDiffDay } from "../../util";
const timer = require("../../images/timer.png");
const timerDivider = require("../../images/timerDivider.png");
const timerCover = require("../../images/timerCover.png");
const openTitle = require("../../images/openTitle.svg");
const huoshanIntel = require("../../images/logo/huoshanIntel.png");
const introFinger = require("../../images/introFinger.png");

import "./index.scss";

const info = [
  {
    name: "立即报名",
    imgSrc: require("../../images/buttonBg/join.png"),
    iconSrc: require("../../images/icon/join.png"),
    jumpUrl: "https://www.bagevent.com/event/registerTicket/8826248",
  },
  {
    name: "赛事交流群",
    imgSrc: require("../../images/buttonBg/group.png"),
    iconSrc: require("../../images/icon/group.png"),
    jumpUrl: "",
    hoverUrl: require("../../images/qrcode/weixin.png"),
  },
  {
    name: "赛前辅导",
    imgSrc: require("../../images/buttonBg/help.png"),
    iconSrc: require("../../images/icon/help.png"),
    jumpUrl: "",
  },
];
const mainContent = `2023年火山引擎联合广州实验室举办第一届Bio-OS开源开放大赛，在短时间筹备期内，取得丰硕成果。2024年，火山引擎和intel联合举办第二届Bio-OS开源开放大赛，本次大赛主要面向全国生信领域的高校师生、相关企业组织、以及科研机构等，大赛以“开源共赢，科学无限”为宗旨，将有效构建Bio-OS社区的开源生态，推动生信领域的交流与合作，为火山引擎和intel构建一个“开放、创新、合作、共赢”的技术和商业氛围；同时，通过大赛牵引，将围绕Bio-OS建立了技术社区（SIG组），为行业成功发掘一批优秀人才。`;
const HomeCard = ({ item }) => {
  const { imgSrc, iconSrc, name, jumpUrl, hoverUrl } = item;
  return (
    <Popover
      content={
        hoverUrl ? (
          <div className="w-[200px]">
            <img src={hoverUrl} />
          </div>
        ) : jumpUrl ? (
          ""
        ) : (
          "即将开启，敬请期待"
        )
      }
    >
      <div className="my-[50px] text-[white] relative w-[280px] h-[106px] flex items-center justify-center">
        <img src={imgSrc} className="absolute	top-0 left-0 right-0" />
        <div
          className="text-[24px] font-bold flex items-center justify-between z-10"
          onClick={() => {
            if (jumpUrl) {
              window.open(jumpUrl);
            }
          }}
        >
          <div style={{ width: 60 }} className="mr-[16px]">
            <img src={iconSrc} width="100%" />
          </div>
          <div>{name}</div>
        </div>
      </div>
    </Popover>
  );
};
export const JoinButton = ({ textColor = "white" }) => {
  return (
    <div
      className="rounded-[12px] px-[50px] py-[5px] cursor-pointer text-[20px] font-bold w-fit button-bg"
      style={{
        color: textColor,
      }}
      onClick={() => {
        window.open("https://www.bagevent.com/event/registerTicket/8826248");
      }}
    >
      立即报名
    </div>
  );
};
const restDay = getDiffDay("2024-08-30", Date.now());
const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="home text-[#213547]">
        <div className="logo">
          <img src={huoshanIntel} />
        </div>
        <img src={openTitle} width={"50%"} />
        <div className="mt-[20px] mb-[50px]">
          <JoinButton />
        </div>
        <img width={"60%"} src={require("../../images/logoGroup.svg")} />
        {/* <div className="flex flex-col  justify-between">
          <div className="flex items-center">
            <div className="text-[18px] font-bold">指导单位：</div>
            <img
              className="h-[26px] mr-[8px]"
              src={require("../../images/logo/ccf.png")}
            ></img>
            <img
              className="h-[30px]"
              src={require("../../images/logo/guangshi.png")}
            ></img>
          </div>
          <div className="flex items-center">
            <div className="text-[18px] font-bold">主办单位：</div>
            <img
              className="h-[24px] mr-[16px]"
              src={require("../../images/logo/volc.png")}
            ></img>
            <img
              className="h-[22px]"
              src={require("../../images/logo/intelIcon.png")}
            ></img>
          </div>
          <div className="flex items-center">
            <div className="text-[18px] font-bold">协办单位：</div>
            <img
              className="h-[26px] mr-[16px]"
              src={require("../../images/logo/ccfWeiyuan.png")}
            ></img>
          </div>
          <div className="flex items-center">
            <div className="text-[18px] font-bold">
              合作单位：
              中国生物信息学学会（筹）、上海生物信息学会、广东省生物信息学学会、南方医科大学、…（持续更新中）
            </div>
          </div>
        </div> */}
        <img className="timer-divider" src={timerDivider} />
        <img className="timer-cover" src={timerCover} />
        <img className="timer" src={timer} />
        <div className="timer-text">距离报名截止还剩</div>
        <div className="timer-day">
          {restDay}
          <span className="text-[20px]">天</span>
        </div>
      </div>
      <div className="flex items-center justify-between w-[1100px]">
        {info.map((item) => {
          return <HomeCard item={item} key={item.name} />;
        })}
      </div>
      <div className="flex flex-col items-center text-[#213547]">
        <div className="text-[28px] font-medium mb-[30px]">
          Bio-OS开源开放大赛
        </div>
        <div className="flex items-center py-[24px] px-[32px] rounded-[12px] desc-bg">
          <div>{mainContent}</div>
          <img src={introFinger} />
        </div>
      </div>
    </div>
  );
};

export default Home;
