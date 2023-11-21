import { useState, useEffect } from "react";

const API = import.meta.env.VITE_REACT_API_URL

function DimSum() {
  const [dimsum, setDimSum] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      fetch(`${API}/dimsums`)
        .then(res => res.json())
        .then(data => {
          setDimSum(data);
        })
        .catch(error => {
          console.log(error);
        });
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="DimSums">
        <section>
          <table>
            <thead>
              <tr>
                <th>Favorite</th>
                <th>See this Dimsums</th>
                <th>quantity</th>
              </tr>
            </thead>
            <tbody>
              {dimsum.map((dimsums, index) => (
                <tr key={index}>
                  <td>{dimsums.fav}</td>
                  <td><a href={`/dimsums/${dimsums.id}`}>{dimsums.name}</a></td>
                  <td>{dimsums.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      </div>
    </>
  );
}

export default DimSum;


// import { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import DimSumReview from "./DimSumReview";
// import DimSumsReviewForm from "./DimSumsReviewForm";
// import DimSumsReviews from "./DimSumReviews";


// const API = import.meta.env.VITE_REACT_API_URL;

// function dimsums() {
//   const [dimsumReviews, setDimSumsReview] = useState([]);
//   let { id } = useParams();

//   useEffect (()=>{
//     fetch (`${API}/dimsums`)
//     .then((response)=>{response.json()
//     .then((data) => {setDimSumsReview(data)
//     .catch ((error)=> console.error(error))
//     })})},[])
  
//   const handleAdd = (newDimSumReview) => {
//     fetch(`${API}/dimsums/${id}/reviews`, {
//       method: "POST",
//       body: JSON.stringify(newDimSumReview),
//       headers: {
//         "Content-Type": "application/json",
//       },
//     })
//       .then((response) => response.json())
//       .then((responseJSON) => {
//         setDimSumsReview([responseJSON, ...dimsumReviews]);
//       })
//       .catch((error) => console.error("catch", error));
//   };

  
//   const handleDelete = (id) => {
//     fetch(`${API}/dimsums/${id}/reviews/${id}`, {
//       method: "DELETE",
//     })
//       .then(
//         (response) => {
//           const copyDimSumReviewArray = [...reviews];
//           const indexDeletedReview = copyDimSumReviewArray.findIndex((review) => {
//             return review.id === id;
//           });
//           copyDimSumReviewArray.splice(indexDeletedReview, 1);
//           setDimSumsReviews(copyDimSumReviewArray);
//         },
//         (error) => console.error(error)
//       )
//       .catch((error) => console.warn("catch", error));
//   };

// const handleEdit = (updatedReview) => {
//   fetch(`${API}/dimsums/${id}/reviews/${updatedReview.id}`, {
//     method: "PUT",
//     body: JSON.stringify(updatedReview),
//     headers: {
//       "Content-Type": "application/json",
//     },
//   })
//     .then((response) => response.json())
//     .then((responseJSON) => {
//       const copyDimSumReviewArray = [...reviews];
//       const indexUpdatedReview = copyDimSumReviewArray.findIndex((review) => {
//         return review.id === updatedReview.id;
//       });
//       copyDimSumReviewArray[indexUpdatedReview] = responseJSON;
//       setReviews(copyDimSumReviewArray);
//     })
//     .catch((error) => console.error(error));
// };



//   useEffect(() => {
//     fetch(`${API}/dimsums/${id}/reviews`)
//       .then((response) => response.json())
//       .then((data) => {
//         setDimSumsReview(data);
//       });
//   }, [id]);
//   // replace the return statement with this code
//   return (
//     <section className="Reviews">
//       <h2> DimSum Reviews</h2>
//       <DimSumsReviewForm handleSubmit={handleAdd}>
//         <h3>Add a New Dimsum Review</h3>
//       </DimSumsReviewForm> 
//       { 
//         <div>{dimsumReviews.name}</div>
//       }  
//     </section>
//   );
// }

// export default dimsums;
