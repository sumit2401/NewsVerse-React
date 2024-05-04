import React from "react";

import NoImage from "./images/noimage.jpg";
const NewsItem = (props) => {
  let { title, descriptiion, imageUrl, newsUrl, author, date, source } = props;
  return (
    <div className="my-3">
      <div className="card">
        <span
          className="position-absolute top-0    s translate-middle badge rounded-pill bg-danger"
          style={{ left: "90%", zIndex: "1" }}
        >
          {source}
        </span>
        {/*"!imageUrl"-- means not of............... !imageUrl?"https://www.livemint.com/lm-img/img/2023/07/27/600x338/Q1_results_today_Q1_results_2023_stock_market_news_1690429616377_1690429616779.jpg":imageUrl.. if the image is null then show this image otherwise show the available image */}
        <img
          src={!imageUrl ? NoImage : imageUrl}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{title} </h5>
          <p className="card-text">{descriptiion}...</p>
          <p className="card-text">
            <small className="text-body-secondary">
              By{" "}
              {!author
                ? "Unknown"
                : author && author === "Author Name"
                ? "Unknown"
                : author}{" "}
              on {new Date(date).toUTCString()}
            </small>
          </p>
          {/* new Date(date).toUTCString()---- used this functions to change the format of date. first creating the new object of the date variable, now we can use any get, set or to  request for changing the format of date... toUTCString means to universal time string  */}

          <a
            href={newsUrl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
