import s from "./style.module.css";

export function SlideShow({ images = [] }) {
  return (
    <div className={s.slideShow}>
      <div className={s.slideShowInner}>
        {images.map((image, index) => {
          return (
            <div
              key={index}
              className={s.slideShowSlide}
              style={{ backgroundImage: `url(${image})` }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
