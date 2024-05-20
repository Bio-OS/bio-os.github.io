import {
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  TableHTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import classNames from "classnames";
import Markdown from "react-markdown";
import "./index.scss";
import "./markdown.less";
import remarkGfm from "remark-gfm";

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
  const [info, setInfo] = useState("");
  const componets = useMemo(
    () => ({
      a(props: AnchorHTMLAttributes<HTMLAnchorElement>) {
        return (
          <a
            {...props}
            // #开头表示自动生成的TOC跳转
            target={props.href?.startsWith("#") ? undefined : "_blank"}
          />
        );
      },
      table(props: TableHTMLAttributes<HTMLTableElement>) {
        return <table {...props} className={"mdTable"} />;
      },
      img(props: ImgHTMLAttributes<HTMLImageElement>) {
        return <img {...props} className="r-max-w-[90%] r-block r-mx-auto" />;
      },
    }),
    []
  );
  useEffect(() => {
    fetch(
      `https://lf-opensource.bytetos.com/obj/opensource-cn/bioos_question${
        activeIndex + 1
      }.md`
    ).then(async (res) => {
      const reader = res.body.pipeThrough(new TextDecoderStream()).getReader();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        // let info = marked.parse(value);
        setInfo(value);
      }
    });
  }, [activeIndex]);
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
        <Markdown
          className="markdown-body"
          components={componets}
          remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
        >
          {info}
        </Markdown>
      </div>
      {/* <iframe
          src={introContent[activeIndex].url}
          className="w-full h-[600px] rounded-[12px]"
        ></iframe>
        <div className="iframeHideHeader"></div> */}
      {/* </div> */}
    </div>
  );
};

export default Introduction;
