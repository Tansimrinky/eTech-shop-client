import Navbar from "../../Components/Navbar/Navbar";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { useContext } from "react";
import MyCartCard from "../../Components/MyCartCard/MyCartCard";
import Swal from "sweetalert2";

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


  const handleBuy = () => {
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Purchase Confirm",
      showConfirmButton: false,
      timer: 1500
    });
    // Will implement payment option later
  }
  return (
    <div>
      <Navbar></Navbar>
      <div className="lg:flex gap-2">
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
        <div className="box border-4 shadow-xl p-5 text-slate-700 font-bold">
          <p className="mb-2">Total Added Items: {filteredProduct.length}</p>
          <p className="mb-2">Total amount: ${calculateTotal(filteredProduct)}</p>
          <hr className="mb-2" />
          <button onClick={handleBuy} className="btn bg-blue-600 text-white">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
