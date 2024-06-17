import { Tabs } from "@arco-design/web-react";

export default function TabSort() {
  return (
    <>
      <div className="font-medium text-lg mb-6">🎉 排行榜</div>

      <Tabs type="card-gutter">
        <Tabs.TabPane key="1" title="论文挑战赛">
          敬请期待
        </Tabs.TabPane>
        <Tabs.TabPane key="2" title="任务挑战赛">
          敬请期待
        </Tabs.TabPane>
        <Tabs.TabPane key="3" title="AI算法赛">
          敬请期待
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
