import React from "react";
import { Header } from "../Home/Header/Header";
import { Footer } from "../Home/Footer/Footer";
import s from "./style.module.css";
import { Link } from "react-router-dom";

export function Error404() {
  return (
    <>
      <Header />
      <div>
        <h1 className={s.title}>404</h1>
        <p className={s.text}>
          <span className={s.line}>Oups! La page que</span> vous demandez
          n'existe pas.
        </p>
        <Link to="/" className={s.link}>
          Retourner sur la page d'accueil
        </Link>
      </div>
      <Footer />
    </>
  );
}
