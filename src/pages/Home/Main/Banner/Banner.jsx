import s from "./style.module.css";
import banner from "../../../../assets/images/Image_source_1.png";

export function Banner({ image = null, text = null }) {
  return (
    <div
      style={{
        backgroundImage: `url(${image})`,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backgroundBlendMode: "overlay",
      }}
      className={s.banner}
    >
      <div className={s.container}>
        <h1 className={s.title}>{text}</h1>
      </div>
    </div>
  );
}
