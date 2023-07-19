import { Route, Routes } from "react-router-dom";
import "./styles/styles.scss";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Home } from "./pages/Main/Home/Home";
import { IndianOcean } from "./pages/Main/IndianOcean/IndianOcean";
import { HomeTest } from "./pages/Main/HomeTest/HomeTest";
import { AzimuthTest } from "./pages/Categoryes/Azimuth/AzimuthTest/AzimuthTest";
import { Africa } from "./pages/Categoryes/Africa/Africa/Africa";
import { AzimuthIssues } from "./pages/Categoryes/Azimuth/AzimuthIssues/AzimuthIssues";
import { AntarcticaTest } from "./pages/Categoryes/Antarctica/AntarcticaTest/AntarcticaTest";
import { AtmosphereTest } from "./pages/Categoryes/Atmosphere/AtmosphereTest/AtmosphereTest";
import { NorthAmericaTest } from "./pages/Categoryes/NorthAmerica/NorthAmericaTest/NorthAmericaTest";
import { SouthAmericaTest } from "./pages/Categoryes/SouthAmerica/SouthAmericaTest/SouthAmericaTest";
import { PacificOceanTest } from "./pages/Categoryes/PacificOcean/PacificOceanTest/PacificOceanTest";
import { ArcticOceanTest } from "./pages/Categoryes/ArcticOcean/ArcticOceanTest/ArcticOceanTest";
import { IndianOceanTest } from "./pages/Categoryes/IndianOcean/IndianOceanTest/IndianOceanTest";
import { BiosphereTest } from "./pages/Categoryes/Biosphere/BiosphereTest/BiosphereTest";
import { UniverseTest } from "./pages/Categoryes/Universe/UniverseTest/UniverseTest";
import { AustraliaTest } from "./pages/Categoryes/Australia/AustraliaTest/AustraliaTest";
import { AtlanticOceanTest } from "./pages/Categoryes/AtlanticOcean/AtlanticOceanTest/AtlanticOceanTest";
import { SolarSystemTest } from "./pages/Categoryes/SolarSystem/SolarSystemTest/SolarSystemTest";

export const App = () => {
  return (
    <>
      <Header />

      <main className="site-main">
        <Routes>
          {/* MAIN PAGES  */}
          <Route path="/" element={<Home />} />
          <Route path="/test" element={<HomeTest />} />
          {/* <Route path="/questions" element={< />} /> */}
          {/* <Route path="/combine-answers" element={< />} /> */}
          {/* <Route path="/rivers" element={< />} /> */}
          {/* <Route path="/seas" element={< />} /> */}
          <Route path="/azimuth-issues" element={<AzimuthIssues />} />
          {/* <Route path="/australian-climate" element={< />} /> */}
          <Route path="/indian-ocean" element={<IndianOcean />} />

          {/* CATEGORYES PAGES  */}

          {/* AZIMUT  */}
          <Route path="/azimuth/test" element={<AzimuthTest />} />

          {/* AFRICA  */}
          <Route path="/africa" element={<Africa />} />

          {/* Antarctica */}
          <Route path="/antarctica/test" element={<AntarcticaTest />} />

          {/* Atmosphere */}
          <Route path="/atmosphere/test" element={<AtmosphereTest />} />

          {/* Euro Asia */}

          {/* North America */}
          <Route path="/north-america/test" element={<NorthAmericaTest />} />

          {/* South America */}
          <Route path="/south-america/test" element={<SouthAmericaTest />} />

          {/* Pacific Ocean */}
          <Route path="/pacific-ocean/test" element={<PacificOceanTest />} />

          {/* Arctic Ocean */}
          <Route path="/arctic-ocean/test" element={<ArcticOceanTest />} />

          {/* Indian Ocean */}
          <Route path="/indian-ocean/test" element={<IndianOceanTest />} />

          {/* Biosphere */}
          <Route path="/biosphere/test" element={<BiosphereTest />} />

          {/* Hydrosphere */}

          {/* Universe */}
          <Route path="/universe/test" element={<UniverseTest />} />

          {/* Oceans */}

          {/* Australia */}
          <Route path="/australia/test" element={<AustraliaTest />} />

          {/* Atlantic */}
          <Route path="/atlantic-ocean/test" element={<AtlanticOceanTest />} />

          {/* The ocean */}

          {/* Solar system */}
          <Route path="/solar-system/test" element={<SolarSystemTest />} />

          {/* DEPARTMENTS PAGES */}
        </Routes>
      </main>

      <Footer />
    </>
  );
};
