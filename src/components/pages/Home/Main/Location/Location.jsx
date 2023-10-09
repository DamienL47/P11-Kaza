import s from "./style.module.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export function Location({ image, title, id }) {
  const [currentElement, setCurrentElement] = useState(id);

  useEffect(() => {
    setCurrentElement(id);
  }, [currentElement]);
  return (
    <>
      <Link to={`/location/${id}`} className={s.containerLocation}>
        <img className={s.img} src={image} alt={title} />
        <h2 className={s.title}>{title}</h2>
        <span className={s.overlay}></span>
      </Link>
    </>
  );
}
