import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyleDiv = styled.div`
  .card {
    margin: 1rem;
    padding: 1rem;
  }

  .card-title {
    text-decoration: none;
    &:before {
      content: "Title: ";
    }
  }
`;

function HomeItems({
  id,
  name,
  tagline,
  first_brewed,
  image_url,
  brewers_tips,
  description,
}) {
  return (
    <Col>
      <NavLink to={`detail/${id}`}>
        <StyleDiv>
          <Card style={{ width: "15rem" }} className="card">
            <Card.Img
              variant="top"
              src={image_url}
              width={250}
              height={500}
              className="mb-3"
            />
            <Card.Body>
              <Card.Title className="card-title">
                {name.substring(0, 10).toUpperCase()}
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
  tagline: PropTypes.string,
  brewers_tips: PropTypes.string,
  first_brewed: PropTypes.string,
  description: PropTypes.string,
  image_url: PropTypes.string.isRequired,
};

export default HomeItems;
