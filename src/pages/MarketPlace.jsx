
import otherBackground from '../assets/otherBackground.svg';
import featured1 from '../assets/featured1.svg';
import featured2 from '../assets/featured2.svg';
import featured3 from '../assets/featured3.svg';
import Ellipse from '../assets/Ellipse.svg';

const MarketPlace = () => {


    return (
        <main className="bg-[#231D16] w-screen">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
                Marketplace
            </h1>
            <div className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover mt-4"
                style={{
                    backgroundImage: `url(${otherBackground})`,
                    backgroundSize: "100%",
                }}>
                <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
                    Tokenizing Real-World Assets for
                    <br />Global Access and Trust
                </h1>
                <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-titiliumweb">
                    Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs on a
                    <br />Secure, Transparent Blockchain Marketplace
                </p>
            </div>
            <section className='bg-[#231D16] bg-no-repeat py-8 px-2'
            style={{
                backgroundImage: `url(${Ellipse})`,
                backgroundSize: "30% ",
                backgroundPosition: "left top",
            }}>
                <div className='lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
                    <div className="border border-white rounded-3xl w-[50%] flex justify-between">
                        <div className="grid place-content-center text-[13px] p-4"><p className="text-white text-center">Input Product tracking code</p></div>
                        <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white">
                            Track
                        </button>
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


        </main>
    );
};

export default MarketPlace;
