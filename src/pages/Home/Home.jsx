import s from "./style.module.css";
import { Header } from "./Header/Header";
import { Banner } from "./Main/Banner/Banner";
import logo from "../../assets/images/logo.png";
import { Location } from "./Main/Location/Location";
import data from "../../data/logements.json";
import { Footer } from "./Footer/Footer";
import banner from "../../assets/images/Image_source_1.png";

export function Home() {
  const selected = data.filter((accomodation) => accomodation);
  return (
    <>
      <Header image={logo} />
      <main>
        <Banner image={banner} text={"Chez vous, partout et ailleurs"} />
        <div className={s.containerLocation}>
          {selected.map((accomodation) => {
            return (
              <Location
                key={accomodation.id}
                image={accomodation.cover}
                title={accomodation.title}
                id={accomodation.id}
              />
            );
          })}
        </div>
      </main>
      <Footer />
    </>
  );
}
