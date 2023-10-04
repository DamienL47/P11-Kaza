import React from "react";
import { Header } from "../Home/Header/Header";
import { Footer } from "../Home/Footer/Footer";
import s from "./style.module.css";

export function Error404() {
  return (
    <>
      <Header />
      <div>
        <h1 className={s.title}>404</h1>
        <p className={s.text}>Oups! La page que vous demandez n'existe pas.</p>
        <a className={s.link} href="/">
          Retourner sur la page d'accueil
        </a>
      </div>
      <Footer />
    </>
  );
}
