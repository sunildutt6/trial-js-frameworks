import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleDiv = styled.div`
  .card {
    margin: 0.5rem;
    padding: 0.5rem;
  }
`;

function HomeItems({ id, name, status, image }) {
  return (
    <Col>
      <NavLink to={`detail/${id}`}>
        <StyleDiv>
          <Card style={{ width: "15rem" }} className="card">
            <Card.Img
              variant="top"
              src={image}
              width={250}
              height={250}
              className="mb-3"
            />
            <Card.Body>
              <Card.Title className="card-title">
                {name.toUpperCase()}
              </Card.Title>
            </Card.Body>
          </Card>
        </StyleDiv>
      </NavLink>
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
