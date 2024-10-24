import Ellipse from '../assets/Ellipse.svg';
import otherBackground from '../assets/otherBackground.svg';


const ListProduct = () => {


    return (
        <main className="bg-[#231D16]">
            <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-white from-15% to-[#FFB054] to-90% lg:text-[24px] md:text-[24px] text-[20px] font-serif font-bold  text-center">
                LIST PRODUCTS
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
                }}
            >
                <div className='w-[50%] lg:mx-96 md:mx-96 mx-10 lg:px-10 md:px-10'>
                    <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                        Upload Image
                    </label>
                    <input
                        type="text"
                        placeholder='e.g., certificate design, event ticket, or award' className="bg-white border border-white text-white text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                    />
                    <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                        Product Name
                    </label>
                    <input
                        type="text"
                        placeholder="Enter your product name"
                        className="bg-white border border-white text-white text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                    />
                    <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                        Product description
                    </label>
                    <input
                        type="text"
                        placeholder="Include the type, material, and history of the product"
                        className="bg-white border border-white text-white text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                    />
                    <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                        Origin and location
                    </label>
                    <input
                        type="text"
                        placeholder="Country, region (e.g Nigeria, West Africa)"
                        className="bg-white border border-white text-white text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                    />
                    <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                        Quantity
                    </label>
                    <input
                        type="number"
                        placeholder="Quantity should be in units"
                        className="bg-white border border-white text-white text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                    />
                    <label className="block mt-4 mb-2 text-base font-bold text-white dark:text-white text-left">
                        Price
                    </label>
                    <input
                        type="text"
                        placeholder="Price per quantity (in cryptocurrency)"
                        className="bg-white border border-white text-white text-sm font-bold rounded-lg focus:ring-[#54BE73] focus:border-white block w-3/4 p-2.5 backdrop-blur-lg mb-4 outline-none"
                    />
                    <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-3/4 my-4 rounded-3xl">
                        Create
                    </button>
                </div>
            </section>


        </main>
    );
};

export default ListProduct;
