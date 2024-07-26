import { Tabs } from "@arco-design/web-react";
import UploadResult from "./components/UploadResult";

export default function TabResult() {
  return (
    <>
      <div className="font-medium text-lg mb-6">✍🏻 结果提交</div>

      <Tabs type="card-gutter">
        <Tabs.TabPane key="1" title="论文挑战赛">
          <UploadResult
            bucketEndpoint="https://paper-challenge.tos-s3-cn-beijing.volces.com"
            tip={
              <div style={{ fontSize: 13 }} className="text-gray-500 mb-10">
                <div>📢 温馨提示：</div>

                <div>
                  1.
                  论文挑战赛需要提交选定的论文、复现报告、导出的workspace压缩包，
                  <span style={{ color: "#D08D06" }} className="font-medium">
                    以整体压缩包形式提交
                  </span>
                </div>
                <div>
                  2. 压缩包名称请按照大赛提供的格式提交，如：
                  <span style={{ color: "#D08D06" }} className="font-medium">
                    参赛团队名称-workspace名称.zip
                  </span>
                </div>
              </div>
            }
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" title="任务挑战赛">
          <UploadResult
            bucketEndpoint="https://task-challenge.tos-cn-beijing.volces.com"
            tip={
              <div style={{ fontSize: 13 }} className="text-gray-500 mb-10">
                <div>📢 温馨提示：</div>

                <div>
                  1.
                  任务挑战赛需要提交介绍文档、大模型应用代码、导出的workspace压缩包，
                  <span style={{ color: "#D08D06" }} className="font-medium">
                    以整体压缩包形式提交
                  </span>
                </div>
                <div>
                  2. 压缩包名称请按照大赛提供的格式提交，如：
                  <span style={{ color: "#D08D06" }} className="font-medium">
                    参赛团队名称-workspace名称.zip
                  </span>
                </div>
              </div>
            }
          />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" title="AI算法赛">
          <UploadResult
            bucketEndpoint="https://ai-challenge.tos-cn-beijing.volces.com"
            tip={
              <div style={{ fontSize: 13 }} className="text-gray-500 mb-10">
                <div>📢 温馨提示：</div>

                <div>
                  1. AI算法赛需要提交预测结果文件，
                  <span style={{ color: "#D08D06" }} className="font-medium">
                    以整体压缩包形式提交
                  </span>
                </div>
                <div>
                  2. 压缩包名称请按照大赛提供的格式提交，如：
                  <span style={{ color: "#D08D06" }} className="font-medium">
                    参赛团队名称-选择AI赛题名称.zip
                  </span>
                </div>
              </div>
            }
          />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}
