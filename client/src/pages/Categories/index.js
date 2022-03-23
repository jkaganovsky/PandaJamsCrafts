import React from "react";
import { Card, Button, Col, Container, Image } from "react-bootstrap";
import yarn from "./Yarn.jpg";
import threeD from "./ThreeD.jpg";
import fabric from "./Fabric.jpg";

function Categories() {
  return (
    <Container class="background">
      <Card>
        <Col xs={6} md={4}>
          <Button>
            <Image
              class="imageBtn"
              src={yarn}
              fluid
              thumbnail
            />
          </Button>
        </Col>
        <Col xs={6} md={4}>
          <Button>
            <Image
              class="imageBtn"
              src={threeD}
              fluid
              thumbnail
            />
          </Button>
        </Col>
        <Col xs={6} md={4}>
          <Button>
            <Image
              class="imageBtn"
              src={fabric}
              fluid
              thumbnail
            />
            </Button>
        </Col>
      </Card>
    </Container>
  )
}

export default Categories;