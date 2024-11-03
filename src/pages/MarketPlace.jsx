import otherBackground from "../assets/otherBackground.svg";
import Ellipse from "../assets/Ellipse.svg";
import ProductCard from '../components/ProductCard';

const MarketPlace = () => {
  return (
    <main className="bg-[#231D16]">
      <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
        Marketplace
      </h1>

<<<<<<< Updated upstream

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
=======
      <div
        className="bg-[#231D16] lg:w-[80%] md:w-[80%] w-[80%] mx-auto text-center p-8 lg:px-0 md:px-0 border border-white rounded-2xl bg-cover mt-4"
        style={{
          backgroundImage: `url(${otherBackground})`,
          backgroundSize: "100%",
        }}
      >
        <h1 className=" bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[38px] md:text-[38px] text-[30px] font-titiliumweb font-[700] my-4">
          Tokenizing Real-World Assets for
          <br />
          Global Access and Trust
        </h1>
        <p className="text-white lg:text-[20px] md:text-[20px] text-[16px] text-center font-titiliumweb">
          Mint, Trade, and Track Authentic Art, Artifacts, and Crafts with NFTs
          on a
          <br />
          Secure, Transparent Blockchain Marketplace
        </p>
      </div>
      <section
        className="bg-[#231D16] bg-no-repeat py-8 px-2"
        style={{
          backgroundImage: `url(${Ellipse})`,
          backgroundSize: "30% ",
          backgroundPosition: "left top",
        }}
      >
        <div className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0">
          <div className="border border-white rounded-3xl w-[50%] flex justify-between">
            <div className="grid place-content-center text-[13px] p-4">
              <p className="text-white text-center">
                Input Product tracking code
              </p>
>>>>>>> Stashed changes
            </div>
            <button className="bg-[#33302E] w-[30%] mt-1 mr-1 text-white mb-1 rounded-3xl p-4 border border-white">
              Track
            </button>
          </div>
          <ProductCard />
        </div>
      </section>
    </main>
  );
};

export default MarketPlace;
