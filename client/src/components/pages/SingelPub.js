import React, { useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getpubById } from "../../JS/actions/pub";

const SingelPub = () => {
  const dispatch = useDispatch();
  const pub = useSelector((state) => state.pubReducer.pub);
  useEffect(() => {
    dispatch(getpubById());
  }, [dispatch]);
  console.log(pub);
  return (
    <div>
      <div className="C">
        <div className="singel" style={{ width: "30%", margin: "2%" }}>
          <img
            className="singelIm"
            variant="top"
            src={pub.photo}
            alt="photos"
          />
          <div>
            <h2>{pub.titre}</h2>
            <h4>{pub.description}</h4>
            <h3>{pub.prix}</h3>
            <h6>{pub.date}</h6>
            <Link to="/">
              <Button variant="primary">GoBack Home</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingelPub;
