import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/api";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";

function Detail() {
  const [drinks, setDrinks] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id } = useParams();

  const url = API_URL + "/" + id;

  useEffect(
    function () {
      async function getDetails() {
        try {
          const response = await axios.get(url);
          console.log(response.data);
          setDrinks(response.data);
        } catch (error) {
          setError(error.toString());
        } finally {
          setLoading(false);
        }
      }
      getDetails();
    },
    [url]
  );

  if (loading) {
    return <Spinner animation="border" variant="primary" />;
  }
  if (error) {
    return <Container>{error}</Container>;
  }

  return (
    <div>
      <p>{drinks.name}</p>
    </div>
  );
}

export default Detail;
