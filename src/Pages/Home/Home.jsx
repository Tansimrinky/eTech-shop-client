
import { useLoaderData } from "react-router-dom";
import Brands from "../../Components/Brands/Brands";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import Banner from "../../Components/Banner/Banner";
import ProductReview from "../../Components/ProductReview/ProductReview";
import Services from "../../Components/Services/Services";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const brands = useLoaderData();
  const filteredBrands = brands.filter((brand) =>
    brand.brand_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="mx-auto max-w-[1500px]">
      <Navbar />
      <Banner />
    
      <h2 className="text-3xl font-bold text-center my-6">Explore Brands</h2>
      <div className="flex justify-center m-5">
        <input
          className="input input-bordered w-full max-w-xs relative"
          type="text"
          placeholder="Search by brand name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="absolute ml-[285px] mt-4"><FaSearch /></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between my-10 ml-7 gap-16">
        {filteredBrands.map((brand) => (
          <Brands key={brand.id} brand={brand} />
        ))}
      </div>
      <ProductReview />
      <Services />
      <Footer />
    </div>
  );
};

export default Home;
