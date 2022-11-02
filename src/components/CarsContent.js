import { BigWrapper } from "./styles/CarsContent.styled";
import { Image } from "./styles/CarsContent.styled";
import { TextWrapper } from "./styles/CarsContent.styled";
import { ImageWrapper } from "./styles/CarsContent.styled";

const Cars = ({ item: { id, title, body, image } }) => {
  return (
    <BigWrapper layout={id % 2 === 0 && "row-reverse"} data-aos="zoom-out-up">
      <TextWrapper>
        <h2
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          {title}
        </h2>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="300"
          data-aos-offset="0"
        >
          {body}
        </p>
      </TextWrapper>

      <ImageWrapper>
        <Image src={require(`./images/${image}`)} alt="" />
      </ImageWrapper>
    </BigWrapper>
  );
};

export default Cars;
