import {
  Button,
  Form,
  Input,
  Message,
  Tabs,
  Upload,
} from "@arco-design/web-react";
import { UploadItem } from "@arco-design/web-react/es/Upload";
import { IconCheck } from "@arco-design/web-react/icon";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { useState } from "react";

export default function TabResult() {
  const [file, setFile] = useState<UploadItem>();
  const [uploading, setUploading] = useState(false);
  const [form] = Form.useForm();

  const upload = (phoneNumber: string) => {
    if (!file) return;

    const formData = new FormData();
    formData.append("key", `submissions/${phoneNumber}/${file.name}`);
    formData.append("file", file.originFile!);

    setUploading(true);
    fetch("https://paper-challenge.tos-s3-cn-beijing.volces.com", {
      method: "POST",
      body: formData,
    }).then(
      (res) => {
        if (res.ok) {
          setUploading(false);
          setFile(undefined);
          Message.success(`压缩包提交成功: ${file.name}`);
          return;
        }

        setUploading(false);
        setFile(undefined);
        Message.error("压缩包提交失败");
      },
      () => {
        setUploading(false);
        setFile(undefined);
        Message.error("压缩包提交失败");
      }
    );
  };

  const upload2 = () => {
    const client = new S3Client({
      endpoint: "https://tos-s3-cn-beijing.volces.com",
      region: "cn-beijing",
      credentials: {
        accessKeyId: "aaaa",
        secretAccessKey: "bbbb",
      },
    });

    client
      .send(
        new PutObjectCommand({
          Bucket: "paper-challenge",
          Key: "mm.txt",
          Body: "kkk",
        })
      )
      .then(
        (res) => {
          res;

          Message.success("上传成功");
        },
        (err) => {
          Message.error(`上传失败: ${err}`);
        }
      );
  };

  return (
    <>
      <div className="font-medium text-lg mb-6">✍🏻 结果提交</div>

      <Tabs type="card-gutter">
        <Tabs.TabPane key="1" title="论文挑战赛">
          <Upload
            className="mb-3"
            autoUpload={false}
            showUploadList={false}
            drag
            accept=".zip,.rar"
            tip="只能上传 1 个压缩包，压缩包格式仅支持 zip、rar"
            onChange={(_, file) => {
              setFile(file);
            }}
          />

          <div style={{ fontSize: 13 }} className="text-gray-500 mb-10">
            <div>📢 温馨提示：</div>
            <div>
              1. 论文挑战赛需要提交选定的论文、复现报告、导出的workspace压缩包，
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

          <Form
            form={form}
            style={{ width: 600 }}
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
            onSubmit={(values) => {
              upload(values.phoneNumber);
            }}
          >
            <Form.Item required label={<span>当前已选压缩包</span>}>
              <div style={{ color: "#1664FF" }} className="text-sm">
                {file?.name || "-"}
              </div>
            </Form.Item>
            <Form.Item
              required
              label={<span>参赛手机号码</span>}
              rules={[
                {
                  validator(value, callback) {
                    if (!value) {
                      return callback("不能为空");
                    }

                    const val = value as string;
                    if (/^1[0-9]{10}$/.test(val)) {
                      return callback();
                    }
                    return callback("格式不正确");
                  },
                },
              ]}
              field="phoneNumber"
            >
              <Input placeholder="请输入" />
            </Form.Item>

            <div>
              <Button
                icon={<IconCheck />}
                type="primary"
                htmlType="submit"
                loading={uploading}
                disabled={!file}
              >
                {uploading ? "正在提交" : "确认提交"}
              </Button>
            </div>
          </Form>
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
