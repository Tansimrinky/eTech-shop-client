import { Link } from "react-router-dom";


const Brands = ({ brand }) => {
  const { brand_name, brand_image } = brand || {};
  console.log(brand)



   const handleBrands =  () => { fetch("http://localhost:5000/brands" , {
      method: 'POST',
      headers: {
        'content-type' : 'application/json'
      },
      body: JSON.stringify(brand)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data)
    })
  }


 


  return (
    <div onClick={handleBrands}>
         <Link to={`/brands/${brand_name}`}>
         <div className="card w-96 h-96 bg-base-100 shadow-xl">
        <figure>
          <img
            src={brand_image}
            alt="Shoes"
            className="h-80 w-96"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
            {brand_name}
          </h2>
        </div>
      </div>
         </Link>
    </div>
  );
};

export default Brands;
