interface FAQItem {
  question: string;
  answer: string;
}
const faqInfo: FAQItem[] = [
  {
    question: "1. 每支队伍有几人?",
    answer:
      "Q. 每支队伍1-3人参赛。想找队友的小伙伴可以加入赛事交流群寻找队友喔。",
  },
  {
    question: "2. 我可以报名多个赛道吗？",
    answer:
      "Q. 不可以，一名参赛者仅可加入一直团队且仅可报名一个赛道，如果报名多个赛道并同时参赛将被会被取消成绩。",
  },
  {
    question: "3. 没有好的想法怎么办？",
    answer:
      "Q. 大赛组委会为大家准备了赛前辅导直播，提前关注 Bio-OS官方B站账号，预约直播。",
  },
  {
    question: "4. 主办方是否提供决赛的餐饮和住宿？",
    answer:
      "Q. 主办方为进入决赛的每支队伍提供定额报销，选手可自行在决赛城市解决食宿。",
  },
];
const SingleFaq = ({ item }: { item: FAQItem }) => {
  return (
    <div className="mb-[40px]">
      <div className="text-[20px] font-500 mb-[12px]">{item.question}</div>
      <div className="text-[14px]">{item.answer}</div>
    </div>
  );
};
const FAQ = () => {
  return (
    <div className="flex justify-between">
      <div>
        {faqInfo.slice(0, 2).map((ele) => {
          return <SingleFaq item={ele} key={ele.question} />;
        })}
      </div>
      <div>
        {faqInfo.slice(2).map((ele) => {
          return <SingleFaq item={ele} key={ele.question} />;
        })}
      </div>
    </div>
  );
};

export default FAQ;
