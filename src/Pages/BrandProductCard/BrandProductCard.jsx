import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const BrandProductCard = ({ product }) => {
  console.log(product);
  const {_id, BrandName, description, img, name, price, rating, types } =
    product || {};

  //  const handleDetails = (_id) => {
  //   fetch(`http://localhost:5000/products/${_id}`, {
  //     method: 'GET',
  //     headers: {
  //       'content-type' : 'application/json'
  //     },
  //     body: JSON.stringify(_id)
  //   })
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data)
  //   })
  //  } 

  return (
    <div>
      {product ? (
        <div className="card w-[500px] h-[800px] bg-base-100 shadow-xl my-10">
          <figure>
            <img src={img} alt="Shoes" className="h-96" />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-5xl font-bold">{name}</h2>
            <h2 className="card-title text-3xl font-bold">Brand name:{BrandName}</h2>
            <h2 className="text-3xl font-bold">
              <span>Type of products:</span> {types}
            </h2>
            <p className="text-slate-600 font-bold">{description}</p>
            <p className="text-slate-600 font-bold">${price}</p>
            <div className='flex items-center'>
              <div className=' text-orange-600'><AiFillStar></AiFillStar></div>
              <div>{rating}/5</div>
            </div>
            <div className="card-actions justify-end">
              <Link to={`/details/${_id}`}><button>
                <div className="badge badge-outline">Details</div>
              </button></Link>
              <button>
                <div className="badge badge-outline">Update </div>
              </button>
            </div>
            </div>
          </div>
      ) : (
        <p>No data Found</p>
      )}
    </div>
  );
};

export default BrandProductCard;
