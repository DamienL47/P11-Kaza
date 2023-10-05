import s from "./style.module.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

export function SlideShow({ images = [] }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  return (
    <div className={s.slideShow}>
      <div className={s.slideShowInner}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`${s.slideShowSlide} ${
              index === currentSlide ? s.active : ""
            }`}
          >
            <ChevronLeft className={s.buttonLeft} onClick={handlePrevSlide} />
            <img className={s.imageSlide} src={image} alt={`slide ${index}`} />
            <ChevronRight className={s.buttonRight} onClick={handleNextSlide} />
          </div>
        ))}
      </div>
    </div>
  );
}
