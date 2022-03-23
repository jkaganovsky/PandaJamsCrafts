import React from "react";
import Card from "react-bootstrap/Card";

function Footer(props) {
  return(
    <Card className="text-center">
      <Card.Footer className="text-muted footer">
        Copyright © {props.year} by Jailanie Kaganovsky
      </Card.Footer>
    </Card>
  )
};

export default Footer;