import s from "./style.module.css";
import { useState } from "react";
import { ChevronUp } from "react-bootstrap-icons";

export function Collapse({ title, children, style }) {
  const [isActive, setIsActive] = useState(false);

  const handleCollapse = () => {
    setIsActive(!isActive);
  };

  return (
    <>
      <section className={s.panel} style={style}>
        <h3 className={s.title} onClick={() => handleCollapse()}>
          {title}
        </h3>
        <ChevronUp className={isActive ? s.buttonUp : s.buttonDown} />
      </section>
      {isActive ? (
        <div className={s.content} style={style}>
          <div className={s.contentText}>{children}</div>
        </div>
      ) : (
        false
      )}
    </>
  );
}
