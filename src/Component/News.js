import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import photo from "./photo.jpg";
import PropTypes from 'prop-types';

function News(props) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(6);
  const [totalResults, setTotalResults] = useState(0);

  useEffect(() => {
    document.title=`${props.category}-Newsify`
    fetchArticles();
  }, [page]); // Add page dependency to refetch articles when page changes

  const fetchArticles = async () => {
    try {
      let apiUrl = `https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=bd206d501f8846c4882cdc38da60ea82&page=${page}&pageSize=${pageSize}`;
      let response = await fetch(apiUrl);
      let parsedData = await response.json();

      if (parsedData.articles) {
        setArticles(parsedData.articles);
        setLoading(false);
        setTotalResults(parsedData.totalResults);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log("Error fetching data: ", error);
      setLoading(false);
    }
  };

  const handlePrev = () => {
    setPage(page - 1);
    window.scrollTo(0, 0);
  };

  const handleNext = () => {
    setPage(page + 1);
    window.scrollTo(0, 0);
  };

  const totalPages = Math.ceil(totalResults / pageSize);

  if (loading) {
    return (
      <div className="container my-3">
        <h2>Newsify - Top headlines</h2>
        <Spinner />
      </div>
    );
  }

  return (
    <div className="container my-3">
      <h1 className="text-center" style={{marginTop:"90px"}}>Newsify - Top {props.category} headlines</h1>
      <div className="row">
        {articles.map((elem, index) => (
          <div className="col-md-4 my-3" key={index}>
            <NewsItem
              source={elem.source.name}
              title={elem.title ? elem.title.slice(0, 60) : "No title available"}
              publishedAt={elem.publishedAt.slice(0,10)}
              description={elem.description ? elem.description.slice(0, 80) : "No description available"}
              imageUrl={elem.urlToImage ? elem.urlToImage : photo}
              newsUrl={elem.url ? elem.url : ""}
            />
          </div>
        ))}
      </div>
      <div className="container d-flex justify-content-between">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-dark"
          onClick={handlePrev}
        >
          &laquo; Previous
        </button>
        <button
          type="button"
          disabled={page >= totalPages}
          className="btn btn-dark"
          onClick={handleNext}
        >
          Next &raquo;
        </button>
      </div>
    </div>
  );
}

News.propTypes = {
  category: PropTypes.string.isRequired
};

export default News;
