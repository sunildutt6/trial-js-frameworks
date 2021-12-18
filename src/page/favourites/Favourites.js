import Heading from "../../components/layout/Heading";
import Container from "react-bootstrap/Container";
import { getExistingFavs } from "../../hooks/useLocalStorage";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import styled from "styled-components";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";
import { CommonStyle, CommonStyleOne } from "../../styles/GlobalStyles";

const Style = styled.div`
  .card {
    ${CommonStyle};
    margin-right: 1rem;
  }
  .card-body {
    ${CommonStyleOne}
  }
  .heart {
    font-size: 1.5rem;
    color: black;
  }
`;

function Favourites({ id, name, image }) {
  const favourites = getExistingFavs();
  if (favourites.length === 0) {
    return (
      <Container>
        <h3>You don't have any favourites yet.</h3>
      </Container>
    );
  }
  return (
    <Container>
      <Heading title="Favourites" />
      <Style>
        <Row>
          {favourites.map(function (favourite) {
            const { name, image } = favourite;

            return (
              <Card className="card">
                <Card.Img src={image} />
                <Card.Body className="card-body">
                  <Card.Title>{name}</Card.Title>
                  <AiOutlineHeart className="heart" />
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </Style>
    </Container>
  );
}

export default Favourites;
