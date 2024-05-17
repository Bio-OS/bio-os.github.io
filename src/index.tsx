import Home from "./components/home";
import Introduction from "./components/introduction";
import Title from "./components/title";
import "@arco-design/web-react/dist/css/arco.css";
import "./index.scss";
import introBg from "./images/bg.png";
import Arrange from "./components/arrange";
import Award, { Community } from "./components/award";
import { AnswerCard, CommentCard } from "./components/comment";
import FAQ from "./components/faq";
import { Divider } from "@arco-design/web-react";
import { tosDomain } from "./components/const";

const CompetitionPage = () => {
  return (
    <div
      className="text-[#213547]"
      style={{
        backgroundImage: `url(${introBg})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#F4F4FE",
      }}
    >
      <div>
        <div className="px-[48px] flex flex-col items-center">
          <div className=" w-[1344px]">
            <Home />
            <Title title={"赛题介绍"} />
            <Introduction />
            <Title title={"赛程安排"} />
            <Arrange />
            <Title title={"奖项设置"} />
            <Award />
            <Title title={"评委嘉宾"} />
            <CommentCard />
          </div>
          <div className=" w-full">
            <Title title={"往期精彩花絮"} />
            <AnswerCard />
          </div>
          <div>
            <div className=" w-[1344px]">
              <Title title={"FAQ"} desc={""} />
              <FAQ />
            </div>
          </div>
        </div>
      </div>
      <div className="px-[48px] flex flex-col items-center pb-[40px]">
        <div className="w-[1344px]">
          <Title title={"赛事交流"} />
          <Community />
          <Title title={"组织体系&合作伙伴"} />
          <div>
            <img src={`${tosDomain}bioos_co.svg`}/>
          </div>
          <Divider className="mt-[90px] mb-[50px]" />
          <div
            className="rounded-[12px] px-[50px] py-[5px] cursor-pointer text-[20px] font-bold w-fit button-bg"
            style={{
              color: "white",
            }}
          >
            Bio-OS开源开放大赛
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;
