import s from "./style.module.css";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import { PageLocation } from "../../../../pages/PageLocation/PageLocation";

export function Location({ image, title, id }) {
  const [currentElement, setCurrentElement] = useState(id);

  useEffect(() => {
    setCurrentElement(id);
  }, [currentElement]);
  return (
    <>
      <a href="/location?id=${id}" id={id} className={s.containerLocation}>
        <img className={s.img} src={image} alt={title} />
        <h2 className={s.title}>{title}</h2>
        <span className={s.overlay}></span>
      </a>
    </>
  );
}