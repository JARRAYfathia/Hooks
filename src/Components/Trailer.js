import React from "react";
import { Card } from "react-bootstrap";

const Trailer = (props) => {
  return (
    <div className="Trailer">


      <Card className="text-center">
        <Card.Header> <h5>Watch The Trailer For: </h5> <h3> {props.Title} </h3></Card.Header>
        <hr/>
        <hr/>
        <Card.Body>
            <Card.Text>
            <h5> Link of the official trailer: </h5> 
            {props.Trailer}
            <hr />
            <h5>Description:</h5>
            <p>{props.Description}</p>
            <hr/>
            <h6> Rating : {props.Rating} </h6>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Trailer;

