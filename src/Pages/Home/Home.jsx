

import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import Navbar from "../../Components/Navbar/Navbar";


const Home = () => {
  const brands = useLoaderData()
  console.log(brands)
 
  return (
    <div className="mx-auto max-w-[1500px]">
      <Navbar></Navbar>
      <h2 className="text-3xl font-bold text-center my-6">Explore Brands</h2>
      <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 justify-between my-10 ml-7 gap-16  ">
          {
            brands.map(brand => <Brands key={brand.id} brand={brand}></Brands>)
          }
      </div>
    </div>
  );
};

export default Home;
