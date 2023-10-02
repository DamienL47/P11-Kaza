import s from "./style.module.css";

export function Location({ image, title }) {
  return (
    <>
      <div className={s.containerLocation}>
        <img className={s.img} src={image} alt={title} />
        <h2 className={s.title}>{title}</h2>
        <span className={s.overlay}></span>
      </div>
    </>
  );
}
