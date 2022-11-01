import { Container } from "./components/styles/Container.styled";
import "./components/styles/App.css";
import Header from "./components/Header";
import Card from "./components/Content";
import content from "./components/data/content";
import Footer from "./components/Footer";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import { useEffect } from "react";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Header />

      <Container>
        {content.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </Container>
      <Footer />
    </>
  );
}

export default App;
