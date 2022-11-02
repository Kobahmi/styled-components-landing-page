import { Container } from "./components/styles/Container.styled";
import "./components/styles/App.css";
import Header from "./components/Header";
import Card from "./components/Content";
import content from "./components/data/content";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import cars from "./components/data/cars";
import Cars from "./components/CarsContent";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route
          path="/styled-components-landing-page/"
          element={
            <Container>
              {content.map((item, index) => (
                <Card key={index} item={item} />
              ))}
            </Container>
          }
        />

        <Route
          path="/cars/"
          element={
            <Container>
              {cars.map((item, index) => (
                <Cars key={index} item={item} />
              ))}
            </Container>
          }
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;