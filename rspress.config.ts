import * as path from "path";
import { defineConfig } from "rspress/config";

export default defineConfig({
  root: path.join(__dirname, "docs"),
  lang: "zh",
  title: "Bio-OS",
  description:
    "A low-threshold, cost-effective, high-speed cloud-based bioinformatics analysis service based on Serverless architecture.",
  icon: "/bioos-logo.svg",
  logo: {
    light: "/bioos-light-logo.png",
    dark: "/bioos-dark-logo.png",
  },
  locales: [
    // {
    //   lang: "en",
    //   // 导航栏切换语言的标签
    //   label: "English",
    // },
    {
      lang: "zh",
      // 导航栏切换语言的标签
      label: "简体中文",
    },
  ],
  builderConfig: {
    tools: {
      sass: {
        sourceMap: true,
      },
    },
    html: {
      tags: [
        {
          tag: 'script',
          // 通过 window.RSPRESS_THEME 变量来指定默认的主题模式，可选值为 'dark' 和 'light'
          children: "window.RSPRESS_THEME = 'light';",
        },
      ],
    },
  },
  themeConfig: {
    footer: {
      message: "Bio-OS",
    },
    socialLinks: [
      {
        icon: "github",
        mode: "link",
        content: "https://github.com/Bio-OS/bioos",
      },
    ],
  },
});
