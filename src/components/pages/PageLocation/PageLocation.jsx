import s from "./style.module.css";
import data from "../../../data/logements.json";
import { Header } from "../Home/Header/Header";
import { Footer } from "../Home/Footer/Footer";
import { SlideShow } from "../../SlideShow/SlideShow";
import { Collapse } from "../../Collapse/Collapse";
import { useParams, useNavigate } from "react-router-dom";
import { Rating } from "../../Rating/Rating";
import { Error404 } from "../Error404/Error404";

export function PageLocation() {
  const { id } = useParams();
  const navigate = useNavigate();

  const accommodation = data.find((accommodation) => accommodation.id === id);
  if (!accommodation) {
    navigate("*");
    return <Error404 />;
  }

  const pictures = accommodation.pictures;
  const listEquipements = accommodation.equipments;

  const displayEquipments = () => {
    return (
      <ul key="listEquipments" className={s.listEquip}>
        {listEquipements.map((equipment, index) => (
          <li className={s.equipment} key={index}>
            {equipment}
          </li>
        ))}
      </ul>
    );
  };

  const styleCollapse = {
    width: "92%",
  };

  return (
    <>
      <Header />
      <SlideShow images={pictures} />
      <div className={s.container}>
        <div className={s.containerInfos}>
          <div className={s.containerHost}>
            <h1 className={s.title}>{accommodation.title}</h1>
            <div className={s.host}>
              <p className={s.hostName}>{accommodation.host.name}</p>
              <img
                className={s.imgHost}
                src={accommodation.host.picture}
                alt=""
              />
            </div>
          </div>
          <p className={s.location}>{accommodation.location}</p>
          <div className={s.rating}>
            <p className={s.tags}>
              {accommodation.tags.map((tag) => {
                return (
                  <span className={s.tag} key={tag}>
                    {tag}
                  </span>
                );
              })}
            </p>
            <div className={s.placeRating}>
              <Rating rating={accommodation.rating} />
            </div>
          </div>
        </div>
        <div className={s.containerCollapse}>
          <div className={s.collapse}>
            <Collapse className={styleCollapse} title="Description">
              {accommodation.description}
            </Collapse>
          </div>
          <div className={s.collapse}>
            <Collapse title="Equipements" className={styleCollapse}>
              {displayEquipments()}
            </Collapse>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
