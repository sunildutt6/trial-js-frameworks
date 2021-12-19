import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import styled from "styled-components";
import { CommonStyle, CommonStyleOne } from "../../styles/GlobalStyles";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { saveFavs, getExistingFavs } from "../../hooks/useLocalStorage";
import { AiOutlineHeart } from "@react-icons/all-files/ai/AiOutlineHeart";

const StyleDiv = styled.div`
  .card {
    margin: 1.5rem 0;
    ${CommonStyle}
  }
  .card-body {
    background: transparent;
  }
  .card-title {
    ${CommonStyleOne}
  }

  .heart {
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--green);
  }
  .fa {
    color: var(--red);
  }
`;

function HomeItems({ id, name, status, image }) {
  const [isActive, setActive] = useState(false);

  const favourites = getExistingFavs();
  let cssClass = "far";

  const objectExist = favourites.find(function (fav) {
    return parseInt(fav.id) === id;
  });

  if (objectExist) {
    cssClass = "fa";
  }

  const handleToggle = () => {
    setActive(!isActive);

    const currentFavs = getExistingFavs();

    const productExists = currentFavs.find(function (fav) {
      return fav.id === id;
    });

    if (!productExists) {
      const product = { id, name, image, status };
      currentFavs.push(product);
      saveFavs(currentFavs);
    } else {
      const newFavs = currentFavs.filter((fav) => fav.id !== id);
      saveFavs(newFavs);
    }
  };

  return (
    <Col>
      <StyleDiv>
        <Card className="card">
          <NavLink to={`detail/${id}`}>
            <Card.Img src={image} className="card-image" />
          </NavLink>
          <Card.Body>
            <Card.Title className="card-title">
              {name.toUpperCase().substring(0, 6)}
              <AiOutlineHeart
                className={`isActive heart ${cssClass} ? "fa" : "far"}`}
                data-id={id}
                data-name={name}
                data-image={image}
                onClick={handleToggle}
              />
            </Card.Title>
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
