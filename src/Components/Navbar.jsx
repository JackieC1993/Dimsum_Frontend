import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav>
      <h1>
        <Link to="/dimsums">DimSums</Link>
      </h1>
      <Link to="/dimsums/new"> 
      <button> New DimSums</button>
      </Link>
      </nav>
  );
}