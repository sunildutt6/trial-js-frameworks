import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../constants/api";
import { useParams, useHistory } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import moment from "moment";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import styled from "styled-components";

const Style = styled.div`
  .card {
    background: var(--secondary);
    color: var(--black);
  }
  .card-body {
    box-shadow: 0 3px 3px grey;
  }
`;

function Detail() {
  const [cartoon, setCartoon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  let history = useHistory();
  const { id } = useParams();
  if (!id) {
    history.pushState("/");
  }

  const url = API_URL + "/" + id;

  useEffect(
    function () {
      async function getDetails() {
        try {
          const response = await axios.get(url);
          console.log(response.data);
          setCartoon(response.data);
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
    <Container>
      <Breadcrumb className="mt-3">
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item active>Details</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col md>
          <Image fluid src={cartoon.image} width="100%" />
        </Col>

        <Col>
          <Style>
            <Card>
              <Card.Body className="card-body">
                <Card.Title>
                  Character: {cartoon.name} ({cartoon.gender.substring(0, 1)})
                </Card.Title>

                <Card.Subtitle className="mb-2 ">
                  Status: {cartoon.status}
                </Card.Subtitle>
                <Card.Text>
                  Created: {moment(cartoon.created).format("MMMM Do YYYY")}
                </Card.Text>
              </Card.Body>
            </Card>
          </Style>
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
