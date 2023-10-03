import s from "./style.module.css";
import logoBlanc from "../../../../assets/images/logoBlanc.png";

export function Footer() {
  return (
    <footer className={s.footer}>
      <img className={s.logo} src={logoBlanc} alt="Logo" />
      <p className={s.copyright}>© 2021 Kaza. All rights reserved</p>
    </footer>
  );
}
