import { HeroScreen } from "../components/hero/HeroScreen";
import { DcScreen } from "../components/dc/DcScreen";
import { MarvelScreen } from "../components/marvel/MarvelScreen";
import { SearchScreen } from "../components/search/SearchScreen";
import { Navbar } from "../components/ui/Navbar";
import { Routes, Route } from "react-router-dom";

export const DashboardRoutes = () => {
  return (
    <>
      <Navbar />

      <div className="container">
        <Routes>
          <Route path="dc" element={<DcScreen />} />
          <Route path="marvel" element={<MarvelScreen />} />
          <Route path="search" element={<SearchScreen />} />
          <Route path="hero/:heroeId" element={<HeroScreen />} />{" "}
          
          {/*heroeId es un argumento obligatorio */}
          <Route path="/" element={<MarvelScreen />} />
        </Routes>
      </div>
    </>
  );
};
