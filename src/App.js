import { Container } from "./components/styles/Container.styled";
import "./components/styles/App.css";
import Header from "./components/Header";
import Card from "./components/Content";
import content from "./components/data/content";
import Footer from "./components/Footer";

function App() {
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
