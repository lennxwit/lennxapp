import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Image, Container } from "react-bootstrap";

import ProductCarousel from "../components/ProductCarousel";
import Meta from "../components/Meta";

import image from "../images/logo1.jpeg";

const HomeScreen = () => {
  const match = useParams();

  const keyword = match.keyword;

  const pageNumber = match.pageNumber || 1;

  const dispatch = useDispatch();

  return (
    <Container>
      <Row className='justify-content-md-center'>
        <Col xs={12} sm={4} md={9}>
          <h4>Seguridad Integrada</h4>
          <Image src={image} style={{ width: "100%", height: "100%" }} />
        </Col>
      </Row>
    </Container>
  );
};

export default HomeScreen;
