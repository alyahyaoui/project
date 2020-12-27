import React from "react";
import { Spinner } from "react-bootstrap";
import Pub from "../components/Pub/Pub";
const PubList = ({pubs,loadpub}) => {
  
  return (
    <div className="pub">
      {loadpub ? (
        <Spinner animation="border" variant="primary" />
      ) : pubs === null || pubs.length === 0 ? (
        <h2>Nothing to show !!</h2>
      ) : (
        pubs.map((el) => <Pub key={el._id} pub={el} />)
      )}
    </div>
  );
};

export default PubList;
