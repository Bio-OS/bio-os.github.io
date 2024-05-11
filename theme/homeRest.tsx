import { useI18n } from "rspress/runtime";
const HomeRest = () => {
  const t = useI18n();
  return (
    <div className="flex flex-col items-center">
      <div className="text-[28px] font-bold my-[40px]">
        {t("project-intro-name")}
      </div>
      <div
        className="px-[40px] py-[20px] rounded-[16px] w-[1152px]"
        style={{ backgroundColor: "rgba(214, 188, 70, 0.05)" }}
      >
        <div>{t("project-intro-detail-part1")}</div>
        <div className="mt-[30px]">
          {t("project-intro-detail-part2")}
        </div>
      </div>
    </div>
  );
};

export default HomeRest;
