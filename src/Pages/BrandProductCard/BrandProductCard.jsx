

const BrandProductCard = ({ product }) => {
  console.log(product);
  const { BrandName, description, img, name, price, rating, types } =
  product || {};

  return (
    <div>

      {
        product ? (<div className="card w-[500px] h-[700px] bg-base-100 shadow-xl my-10">
        <figure>
          <img
            src={img}
            alt="Shoes"
            className="h-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">NEW</div>
          </h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div>
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>) :  ( <p>No data Found</p> )
      }
    </div>
  );
};

export default BrandProductCard;
