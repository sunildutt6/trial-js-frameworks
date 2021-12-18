import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import Button from "react-bootstrap/Button";
import { useToggle } from "../../hooks/useToggle";

const StyleDiv = styled.div`
  .card {
    margin: 1.5rem 0;
  }
  .card-title {
    margin: 0.5rem 0;
    text-align: center;
  }
  .card-image {
    margin-bottom: 1rem;
  }
`;

function HomeItems({ id, name, status, image }) {
  const [isFavourite, setIsFavourite] = useToggle();
  return (
    <Col>
      <StyleDiv>
        <Card style={{ width: "15rem" }} className="card">
          <NavLink to={`detail/${id}`}>
            <Card.Title className="card-title">{name.toUpperCase()}</Card.Title>
          </NavLink>
          <Card.Body>
            <Card.Img src={image} className="card-image" />
            <Button variant="secondary" onClick={setIsFavourite}>
              {isFavourite ? "Remove" : "Add"}
            </Button>
          </Card.Body>
        </Card>
      </StyleDiv>
    </Col>
  );
}

HomeItems.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  status: PropTypes.string,
  image: PropTypes.string,
};

export default HomeItems;
