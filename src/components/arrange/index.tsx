import { Steps } from "@arco-design/web-react";
import "./index.scss";
import { getCurrentStep } from "../../util";
import classNames from "classnames";
const Step = Steps.Step;
const arrangeInfo = [
  {
    title: "赛程一",
    time: "即日 - 8月30日",
    name: "参赛报名",
    content:
      "大赛以 1~5 人小组为单位组队参加，欢迎大家加入赛事交流群寻找队友。",
  },
  {
    title: "赛程二",
    time: "5月 - 6月",
    name: "线上培训",
    content: "初赛开始，竞争激烈",
  },
  {
    title: "赛程三",
    time: "6月14日-9月13日",
    name: "初赛阶段",
    content: "公布决赛入围名单，各赛道前10进入决赛。",
  },
  {
    title: "赛程四",
    time: "9月13日",
    name: "提交作品",
    content: "现场答辩，分享你的解题思路; 国赛证书等你拿，瓜分30万奖金池。",
  },
  {
    title: "赛程五",
    time: "9月14日-10月12日",
    name: "初赛评审",
    content: "现场答辩，分享你的解题思路; 国赛证书等你拿，瓜分30万奖金池。",
  },
  {
    title: "赛程五",
    time: "10月14日",
    name: "公示决赛名单",
    content: "现场答辩，分享你的解题思路; 国赛证书等你拿，瓜分30万奖金池。",
  },
  {
    title: "赛程五",
    time: "11月",
    name: "线下总决赛",
    content: "现场答辩，分享你的解题思路; 国赛证书等你拿，瓜分30万奖金池。",
  },
  {
    title: "赛程五",
    time: "11月",
    name: "颁奖典礼",
    content: "现场答辩，分享你的解题思路; 国赛证书等你拿，瓜分30万奖金池。",
  },
];
const activeIndex = getCurrentStep();

const Arrange = () => {
  return (
    <div className="w-full">
      <img src={require("../../images/arrange.svg")}/>
      {/* <div className="w-full flex arrange-wrapper px-[80px]">
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
          // <div
          //   className={classNames("rounded-[8px] card-wrapper", {
          //     active: index < activeIndex,
          //   })}
          //   key={index}
          // >
            <div
              className={classNames("flex flex-col items-center title-card", {
                active: index < activeIndex,
              })}
              key={index}
            >
              <div className="text-[18px] font-bold">{item.name}</div>
              <div>{item.time}</div>
            </div>
          // </div>
        ))}
      </div> */}
    </div>
  );
};

export default Arrange;
