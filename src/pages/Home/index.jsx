import React, { useEffect, useState } from "react";
import Book from '../../components/Book/index'
import { Col, Container, Row } from "react-bootstrap";
import axios from "axios";
import PopularHotel from "../../components/popularHotel";
import Offers from "../../components/offers/Offers";
function Home() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch data
    axios
      .get("https://ayarabia.github.io/jsonData/friends.json")
      .then(function (response) {
        // handle success
        setData(response.data);
        //console.log(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
  }, []);
  return (
    <Container>
      <Book />
      <Offers />
        <Row>
        <Offers/>
        {data.map((item) => {
          return (
            <Col >
              <PopularHotel item={item} />
              </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Home;
