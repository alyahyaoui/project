import React from "react";
import { useSelector} from "react-redux";
import "./Pub.css";

const Pub = () => {
  const pub = useSelector((state) => state.pubReducer.pub);
  
  return(
  <div className="content-wrapper">
    <div className="news-card">
      <a href="/" className="news-card__card-link" />
      <img src="" alt="" className="news-card__image" />
      <div className="news-card__text-wrapper">
        <h2 className="news-card__title">"el.titre"</h2>
        <div className="news-card__post-date">"el.date"</div>
        <div className="news-card__details-wrapper">
          <p className="news-card__excerpt">"el.description"</p>
          <h3 className="news-card__prix">"el.prix"</h3>
          <a href="/" className="news-card__read-more">
            Read more <i className="fas" />
          </a>
        </div>
      </div>
    </div>
  </div>);
};

export default Pub;
