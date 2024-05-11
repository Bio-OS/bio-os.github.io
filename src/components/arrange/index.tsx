import { Steps } from "@arco-design/web-react";
import "./index.scss";
import { getCurrentStep } from "../../util";
import classNames from "classnames";
const Step = Steps.Step;
const arrangeInfo = [
  {
    title: "赛程一",
    time: "即日起 - 2024.8.30",
    name: "大赛报名",
    content:
      "大赛以 1~5 人小组为单位组队参加，欢迎大家加入赛事交流群寻找队友。",
  },
  {
    title: "赛程二",
    time: "2024.6.14 - 2024.9.13",
    name: "初赛",
    content: "初赛开始，竞争激烈",
  },
  {
    title: "赛程三",
    time: "2024.9.14 - 2024.10.12",
    name: "初赛评审",
    content: "公布决赛入围名单，各赛道前10进入决赛。",
  },
  {
    title: "赛程四",
    time: "2024.11",
    name: "线下总决赛&颁奖典礼",
    content: "现场答辩，分享你的解题思路; 国赛证书等你拿，瓜分30万奖金池。",
  },
];
const activeIndex = getCurrentStep();

const Arrange = () => {
  return (
    <div className="w-full">
      <div className="w-full flex arrange-wrapper px-[80px]">
        <div className="h-[6px] bg-[#77b9fa] w-[120px] step-before"></div>
        <Steps
          className="flex-1"
          current={activeIndex}
          labelPlacement="vertical"
        >
          {arrangeInfo.map((_, index) => {
            return <Step key={index} />;
          })}
        </Steps>
        <div className="h-[6px] bg-[#d8d4f9] w-[120px] step-after"></div>
      </div>
      <div className="flex justify-between items-center">
        {arrangeInfo.map((item, index) => (
          <div
            className={classNames("rounded-[8px] card-wrapper", {
              active: index < activeIndex,
            })}
            key={index}
          >
            <div
              className={classNames("flex flex-col items-center title-card", {
                active: index < activeIndex,
              })}
            >
              <div className="text-[18px] font-bold">{item.title}</div>
              <div>{item.time}</div>
            </div>
            <div className="font-bold mt-2 mb-4">{item.name}</div>
            <div>{item.content}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrange;
