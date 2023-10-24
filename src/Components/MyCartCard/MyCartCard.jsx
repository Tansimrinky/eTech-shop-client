import Swal from "sweetalert2";
import { useState } from "react";
import NoData from "../NoData/NoData";

const MyCartCard = ({ product }) => {
  const { _id, img, name, brandName } = product || {};
  const [products, setItems] = useState();
  console.log(product);
  const handleDelete = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`https://et-ech-shop-server-side-34smdum6q-tansimrinky.vercel.app/mycart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your file has been deleted.", "success");
              const remaining = products.filter(product => product._id !== _id)
              console.log(remaining)
              setItems(remaining)
            }
          });
      }
    });
  };

  return (
    <div>
      {product ? (
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure className="px-10 pt-10">
            <img src={img} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">{name}</h2>
            <p>{brandName}</p>
            <div className="card-actions">
              <button
                onClick={() => handleDelete(_id)}
                className="btn btn-primary"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      ) : (
        <NoData></NoData>
      )}
    </div>
  );
};

export default MyCartCard;
