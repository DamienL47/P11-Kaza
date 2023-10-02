import s from "./style.module.css";
import banner from "../../../../../assets/images/Image_source_1.png";

export function Banner() {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        backgroundBlendMode: "overlay",
      }}
      className={s.banner}
    >
      <div className={s.container}>
        <h1 className={s.title}>Chez vous, partout et ailleurs</h1>
      </div>
    </div>
  );
}
