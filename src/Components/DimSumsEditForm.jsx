import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_REACT_API_URL;

function DimSumEditForm() {
  let { id } = useParams();
  const navigate = useNavigate();

  const [dimsum, setDimSums] = useState({
    name: "",
    category: "",
    description: "",
    is_favorite: false,
  });

  const handleTextChange = (event) => {
    setDimSums({ ...dimsum, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setDimSums({ ...dimsum, is_favorite: !dimsum.is_favorite });
  };

  // Update a dimsum. Redirect to show view
  const updateDimsum = () => {
    console.log(`${API}/dimsums/${id}`);

    fetch(`${API}/dimsums/${id}`, {
      method: "PUT",
      body: JSON.stringify(dimsum),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        navigate(`/dimsums/${id}`);
      })
      .catch((error) => console.error("catch", error));
  };

  // On page load, fill in the form with the dimsums data.
  useEffect(() => {
    fetch(`${API}/dimsums/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((responseJSON) => {
        setDimSums(responseJSON);
      })
      .catch((error) => console.error(error));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    updateDimsum();
  };

  return (
    <div className="Edit">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dimsum.name}
          type="text"
          onChange={handleTextChange}
          placeholder="Name of Website"
          required
        />
    
        <label htmlFor="category">Category:</label>
        <input
          id="category"
          type="text"
          name="category"
          value={dimsum.category}
          placeholder="yummy, super delicious, ..."
          onChange={handleTextChange}
        />
        <label htmlFor="isFavorite">Favorite:</label>
        <input
          id="isFavorite"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={dimsum.is_favorite}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          name="description"
          value={dimsum.description}
          onChange={handleTextChange}
          placeholder="Is this your favorite DimSums spot yet?"
        />
        <br />

        <input type="submit" />
      </form>
      <Link to={`/dimsum/${id}`}>
        <button>Nevermind!</button>
      </Link>
    </div>
  );
}

export default DimSumEditForm;