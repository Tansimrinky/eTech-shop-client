import Navbar from "../Navbar/Navbar";
import { AiFillStar } from 'react-icons/ai';
import { FaCartPlus } from 'react-icons/fa';
import { useLoaderData,  useParams} from "react-router-dom";
import {useContext} from 'react'
import { AuthContext } from "../../../Provider/AuthProvider";
import { Navigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const DetailsCard = ({ detail }) => {
    const { user } = useContext(AuthContext)
   
    
  const { img, name, brandName, description, price, rating, types } =
    detail || {};
    const { _id } = useParams()
    console.log( _id)
    const productsAll = useLoaderData()
    console.log(productsAll)

    const handleMyCart = () => {
        if(!user){
            <Navigate state={location.pathname} to="/login"></Navigate>
        }
    
   
        const productInCart = productsAll.filter(product => product._id == _id)
        const productObj = productInCart[0]
        const newProperty = 'email';
        const propertyValue = `${user.email}`
        productObj[newProperty] = propertyValue
        console.log(productObj)
        fetch('http://localhost:5000/mycart', {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(productObj)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Product added to the cart',
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
        
    }
  return (
    <div>
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold text-center">
        Detailed information of {name}
      </h2>
      <div className="card card-side  w-[800px] bg-base-100 shadow-xl mt-10">
        <figure>
          <img
            src={img}
            alt="Movie"
            className="h-cover"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Product Name: {name}</h2>
          <p className="text-slate-600">Type of product: {types}</p>
          <p className="text-slate-600">brand Name: {brandName}</p>
          
          <div>
          <div className='flex items-center'>
              <div className=' text-orange-600'><AiFillStar></AiFillStar></div>
              <div>{rating}/5</div>
            </div>
          <p className="text-slate-600">Description: {description}</p>
          <p className="text-slate-600">price: ${price}</p>
          </div>
          <div className="card-actions justify-end">
            <button onClick={handleMyCart} className="btn ">Add to cart <FaCartPlus></FaCartPlus> </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
