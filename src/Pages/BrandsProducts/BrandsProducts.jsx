import { useLoaderData, useParams } from "react-router-dom";
import Navbar from "../../Components/Navbar/Navbar";
import {useEffect , useState } from "react";
import BrandProductCard from "../BrandProductCard/BrandProductCard";
import Slider from "../../Components/Slider/Slider";
import NoData from "../../Components/NoData/NoData";
import Footer from "../../Components/Footer/Footer";



const BrandsProducts = () => {
    const [products, setProducts] = useState([])
    
    const { brands_name} = useParams()
    console.log(brands_name)
    const productsAll= useLoaderData();
    console.log(productsAll)
    
    useEffect(() => {
        const findProducts = productsAll.filter(product => product.brandName.toLowerCase() == brands_name.toLowerCase()) 
        if(findProducts){
            setProducts(findProducts)
            console.log(findProducts)
        }
        
    }, [brands_name, productsAll])
    console.log(products)

    return (
        <div className="">
            <Navbar ></Navbar>
            <Slider></Slider>
            <h2 className="text-center text-3xl font-bold" > Brand collection : {brands_name}</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 justify-between gap-10">
           {
            products.length > 0 ? ( products.map(product => <BrandProductCard  key={product._id}  product={product} ></BrandProductCard>)) : ( <NoData></NoData> )
           }
        
           </div>
           <Footer></Footer>
        </div>
    );
};

export default BrandsProducts;