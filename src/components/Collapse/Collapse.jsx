import s from "./style.module.css";
import { useState } from "react";
import { ChevronUp, ChevronDown } from "react-bootstrap-icons";

export function Collapse({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  const handleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className={s.panel}>
        <h3 className={s.title} onClick={() => handleCollapse()}>
          {title}
        </h3>
        <ChevronUp className={isActive ? s.buttonUp : s.buttonDown} />
      </section>
      {isActive ? (
        <div className={s.content}>
          <div className={s.contentText}>{content}</div>
        </div>
      ) : (
        false
      )}
    </>
  );
}
