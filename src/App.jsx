import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Error404 } from "./pages/Error404/Error404";
import { About } from "./pages/About/About";
import { PageLocation } from "./pages/PageLocation/PageLocation";
import data from "./data/logements.json";

export function App() {
  return (
    <>
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
    </>
  );
}
