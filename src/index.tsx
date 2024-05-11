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

const CompetitionPage = () => {
  return (
    <div
      className="text-[#213547]"
      style={{
        backgroundImage: `url(${introBg})`,
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
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
          <Divider className="mt-[90px] mb-[50px]" />
        </div>
      </div>
    </div>
  );
};

export default CompetitionPage;
