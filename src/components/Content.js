import { CardWrapper } from "./styles/Content.styled";
import { Image } from "./styles/Content.styled";
import { TextWrapper } from "./styles/Content.styled";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <CardWrapper layout={id % 2 === 0 && "row-reverse"} data-aos="zoom-out-up">
      <TextWrapper>
        <h2
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="50"
          data-aos-offset="0"
        >
          {title}
        </h2>
        <p
          data-aos="fade-zoom-in"
          data-aos-easing="ease-in-back"
          data-aos-delay="100"
          data-aos-offset="0"
        >
          {body}
        </p>
      </TextWrapper>

      <Image src={require(`./images/${image}`)} alt="" />
    </CardWrapper>
  );
};

export default Card;
