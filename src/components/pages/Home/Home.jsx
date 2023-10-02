import s from "./style.module.css";
import { Header } from "./Header/Header";
import { Banner } from "./Main/Banner/Banner";
import logo from "../../../assets/images/logo.png";
import { Location } from "./Main/Location/Location";
import { AccomodationsAPI } from "../../../api/accomodations";
import data from "../../../data/logements.json";

export function Home() {
  const selected = data.slice(0, 6);
  return (
    <>
      <Header image={logo} />
      <main>
        <Banner />
        <div className={s.containerLocation}>
          {selected.map((accomodation) => {
            return (
              <Location
                key={accomodation.id}
                image={accomodation.cover}
                title={accomodation.title}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}
