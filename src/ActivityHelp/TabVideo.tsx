import { Link } from "@arco-design/web-react";

export default function TabVideo() {
  return (
    <>
      <div className="font-medium text-lg mb-6">💻 培训视频</div>

      <div className="flex flex-col items-start">
        <Link
          href="https://meetings.larkoffice.com/s/1k4eiw161jytg"
          target="_blank"
        >
          点击前往培训视频 第一期
        </Link>
        <Link
          href="https://meetings.larkoffice.com/s/1k4hrd6vbtmv7"
          target="_blank"
        >
          点击前往培训视频 第二期
        </Link>
        <Link
          href="https://meetings.larkoffice.com/s/1k4m36683h0jl"
          target="_blank"
        >
          点击前往培训视频 第三期
        </Link>
      </div>
    </>
  );
}
