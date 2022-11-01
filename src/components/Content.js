import { CardWrapper } from "./styles/Content.styled";
import { Image } from "./styles/Content.styled";
import { TextWrapper } from "./styles/Content.styled";

const Card = ({ item: { id, title, body, image } }) => {
  return (
    <CardWrapper layout={id % 2 === 0 && "row-reverse"} data-aos="zoom-out-up">
      <TextWrapper>
        <h2>{title}</h2>
        <p>{body}</p>
      </TextWrapper>

      <Image src={require(`./images/${image}`)} alt="" />
    </CardWrapper>
  );
};

export default Card;
