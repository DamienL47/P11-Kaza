import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Error404 } from "./components/pages/Error404/Error404";
import { About } from "./components/pages/About/About";
import { PageLocation } from "./components/pages/PageLocation/PageLocation";
import data from "./data/logements.json";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {data.map((accommodation) => (
          <Route
            key={accommodation.id}
            path="/location/:id"
            element={<PageLocation />}
          />
        ))}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </div>
  );
}
