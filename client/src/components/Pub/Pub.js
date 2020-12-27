import { Button } from "react-bootstrap";
import React from "react";
import { Link } from "react-router-dom";

import "./Pub.css";
import SingelPub from "../SingelPub";

const Pub = ({pub}) => {
  return (
    <div className="all">
      <div className="content-wrapper">
        <div className="news-card">
          <a href="/" className="news-card__card-link" />
          <img src={pub.photo} alt="" className="news-card__image" />
          <div className="news-card__text-wrapper">
            <h2 className="news-card__title">{pub.titre}</h2>
            <div className="news-card__post-date">{pub.date}</div>
            <div className="news-card__details-wrapper">
              
              <h3 className="news-card__prix">{pub.prix}</h3>
              {/* <Link to="/SingelPub" component={SingelPub}>
          <Button variant="primary">More Details...</Button>
        </Link> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pub;
