import { AiFillStar } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const BrandProductCard = ({ product }) => {
  console.log(product);
  const {_id, BrandName, description, img, name, price, rating, types } =
    product || {};

  

  return (
    <div>
      {product ? (
        <div className="card md:w-[500px] h-[800px] bg-base-100 shadow-xl my-10">
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
             <Link to={(`/update/${_id}`)}> <button>
                <div className="badge badge-outline">Update </div>
              </button></Link>
            </div>
            </div>
          </div>
      ) : (
        <p>No data Found</p>
      )}
      
    </div>
  );
};
BrandProductCard.propTypes = {
  product : PropTypes.object
}

export default BrandProductCard;
