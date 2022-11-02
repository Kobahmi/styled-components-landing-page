import {
  Image,
  Wrapper1,
  Wrapper2,
  Wrapper3,
  Button,
  RedButton,
  BigWrapper,
  BigLogo,
  TextStyle,
} from "./styles/Header.styled";
import illustration1 from "../components/images/illustration-mockups.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <BigWrapper>
      <Wrapper1 data-aos="zoom-in">
        <BigLogo>
          <h1>Hubble</h1>
        </BigLogo>

        <Link to="/styled-components-landing-page/">
          <Button>
            <TextStyle>HOME</TextStyle>
          </Button>
        </Link>
      </Wrapper1>

      <Wrapper3 data-aos="zoom-in">
        <Wrapper2>
          <h1>Build The Community Your Fans Will Love</h1>
          <p>
            Huddle re-imagines the way we build communities. You have a voice,
            but so does your audience. Create connections with your users as you
            engage in genuine discussion.
          </p>

          <Link to="/cars/">
            <RedButton>
              <TextStyle>CLICK HERE TO SEE CARS</TextStyle>
            </RedButton>
          </Link>
        </Wrapper2>

        <Image src={illustration1} alt="" />
      </Wrapper3>
    </BigWrapper>
  );
}
