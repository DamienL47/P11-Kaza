import s from "./style.module.css";

export function Header({ image }) {
  return (
    <header className={s.header}>
      <div className={s.container}>
        <div className={s.logo}>
          <img src={image} alt="logo" />
        </div>
        <nav>
          <ul className={s.menu}>
            <li>
              <a className={s.link} href="/">
                Accueil
              </a>
            </li>
            <li>
              <a className={s.link} href="/about">
                A Propos
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
