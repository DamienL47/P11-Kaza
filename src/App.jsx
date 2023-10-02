import { Routes, Route } from "react-router-dom";
import { Home } from "./components/pages/Home/Home";
import { Error404 } from "./components/pages/Error404/Error404";
import { About } from "./components/pages/About/About";

export function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
