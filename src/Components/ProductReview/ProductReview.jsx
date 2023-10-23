const ProductReview = () => {
  return (
    <div>
      <h2 className=" text-3xl font-bold text-center mb-6">Product Review</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-center border-x-2">
        <div className="box border p-6">
          <div className="avatar">
            <div className="w-24 rounded-full ">
              <img src="https://i.ibb.co/m9F8SYM/download-1.jpg" />
            </div>
          </div>
          <p className="text-xl text-slate-600 font-bold">name: Andrew Robert</p>
          <p className=" text-slate-600 font-bold"> Product: Samsung Galaxy S21</p>
          <p className=" text-slate-600 font-medium">"Wow, the Samsung Galaxy S21 is a game-changer! The camera quality is exceptional, and the phone's performance is lightning-fast. It's sleek and stylish, and I can't believe how long the battery lasts. This is hands down the best smartphone I've ever owned!"</p>
        </div>
        <div className="box border p-6">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/bdhCxNX/download.jpg" />
            </div>
          </div>
          <p className="text-xl text-slate-600 font-bold">name: Rose Charlet</p>
          <p className=" text-slate-600 font-bold">Product: MacBook Pro 13"</p>
          <p className=" text-slate-600 font-medium">"I'm blown away by the MacBook Pro 13". The speed and reliability are unbeatable, and the Retina display is stunning. Whether I'm working on design projects or multitasking with ease, this laptop never lets me down. The build quality is top-notch, and it's a joy to use."</p>
        </div>
        <div className="box border p-6">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src="https://i.ibb.co/FWMCYG4/download-3.jpg" />
            </div>
          </div>
          <p className="text-xl text-slate-600 font-bold">name: Amit Shaha</p>
          <p className=" text-slate-600 font-bold">Product: Sony WH-1000XM4 Wireless Headphones</p>
          <p className=" text-slate-600 font-medium">"These headphones are a music lover's dream! The sound quality is mind-blowing, and the noise-cancellation is on another level. They're incredibly comfortable to wear for hours, making long flights or work sessions a breeze. Sony has truly outdone themselves with the WH-1000XM4."</p>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
