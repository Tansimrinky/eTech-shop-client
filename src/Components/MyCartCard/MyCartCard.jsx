import {useState} from 'react'

const MyCartCard = ({ product }) => {

  const { img, _id, name, brandName } = product|| {};
  console.log(product);
  return (
    <div>
 <div className="card w-96 bg-base-100 shadow-xl">
        <figure className="px-10 pt-10">
          <img
            src={img}
            alt="Shoes"
            className="rounded-xl"
          />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{brandName}</p>
          <div className="card-actions">
            <button className="btn btn-primary">Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCartCard;
