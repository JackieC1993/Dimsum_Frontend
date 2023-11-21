import { Link } from "react-router-dom";

function DimSum({ dimsum }) {
  return (
    <tr>
      <td>
        {dimsum.savory ? (
          <span>⭐️</span>
        ) : (
          <span>&nbsp; &nbsp; &nbsp;</span>
        )}
      </td>
      <td style={{ cursor: "alias" }}>
        <a href={dimsum.url} target="_blank" rel="noreferrer">
          {dimsum.name}
        </a>
      </td>
      <td>
        <Link to={`/dimsums/${dimsum.id}`}>✏️</Link>
      </td>
    </tr>
  );
}

export default DimSum;