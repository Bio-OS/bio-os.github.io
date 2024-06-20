import { Message, Spin, Tabs, Typography } from "@arco-design/web-react";
import { IconDownload, IconFile } from "@arco-design/web-react/icon";

import {
  AnchorHTMLAttributes,
  ImgHTMLAttributes,
  TableHTMLAttributes,
  useEffect,
  useMemo,
  useState,
} from "react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { downloadFile, getTosFile } from "../util";

const Ellipsis = Typography.Ellipsis;

interface FileItem {
  name: string;
  desc: string;
  url: string;
}

export default function TabData() {
  const [metadata, setMetadata] = useState<{
    aiFiles: FileItem[];
    paperFiles: FileItem[];
    taskFiles: FileItem[];
  }>();

  useEffect(() => {
    getTosFile(
      "https://2ndbioos-competition-data.tos-cn-beijing.volces.com/metadata.json",
      { type: "json" }
    ).then((result) => {
      if (result.status === "ok") {
        setMetadata(result.content);
      } else {
        Message.error(`获取metadata失败：${result.content}`);
      }
    });
  }, []);

  return (
    <>
      <div className="font-medium text-lg mb-6">⛳️ 赛题与数据</div>

      <Tabs type="card-gutter">
        <Tabs.TabPane key="1" title="论文挑战赛">
          <FileCardList files={metadata?.paperFiles} />
          <MarkdownUrl url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/exam/1.md" />
        </Tabs.TabPane>
        <Tabs.TabPane key="2" title="任务挑战赛">
          <FileCardList files={metadata?.taskFiles} />
          <MarkdownUrl url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/exam/2.md" />
        </Tabs.TabPane>
        <Tabs.TabPane key="3" title="AI算法赛">
          <FileCardList files={metadata?.aiFiles} />
          <MarkdownUrl url="https://2ndbioos-competition-data.tos-cn-beijing.volces.com/exam/3.md" />
        </Tabs.TabPane>
      </Tabs>
    </>
  );
}

function FileCardList({
  files,
}: {
  files?: {
    name: string;
    desc: string;
    url: string;
  }[];
}) {
  if (!files?.length) return;

  return (
    <div
      className="pb-8"
      style={{
        display: "grid",
        gap: 16,
        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
        gridAutoFlow: "dense",
      }}
    >
      {files.map(({ name, desc, url }, index) => {
        return (
          <section
            key={index}
            className={`border border-slate-200 border-solid rounded-lg p-4 flex flex-col cursor-pointer overflow-auto hover:shadow-md`}
            style={{
              height: 140,
              background: "linear-gradient(180deg, #f3f7ff 0%, #fff 46.5%)",
            }}
            onClick={() => {
              downloadFile(url);
            }}
          >
            <div className="flex">
              <div className="mr-2 pt-1">
                <IconFile
                  style={{ fontSize: 36, color: "rgb(var(--link-6))" }}
                />
              </div>

              <div className="min-w-0">
                <Ellipsis showTooltip className={`text-sm font-medium pb-1`}>
                  {name}
                </Ellipsis>

                <Ellipsis
                  showTooltip={{ position: "right" }}
                  rows={3}
                  expandable={false}
                  className="text-xs text-gray-500"
                >
                  {desc || "-"}
                </Ellipsis>
              </div>
            </div>

            <div className="text-xs font-medium mt-auto text-right">
              <span style={{ color: "rgb(var(--link-6))" }}>
                <IconDownload className="mr-1" />
                下载
              </span>
            </div>
          </section>
        );
      })}
    </div>
  );
}

function MarkdownUrl({ url }: { url: string }) {
  const [status, setStatus] = useState<"loading" | "ok" | "error">("loading");
  const [content, setContent] = useState("");

  useEffect(() => {
    fetch(url).then(
      async (res) => {
        if (res.ok) {
          const md = await res.text();
          setContent(md);
          setStatus("ok");
        } else {
          setStatus("error");
        }
      },
      () => {
        setStatus("error");
      }
    );
  }, []);

  if (status === "loading") {
    return <Spin />;
  }

  if (status === "error") {
    return;
  }

  return (
    <div className="px-[20px] py-[20px] bg-slate-50 rounded-lg">
      <BioMarkdown md={content} />
    </div>
  );
}

function BioMarkdown({ md }: { md: string }) {
  const componets = useMemo(() => {
    return {
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
    };
  }, []);

  return (
    <Markdown
      className="markdown-body"
      components={componets}
      remarkPlugins={[[remarkGfm, { singleTilde: false }]]}
    >
      {md}
    </Markdown>
  );
}
