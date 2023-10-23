
import Navbar from "../../Components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import MyCartCard from "../../Components/MyCartCard/MyCartCard";
import NoData from "../../Components/NoData/NoData";

const MyCart = () => {
    const { user} = useContext(AuthContext)

  const myProduct = useLoaderData();
  console.log(myProduct);

  const email = user.email;
  console.log(email)

  const filteredProduct = myProduct.filter(obj => obj.email === email)
  console.log(filteredProduct)


  return (
    <div>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
      { filteredProduct.length > 0 ? (
        filteredProduct.map(product => <MyCartCard key={product._id} product={product}></MyCartCard>)) : (<NoData></NoData>)
        
     }
      </div>
    </div>
  );
};

export default MyCart;
