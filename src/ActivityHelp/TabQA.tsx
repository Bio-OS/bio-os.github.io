import { useEffect, useState } from "react";

export default function TabQA() {
  const [fileUrl, setFileUrl] = useState("");

  useEffect(() => {
    fetch(
      "https://2ndbioos-competition-data.tos-cn-beijing.volces.com/%E5%A4%A7%E8%B5%9BQ%26A.pdf"
    ).then(async (res) => {
      const blob = await res.blob();
      const fileUrl = window.URL.createObjectURL(blob);

      setFileUrl(fileUrl);
    });

    return () => {
      URL.revokeObjectURL(fileUrl);
    };
  }, []);

  return (
    <>
      <div className="font-medium text-lg mb-6">❓️ 账号问题</div>

      {fileUrl && (
        <div>
          <iframe
            src={fileUrl}
            className="w-full"
            style={{ height: "calc(100vh - 270px)" }}
          />
        </div>
      )}
    </>
  );
}
