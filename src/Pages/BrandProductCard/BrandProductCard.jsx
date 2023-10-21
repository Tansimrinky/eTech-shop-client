import { AiFillStar } from 'react-icons/ai';

const BrandProductCard = ({ product }) => {
  console.log(product);
  const { BrandName, description, img, name, price, rating, types } =
    product || {};

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
              <button>
                <div className="badge badge-outline">Fashion</div>
              </button>
              <button>
                <div className="badge badge-outline">Products</div>
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
