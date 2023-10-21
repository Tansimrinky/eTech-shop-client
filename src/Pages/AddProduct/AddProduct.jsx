import Navbar from "../../Components/Navbar/Navbar";
import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const img = form.img.value;
        const name = form.name.value;
        const brandName = form.brandName.value;
        const types = form.types.value;
        const rating = form.rating.value;
        const price = form.price.value;
        const description = form.description.value;
        const newProduct = { img, name, brandName, types, price, description, rating}
        console.log(newProduct)
        // send data to the server
        fetch('http://localhost:5000/products',{
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(newProduct)

        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                Swal.fire({
                    title: 'success!',
                    text: 'Product Added successfully!',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            form.reset() 
        })
    }
  return (
    <div>
      <Navbar></Navbar>

      <div
        style={{
          backgroundImage:
            "url('https://i.ibb.co/64xsbJf/pngtree-fashion-blue-pink-gradient-background-image-512696.jpg')",
        }}
        className="h-screen bg-cover "
      >
        <h2 className="text-3xl font-bold text-blue-800 text-center pt-10">Add Products</h2>

        <div >
            <form onSubmit={handleAddProduct} className="card-body bg-blur flex-shrink-0 shadow-2xl mx-36">
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
              
              <input className="btn btn-block text-blue-800 font-bold " type="submit" value="Add Product" />
            </form>
         
        </div>
      </div>
    </div>
  );
};

{
  /* <input type="url" name="img" id="" />
<br />
<input type="text" name="name" />
<br />
<input type="text" name="brand_name" />
<br />
<label>Type of products:</label>
<select name="types">
  <option value="Phone">Phone</option>
  <option value="Computer">Computer</option>
  <option value="Laptop" selected>
    Laptop
  </option>
  <option value="Headphone" selected>
    Headphone
  </option>
 */
}

export default AddProduct;
