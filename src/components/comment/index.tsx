import { Carousel } from "@arco-design/web-react";
import { getIncrementArray } from "../../util";

const Slide = ({ imageSrc, dir }) => {
  return (
    <Carousel
      autoPlay
      animation="card"
      showArrow="hover"
      indicatorPosition="outer"
      indicatorType="line"
      style={{ width: "100%" }}
    >
      {imageSrc.map((name, index) => (
        <div
          key={index}
          className="h-full rounded-[16px]"
          style={{ width: "50%" }}
        >
          <img
            src={require(`../../images/${dir}/${name}.svg`)}
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </Carousel>
  );
};
const SlideWide = ({ imageSrc, dir }) => {
  return (
    <Carousel
      autoPlay
      animation="card"
      showArrow="hover"
      indicatorType="never"
      style={{ width: "100%", height: 500 }}
    >
      {imageSrc.map((name, index) => (
        <div
          key={index}
          className="rounded-[16px] h-full"
          style={{ width: "50%" }}
        >
          <img
            src={require(`../../images/${dir}/${name}.png`)}
            style={{ width: "100%" }}
          />
        </div>
      ))}
    </Carousel>
  );
};
const imageCommentSrc = getIncrementArray(10);
const imageFirstBioOSSrc = getIncrementArray(81);

export const CommentCard = () => (
  <Slide imageSrc={imageCommentSrc} dir={"teacher"} />
);
export const AnswerCard = () => (
  <SlideWide imageSrc={imageFirstBioOSSrc} dir={"bioosFirst"} />
);

export default Slide;
