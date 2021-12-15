import Heading from "../../components/layout/Heading";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/api";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import HomeItems from "./HomeItems";

const Home = () => {
  const [cartoon, setCartoons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(function () {
    async function getData() {
      try {
        const response = await axios.get(API_URL);
        console.log(response.data.results);
        setCartoons(response.data.results);
      } catch (error) {
        setError(error.toString());
      } finally {
        setLoading(false);
      }
    }
    getData();
  }, []);

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <Container>
      <Heading title="Home-Page" />
      <Row>
        {cartoon.map(function (cartoon) {
          const { id, name, status, image } = cartoon;
          return (
            <HomeItems
              key={id}
              id={id}
              name={name}
              status={status}
              image={image}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Home;
