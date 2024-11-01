import { Message, Table, Tabs } from "@arco-design/web-react";
import { useEffect, useState } from "react";
import { getTosFile } from "../util";

export default function TabSort() {
  return (
    <>
      <div className="font-medium text-lg mb-6">🎉 排行榜</div>

      <Tabs type="card-gutter" destroyOnHide>
        <Tabs.TabPane key="1" title="论文挑战赛">
          <TableRank url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/bioos-web-config/rank-paper.json" />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" title="任务挑战赛">
          <TableRank url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/bioos-web-config/rank-task.json" />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" title="AI算法赛">
          <Tabs type="capsule" className="rankTabs">
            <Tabs.TabPane title="赛题一" key="1">
              <TableRank url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/bioos-web-config/rank-ai-1.json" />
            </Tabs.TabPane>
            <Tabs.TabPane title="赛题二" key="2">
              <TableRank url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/bioos-web-config/rank-ai-2.json" />
            </Tabs.TabPane>
          </Tabs>
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

interface RankItem {
  rank: number;
  team: string;
  score: number;
  time: string;
}

function TableRank({ url }: { url: string }) {
  const [data, setData] = useState<RankItem[]>();

  useEffect(() => {
    getTosFile(url, { type: "json" }).then((result) => {
      if (result.status === "ok") {
        setData(result.content);
      } else {
        Message.error(`获取数据失败：${result.content}`);
      }
    });
  }, []);

  return (
    <Table
      loading={!data}
      rowKey="team"
      columns={[
        {
          title: "排名",
          dataIndex: "rank",
        },
        {
          title: "参赛团队",
          dataIndex: "team",
        },
        {
          title: "分数",
          dataIndex: "score",
        },
        {
          title: "更新时间",
          dataIndex: "time",
        },
      ]}
      data={data}
      pagination={false}
    />
  );
}
