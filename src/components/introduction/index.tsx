import { useState } from "react";
import classNames from "classnames";
import "./index.scss";

const introContent = [
  {
    name: "赛道一：论文复现赛",
    url: "https://bytedance.larkoffice.com/docx/SUtKdmNQyos5wTx4CLacQmjPn9e",
  },
  {
    name: "赛道二：任务挑战赛",
    url: "https://bytedance.larkoffice.com/docx/FAE0dQEAjo21VrxN96icybeNn7b",
  },
  {
    name: "赛道三：AI 赛道",
    url: "https://bytedance.larkoffice.com/docx/BWfKduETyopvurx0LtycEdPIn3c",
  },
];
const IntroCard = ({
  name,
  onhover,
  active = false,
  className = "",
  style = {},
}) => {
  return (
    <div
      className={classNames(
        "px-[40px] py-[15px] cursor-pointer w-[400px]",
        "rounded-tl-[12px] rounded-tr-[12px]",
        active ? "active-card" : "unactive-card",
        className
      )}
      style={{
        ...style,
      }}
      onClick={onhover}
    >
      <div
        className="text-[20px] font-500"
        style={{ color: !active ? "#86909C" : "" }}
      >
        {name}
      </div>
    </div>
  );
};
const Introduction = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="flex flex-col w-full desc-bg rounded-[12px] py-[40px] px-[30px]">
      <div className="flex justify-between">
        {introContent.map((item, index) => {
          return (
            <div className="h-full" key={item.name}>
              <IntroCard
                key={item.name}
                name={item.name}
                active={index === activeIndex}
                onhover={() => setActiveIndex(index)}
              />
            </div>
          );
        })}
      </div>
      <div className="flex-1 iframeWrapper px-[20px] py-[40px] iframe-bg">
        <iframe
          src={introContent[activeIndex].url}
          className="w-full h-[600px] rounded-[12px]"
        ></iframe>
        <div className="iframeHideHeader"></div>
      </div>
    </div>
  );
};

export default Introduction;
