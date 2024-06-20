import React, { Component } from "react";

function NewsItem(props) {
    let {title,description,imageUrl,newsUrl,publishedAt,source}=props;

    return (
      <div>
        <div className="card mx-3">
          <p className="card-text p-1" style={{position:"absolute",top:"0",left:"0",borderRadius:"5px",background:"red",color:"white"}}>{source}</p>
          <img src={imageUrl} className="card-img-top" alt="..." />
          <h5 className="card-title p-4">{title}...</h5>
          <p className="card-text p-1">Date: {publishedAt}</p>
          <p className="card-text p-2">
            {description}...
          </p>
          <div className="card-body">
            <a href={newsUrl} className="btn btn-sm btn-dark">
             Read more
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
