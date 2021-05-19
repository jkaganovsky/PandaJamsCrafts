import React from "react";
import { Jumbotron, Image } from "react-bootstrap";
import logo from "./LogoFace.jpg"

function Logo() {
  return (
    <Jumbotron className="text-center" fluid>
      <Image src={logo} rounded />
    </Jumbotron>
  )
}

export default Logo;