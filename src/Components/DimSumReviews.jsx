
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DimSumsReviewForm from "./DimSumsReviewForm";

const API = import.meta.env.VITE_REACT_API_URL;

function DimSumsReviews() {
  const [reviews, setReviews] = useState([]);
  let { id } = useParams();

  const handleAdd = (newReview) => {
    fetch(`${API}/dimsums/${id}/reviews`, {
      method: "POST",
      body: JSON.stringify(newReview),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((responseJSON) => {
        setReviews([responseJSON, ...reviews]);
      })
      .catch((error) => console.error("catch", error));
  };

  
  const handleDelete = (id) => {
    fetch(`${API}/dimsums/${id}/reviews/${id}`, {
      method: "DELETE",
    })
      .then(
        (response) => {
          const copyReviewArray = [...reviews];
          const indexDeletedReview = copyReviewArray.findIndex((review) => {
            return review.id === id;
          });
          copyReviewArray.splice(indexDeletedReview, 1);
          setReviews(copyReviewArray);
        },
        (error) => console.error(error)
      )
      .catch((error) => console.warn("catch", error));
  };

const handleEdit = (updatedReview) => {
  fetch(`${API}/dimsums/${id}/reviews/${updatedReview.id}`, {
    method: "PUT",
    body: JSON.stringify(updatedReview),
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((responseJSON) => {
      const copyReviewArray = [...reviews];
      const indexUpdatedReview = copyReviewArray.findIndex((review) => {
        return review.id === updatedReview.id;
      });
      copyReviewArray[indexUpdatedReview] = responseJSON;
      setReviews(copyReviewArray);
    })
    .catch((error) => console.error(error));
};

  useEffect(() => {
    fetch(`${API}/dimsums/${id}/reviews`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response)
        // setDimSums(response.allReviews);
      });
  }, [id, API]);
  // replace the return statement with this code
  return (
    <section className="Reviews">
      <h2>Reviews</h2>
      <DimSumsReviewForm handleSubmit={handleAdd}>
        <h3>Add a New Review</h3>
      </DimSumsReviewForm>
      {reviews.map((review) => (
        <Review key=
        {review.id} 
        review={review} 
        dimsums = {dimsums}
        handleSubmit={handleEdit} 
        handleDelete={handleDelete}/>
      ))}
    </section>
  );
}

export default DimSumsReviews;