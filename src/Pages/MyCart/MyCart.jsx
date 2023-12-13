import Navbar from "../../Components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import MyCartCard from "../../Components/MyCartCard/MyCartCard";

const MyCart = () => {
  const { user } = useContext(AuthContext);

  const myProduct = useLoaderData();
  console.log(myProduct);

  const email = user.email;
  console.log(email);

  const filteredProduct = myProduct.filter((obj) => obj.email === email);
  console.log(filteredProduct);

  const calculateTotal = (filteredProduct) => {
    const total = filteredProduct.reduce((acc, product) => {
      const productPrice = parseFloat(product.price.replace(",", "") || 0);
      return acc + productPrice;
    }, 0);

    const totalString = total.toFixed(2);

    return totalString;
  };

  return (
    <div>
      <Navbar></Navbar>
      <div className="flex">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ml-5 mb-10">
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <MyCartCard key={product._id} product={product}></MyCartCard>
            ))
          ) : (
            <>
              <p className="text-center text-3xl font-bold ">
                No items Added to cart
              </p>
            </>
          )}
        </div>
        <div className="border-4 p-5">
          <p>Total Added Items: {filteredProduct.length}</p>
          <p>Total amount: ${calculateTotal(filteredProduct)}</p>
          <button className="btn bg-blue-600 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
