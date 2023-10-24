import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateProduct = () => {
    const product = useLoaderData()
    const { _id, img, name, brandName, description, price} =
    product || {};
    const handleUpdatePoducts = e => {
        e.preventDefault()
        const form = e.target;
        const img = form.img.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const types = form.types.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const updatedProduct = { img, name, brandName, types, price, description, rating}
        console.log(updatedProduct)
        fetch(`https://et-ech-shop-server-side-34smdum6q-tansimrinky.vercel.app/products/${_id}`,{
            method: 'PUT',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedProduct)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount >0){
                Swal.fire({
                    title: 'success!',
                    text: 'Product updated successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset() 
        })
    }
    return (
        <div>
             <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co/64xsbJf/pngtree-fashion-blue-pink-gradient-background-image-512696.jpg')",
        }}
        className="h-screen bg-cover "
      >
        <h2 className="text-3xl font-bold text-blue-800 text-center pt-10">Update :{name}</h2>

        <div >
            <form onSubmit={handleUpdatePoducts} className="card-body bg-blur flex-shrink-0 shadow-2xl mx-36">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 text-bold text-3xl">
                    Image of products
                  </span>
                </label>
                <input
                  type="url"
                  name="img"
                  id=""
                  required
                  className="input input-bordered border-bottom "
                  defaultValue={img}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 text-bold text-3xl">
                    Name of products
                  </span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="input input-bordered border-bottom "
                  defaultValue={name}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 text-bold text-3xl">
                    Name of Brand
                  </span>
                </label>
                <input
                  type="text"
                  name="brandName"
                  required
                  className="input input-bordered border-bottom "
                  defaultValue={brandName}
                />
              </div>
              <div className="form-control">
                <label className="label-text text-blue-800 text-bold text-3xl mb-6">
                  Type of products:
                </label>
                <select
                  name="types"
                  className="input input-bordered border-bottom"
                >
                  <option value="Phone" className="text-xl font-semibold">
                    Phone
                  </option>
                  <option value="Tablet" className="text-xl font-semibold">
                    Tablet
                  </option>
                  <option value="tv" className="text-xl font-semibold">
                    Television
                  </option>
                  <option value="camera" className="text-xl font-semibold">
                    Camera
                  </option>

                  <option value="smartwatch" className="text-xl font-semibold">
                    smartwatch
                  </option>
                  <option value="Computer" className="text-xl font-semibold">
                    Computer
                  </option>
                  <option className="text-xl font-semibold" value="Laptop">
                    Laptop
                  </option>
                  <option className="text-xl font-semibold" value="Headphone">
                    Headphone
                  </option>
                </select>
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 text-bold text-3xl">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  name="price"
                  required
                  className="input input-bordered border-bottom "
                  defaultValue={price}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-blue-800 text-bold text-3xl">
                    Short Description
                  </span>
                </label>
                <input
                  type="text"
                  name="description"
                  required
                  className="input input-bordered border-bottom "
                  defaultValue={description}
                />
              </div>
              <label
               
                className="label-text text-blue-800 text-bold text-3xl mb-6"
              >
                Rate this product:
              </label>
              <input
                type="number"
                name="rating"
                id="rating"
                min="1"
                max="5"
                className="input input-bordered border-bottom "
              />
              
              <input className="btn btn-block text-blue-800 font-bold " type="submit" value="Update Product" />
            </form>
         
        </div>
      </div>
    </div>
        
    );
};

export default UpdateProduct;