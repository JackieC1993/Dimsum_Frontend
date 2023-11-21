
import { useState } from "react";
import DimSumsNewForm from "./DimSumsNewForm";
import DimSum from "./DimSum";
import DimSumsReviews from "./DimSumReviews";
import DimSumNewForm from "./DimSumsNewForm";

function DimSumsReview({ dimSum, handleDelete, handleSubmit }) {
  const [viewEditForm, setEditForm] = useState(false);
  
  const toggleView = () => {
    setEditForm(!viewEditForm);
  };
  return (
    <div className="DimSumReview">
      {viewEditForm ? (
        <DimSumForm
          DimSumDetails={dimSum}
          toggleView={toggleView}
          handleSubmit={handleSubmit}
        />
      ) : (
        <div>
          <h4>
            {dimSum.name} <span>{dimSum.rating}</span>
          </h4>
          <h5>{dimSum.reviewer}</h5>
          <p>{dimSum.content}</p>
        </div>
      )}
      <div className="dimsum-actions">
        <button onClick={toggleView}>
          {viewEditForm ? "Cancel" : "Edit this review"}
        </button>
        <button onClick={() => handleDelete(review.id)}>delete</button>
      </div>
    </div>
  );
}

export default DimSumsReview;