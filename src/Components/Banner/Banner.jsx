const Banner = () => {
  return (
    <div className="  ">
      <div
        className="hero h-[500px]"
        style={{
          backgroundImage:
            "url(https://i.ibb.co/tphGhzP/images.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5 text-5xl font-bold">
              Be Wise , shop wise
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
