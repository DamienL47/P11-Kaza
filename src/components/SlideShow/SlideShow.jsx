// Importation des dépendances nécessaires et du fichier de styles
import s from "./style.module.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";

// Définition du composant SlideShow qui prend un tableau d'images en tant que prop
export function SlideShow({ images = [] }) {
  // État pour suivre l'index de la diapositive actuelle
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive précédente
  const handlePrevSlide = () => {
    // Met à jour l'index de la diapositive actuelle en fonction du nombre d'images
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  // Fonction pour passer à la diapositive suivante
  const handleNextSlide = () => {
    // Met à jour l'index de la diapositive actuelle en fonction du nombre d'images
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Rendu du composant diaporama
  return (
    <div className={s.slideShow}>
      <div className={s.slideShowInner}>
        {/* Itération à travers le tableau d'images pour rendre chaque diapositive */}
        {images.map((image, index) => (
          <div
            key={index}
            className={`${s.slideShowSlide} ${
              // Ajout de la classe 'active' si l'index de la diapositive actuelle correspond à l'index de la boucle
              index === currentSlide ? s.active : ""
            }`}
          >
            {/* Bouton flèche gauche pour naviguer vers la diapositive précédente */}
            <ChevronLeft className={s.buttonLeft} onClick={handlePrevSlide} />

            {/* Élément image pour la diapositive actuelle */}
            <img
              className={s.imageSlide}
              src={image}
              alt={`diapositive ${index}`}
            />

            {/* Bouton flèche droite pour naviguer vers la diapositive suivante */}
            <ChevronRight className={s.buttonRight} onClick={handleNextSlide} />
          </div>
        ))}
      </div>
    </div>
  );
}
