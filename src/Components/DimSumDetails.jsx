import { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import DimSumsReviews from "./DimSumReviews";


const API = import.meta.env.VITE_REACT_API_URL;

function DimSumDetails() {
  const [dimsums, setDimSums] = useState({});
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`${API}/dimsums/${id}/reviews`)
      .then((response) => response.json())
      .then((responseJSON) => {
        console.log(responseJSON)
        setDimSums(responseJSON)})
      .catch((error) => console.log(error));
  }, [id, API]);


  const handleDelete = () => {
    deleteDimSum();
  };
  const deleteDimSum = () => {
    fetch(`${API}/dimsums/${id}`, {
      method: "DELETE",
    })
      .then(() => navigate(`/dimsums`))
      .catch((error) => console.error(error));
  };
  return (
    <article>
      <h3>
        {dimsums.is_savory ? <span>⭐️</span> : null} {dimsums.name}
        
      </h3>
        <span>
          {dimsums.price}
        </span>
        <br/>
        <span>
          {dimsums.quanity}
        </span>
        <br/>
        <span>
          {dimsums.ingredients}
        </span>
        <br/>
        <span>
          {dimsums.size}
        </span>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <p>{dimsums.description}</p>
      <div className="showNavigation">
        <div>
          <Link to={`/dimsums`}>
            <button>Back</button>
          </Link>
        </div>
        <div>
          <Link to={`/dimsums/${id}/edit`}>
            <button>Edit</button>
          </Link>
        </div>
        <div>
          <button onClick={handleDelete}>Delete</button>
        </div>
        <DimSumsReviews />
      </div>
    </article>
  );
}

export default DimSumDetails;
