import React from "react";
import { Card, Col, Container, Image, Row } from "react-bootstrap";
import yarn from "./Yarn.jpg";
import threeD from "./ThreeD.jpg";
import fabric from "./Fabric.jpg";

function Categories() {
  return (
    <Container>
      <Card>
        <Row>
          <Col xs={6} md={4}>
            <Image src={yarn} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={threeD} thumbnail />
          </Col>
          <Col xs={6} md={4}>
            <Image src={fabric} thumbnail />
          </Col>
        </Row>
      </Card>
    </Container>
  )
}

export default Categories;