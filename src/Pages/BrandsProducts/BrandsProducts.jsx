import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import {useEffect , useState } from "react";
import Swal from "sweetalert2";
import BrandProductCard from "../BrandProductCard/BrandProductCard";



const BrandsProducts = () => {
    const [products, setProducts] = useState(null)
    
    const { brands_name} = useParams()
    console.log(brands_name)
    const productsAll= useLoaderData();
    console.log(productsAll)
    
    useEffect(() => {
        const findProducts = productsAll.filter(product => product.brandName.toLowerCase() == brands_name.toLowerCase()) 
        if(findProducts){
            setProducts(findProducts)
            console.log(findProducts)
        } else {
            Swal.fire({
                icon: "error",
                text: "No Data Found"
              });
        }
        
    }, [brands_name, productsAll])
    console.log(products)

    return (
        <div>
            <Navbar></Navbar>
           <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
           {
            products !== null  ? ( products.map(product => <BrandProductCard  key={product._id}  product={product} ></BrandProductCard>)) : ( <p>No data Found</p> )
           }
        
           </div>
        </div>
    );
};

export default BrandsProducts;