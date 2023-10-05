import s from "./style.module.css";
import { StarFill, Star as StarHalf } from "react-bootstrap-icons";

export function Rating({ rating }) {
  const starList = [];

  const starFillCount = Math.floor(rating);
  const hasStarHalf = rating - starFillCount >= 0.5;
  const starEmptyCount = 5 - starFillCount - (hasStarHalf ? 1 : 0);

  for (let i = 0; i < starFillCount; i++) {
    starList.push(<StarFill key={"star-fill" + i} className={s.star} />);
  }
  if (hasStarHalf) {
    starList.push(<StarHalf key={"star-half"} className={s.star} />);
  }
  for (let i = 0; i < starEmptyCount; i++) {
    starList.push(<StarFill key={"star-empty" + i} className={s.starEmpty} />);
  }

  return <div>{starList}</div>;
}
