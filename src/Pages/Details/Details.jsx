
import { Navbar } from "@material-tailwind/react";
import { useState, useEffect} from "react";
import { useLoaderData, useParams } from "react-router-dom";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const Details = () => {

    const [details, setDetails] = useState([])
    const {_id} = useParams()
    console.log(_id)

    const productDetailAll = useLoaderData()
    console.log(productDetailAll)

    useEffect(() => {
        const findProductDetails = productDetailAll.filter(productDetails => productDetails._id == _id)
        if(findProductDetails){
            setDetails(findProductDetails)
            console.log(findProductDetails)
        }
    }, [_id, productDetailAll])
    console.log(details)

   
    return (
        <div>
           {
            details.map(detail => <DetailsCard key={detail._id} detail={detail} ></DetailsCard>)
           }

        </div>
    );
};

export default Details;