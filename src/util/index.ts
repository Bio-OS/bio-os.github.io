export const getDiffDay = (date1, date2) => {
  if (typeof date1 === "string") {
    date1 = Date.parse(date1);
  }
  if (typeof date2 === "string") {
    date2 = Date.parse(date2);
  }
  const diffTime = date1 - date2;
  if (diffTime <= 0) {
    return "0";
  }
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return diffDays < 10 ? `0${diffDays}` : diffDays;
};

export const getIncrementArray = (len) => {
  const arr = [];
  for (let i = 1; i <= len; i++) {
    arr.push(i);
  }
  return arr;
};

const timeDivider = ["2024.8.30", "2024.9.13", "2024.10.12"];

// 获取赛程进度
export const getCurrentStep = () => {
  const now = new Date().getTime();
  for (let i = 0; i < timeDivider.length; i++) {
    const time = Date.parse(timeDivider[i]);
    if (now < time) {
      return i + 1;
    }
  }
  return 4;
};

export const downloadFile = (url: string, name?: string) => {
  const a = document.createElement("a");
  a.href = url;
  a.download = name || "";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
};

export async function getTosFile(url: string, options?: { type?: "json" }) {
  // https://2ndbioos-competition-data.tos-cn-beijing.volces.com/metadata.json
  const content = await fetch(url).then(
    async (res) => {
      const body = await (options?.type === "json" ? res.json() : res.text());

      if (res.ok) {
        return { content: body, status: "ok" };
      } else {
        return { content: body, status: "failed" };
      }
    },
    (err) => {
      return { content: err, status: "failed" };
    }
  );

  return content;
}
