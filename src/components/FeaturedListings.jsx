import ProductCard from "./ProductCard";

const FeaturedListings = () => {
<<<<<<< Updated upstream


    return (
        <section className="bg-[#26201A] w-screen">
            <div className='lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
                <div className="grid place-items-center">
                    <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-white my-4 font-titiliumweb text-center lg:text-left md:text-left">
                        Featured Listings
                    </h2>
                    <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[500] text-white  font-titiliumweb text-center lg:text-left md:text-left">
                        Recently listed NFTs tied to real-world assets.
                    </h2>

                </div>

                <div className="flex lg:flex-row md:flex-row flex-col justify-between my-10 flex-wrap">
                        <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
                            <img
                                src={featured1}
                                alt=""
                                className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                            />
                            <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-white">
                                Handcrafted Wooden Sculpture
                            </h3>
                            <p className=" text-white lg:text-[14px] md:text-[14px] text-[10px] ">
                                Ghana, West Africa
                            </p>
                            <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
                                0.5 ETH <span>10 units </span>
                            </p>
                            <p className="flex justify-between text-[#54BE73]  lg:text-[14px] md:text-[14px] text-[10px]">
                                Price  <span>Quantity </span>
                            </p>

                        </div>
                        <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
                            <img
                                src={featured2}
                                alt=""
                                className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                            />
                            <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-white">
                                Vintage Ceramic Vase
                            </h3>
                            <p className="text-white lg:text-[14px] md:text-[14px] text-[10px]">
                                Florence, Italy
                            </p>
                            <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
                                1 ETH <span>3 units </span>
                            </p>
                            <p className="flex justify-between text-[#54BE73]  lg:text-[14px] md:text-[14px] text-[10px]">
                                Price  <span>Quantity </span>
                            </p>

                        </div>
                        <div className="lg:w-[32%] md:w-[32%] w-[100%] p-4  border-white rounded-xl border shadow-lg mb-4">
                            <img
                                src={featured3}
                                alt=""
                                className="w-[100%] h-[237px] object-cover object-center rounded-lg"
                            />
                            <h3 className="font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]  text-white">
                                Artisan Silk Wall Hanging
                            </h3>
                            <p className="text-white lg:text-[14px] md:text-[14px] text-[10px]">
                                Istanbul, Turkey
                            </p>
                            <p className="flex justify-between text-white font-bold mt-4 lg:text-[18px] md:text-[18px] text-[16px]">
                                0.8 ETH <span>5 units  </span>
                            </p>
                            <p className="flex justify-between text-[#54BE73]  lg:text-[14px] md:text-[14px] text-[10px]">
                                Price  <span>Quantity </span>
                            </p>

                        </div>
                    </div>

            </div>
        </section>
    );
=======
  return (
    <section className="bg-[#26201A]">
      <div className="lg:w-[90%] md:w-[90%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
        <div className="grid place-items-center">
          <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[700] text-white my-4 font-titiliumweb text-center lg:text-left md:text-left">
            Featured Listings
          </h2>
          <h2 className="lg:text-[32px] md:text-[32px] text-[24px] font-[500] text-white  font-titiliumweb text-center lg:text-left md:text-left">
            Recently listed NFTs tied to real-world assets.
          </h2>
        </div>
        <ProductCard />
      </div>
    </section>
  );
>>>>>>> Stashed changes
};
export default FeaturedListings;
