import React from 'react'
import { Card , Button} from 'react-bootstrap';
import { Link } from "react-router-dom";
const SingelPub = ({match,pubs}) => {
    const singlePub = pubs.find((el) => match.params.id === el.id);
    return (
        <div>
            <div className="singleC">
      <Card className="Card" style={{ width: "30%", margin: "2%" }}>
        <Card.Img className="CardIm" variant="top" src={singlePub.photo} />
        <Card.Body>
          <Card.Title>{singlePub.titre}</Card.Title>
          <Card.Text>{singlePub.description}</Card.Text>
          <Card.Text>{singlePub.prix}</Card.Text>
          <Card.Text>
          {singlePub.date}
          </Card.Text>
          <Link to="/">
            <Button
              variant="primary"
            >
              Go Back Home
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
        </div>
    )
}

export default SingelPub
