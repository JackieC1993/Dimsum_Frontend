import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function DimSumsReviewForm({ reviewDetails, handleSubmit, toggleView, children }) {
  let { id } = useParams();

  const [dimSumsReview, setDimSumsReview] = useState({
    reviewer: "",
    title: "",
    content: "",
    rating: "",
    dimsum_id: id,
  });

  const handleTextChange = (event) => {
    setDimSumsReview({ ...dimSumsReview, [event.target.id]: event.target.value });
  };

  useEffect(() => {
    if (reviewDetails) {
      setDimSumsReview(reviewDetails);
    }
  }, [id, reviewDetails]);

  const onSubmit = (event) => {
    event.preventDefault();
    handleSubmit(dimSumsReview);
    if (reviewDetails) {
      toggleView();
    }
    setDimSumsReview({
      reviewer: "",
      title: "",
      content: "",
      rating: "",
      dimsums_id: id,
    });
  };

  return (
    <div className="Edit">
      {children}
      <form onSubmit={onSubmit}>
        <label htmlFor="reviewer">Name:</label>
        <input
          id="reviewer"
          value={dimSumsReview.reviewer}
          type="text"
          onChange={handleTextChange}
          placeholder="Your name"
          required
        />
        <label htmlFor="title">Title:</label>
        <input
          id="title"
          type="text"
          required
          value={dimSumsReview.title}
          onChange={handleTextChange}
        />
        <label htmlFor="rating">Rating:</label>
        <input
          id="rating"
          type="number"
          name="rating"
          min="0"
          max="5"
          step="1"
          required
          placeholder="Please enter value between 0 and 5"
          value={dimSumsReview.rating}
          onChange={handleTextChange}
        />
        <label htmlFor="content">Review:</label>
        <textarea
          id="content"
          type="text"
          name="content"
          value={dimSumsReview.content}
          placeholder="What do you think..."
          onChange={handleTextChange}
        />

        <br />

        <input type="submit" />
      </form>
    </div>
  );
}

export default DimSumsReviewForm;
