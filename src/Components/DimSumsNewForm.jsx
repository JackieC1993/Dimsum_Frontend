import { useState } from "react";
import { useNavigate } from "react-router-dom";

const API = import.meta.env.VITE_REACT_API_URL;

function DimSumNewForm() {
   const navigate = useNavigate();
  const [dimSum, setDimSum] = useState({
    name: "",
    price: 0,
    ingredient: "",
    description: "",
    quantity: 0,
    savory:false,
    size: "",
  });

  // Add a dimsum. Redirect to the index view.
  const addDimSum = () => {
    fetch(`${API}/dimsums`, { 
      method: "POST",
      body: JSON.stringify(dimSum),
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(response => response.json())
      .then((data) => {
        setDimSum(data); 
       navigate(`/dimsums`)
  })
      .catch((error) => console.error("catch", error));
    };

  const handleTextChange = (event) => {
    setDimSum({ ...dimSum, [event.target.id]: event.target.value });
  };

  const handleCheckboxChange = () => {
    setDimSum({ ...dimSum, savory: !dimSum.savory });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addDimSum();
  };

  return (
    <div className="New">
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          value={dimSum.name}
          type="text"
          onChange={handleTextChange}
          placeholder=""
          required
        />
        <label htmlFor="price">Price:</label>
        <input
          id="price"
          type="number"
          min = "0"
          step = "0.01"
          value={dimSum.price}
          placeholder= ""
          required
          onChange={handleTextChange}
        />
        <label htmlFor="ingredient">Ingredient:</label>
        <input
          id="ingredient"
          type="text"
          value={dimSum.ingredient}
          onChange={handleTextChange}
          placeholder=""
          required
        />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          type="text"
          value={dimSum.description}
          onChange={handleTextChange}
          placeholder=""
        />
        <label htmlFor="quantity">Quantity:</label>
        <input
          id="quantity"
          type="number"
          min="0"
          value={dimSum.quantity}
          onChange={handleTextChange}
          required
        />
        <label htmlFor="savory">Savory:</label>
        <input
          id="savory"
          type="checkbox"
          onChange={handleCheckboxChange}
          checked={dimSum.savory}
        />
        <label htmlFor="size">Size:</label>
        <input
          id="size"
          type="text"
          value={dimSum.size}
          onChange={handleTextChange}
          placeholder=""
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
}

export default DimSumNewForm;
