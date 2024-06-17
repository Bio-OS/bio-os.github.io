import { Menu } from "@arco-design/web-react";
import { useState } from "react";
import huoshanIntel from "../images/logo/huoshanIntel.png";
import activityHelpLogo from "../images/logo/activityHelp.svg";

import banner from "../images/banner/help.png";
import TabData from "./TabData";

import "./index.scss";
import TabResult from "./TabResult";
import TabVideo from "./TabVideo";
import TabSort from "./TabSort";
import TabQA from "./TabQA";

const tabs = [
  {
    label: "赛题与数据",
    key: "data",
    title: "⛳ 赛题与数据",
    component: TabData,
  },
  {
    label: "结果提交",
    key: "result",
    title: "✍🏻 结果提交",
    component: TabResult,
  },
  {
    label: "培训视频",
    key: "video",
    title: "💻 培训视频",
    component: TabVideo,
  },
  {
    label: "排行榜",
    key: "sort",
    title: "🎉 排行榜",
    component: TabSort,
  },
  {
    label: "Q&A",
    key: "qa",
    title: "❓ 账号问题",
    component: TabQA,
  },
];

export default function ActivityHelp() {
  const [selectedKey, setSelectedKey] = useState("data");

  const TabContent = tabs.find((item) => item.key === selectedKey)!.component;

  return (
    <div
      style={{
        background: `no-repeat url("${banner}") right top / 100%`,
      }}
    >
      <main style={{ width: "90%" }} className="mx-auto">
        <section className="flex justify-between items-start pt-6 pb-12">
          <img src={activityHelpLogo} style={{ width: 600 }} />
          <img src={huoshanIntel} style={{ width: 168 }} />
        </section>

        <section className="flex">
          <Menu
            className="mr-4"
            style={{
              width: 200,
              marginLeft: -8,
              marginTop: -4,
            }}
            selectedKeys={[selectedKey]}
            onClickMenuItem={(key) => {
              setSelectedKey(key);
            }}
          >
            {tabs.map(({ key, label }) => {
              return (
                <Menu.Item key={key} className="flex items-center">
                  {label}
                </Menu.Item>
              );
            })}
          </Menu>

          <div
            className="min-w-0 flex-1 helpTabs"
            style={{
              borderLeft: "1px solid #EAEDF1",
              minHeight: "calc(100vh - 210px)",
              paddingLeft: 32,
            }}
          >
            <TabContent />
          </div>
        </section>
      </main>
    </div>
  );
}
