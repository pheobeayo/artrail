
import featured1 from '../assets/featured1.svg';
import featured2 from '../assets/featured2.svg';
import featured3 from '../assets/featured3.svg';
import { Link } from 'react-router-dom';

const ProductDetails = () => {
    return (
        <main className="bg-[#231D16]">
            <h1 className=" text-white lg:text-[28px] md:text-[28px] text-[20px] font-serif font-bold flex gap-6 lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-6 px-4">
             <Link to='/marketplace'> Back </Link><span>  Details Page</span>
            </h1>

            <section className='lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex lg:flex-row md:flex-row flex-col justify-between'>
                <div className='lg:w-[35%] md:w-[35%] w-[100%] border bg-[#231D16]/90  rounded-2xl '>
                    <img src={featured1} alt="" className='w-[100%] p-4 object-cover object-center rounded-2xl' />
                </div>
                <div className='text-white lg:w-[60%] md:w-[60%] w-[100%] p-4 border bg-[#231D16]/90 border-white rounded-2xl'>
                    <h3 className='font-bold mt-4 lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb'>Handcrafted Wooden Sculpture</h3>
                    <p className='font-titiliumweb mb-4 font-normal text-white lg:text-[18px] md:text-[18px] text-[14px]'>  Ghana, West Africa</p>
                    <p className='font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]'>  Description</p>
                    <p className='font-titiliumweb mb-4 font-normal text-white text-justify lg:text-[18px] md:text-[18px] text-[14px]'>  A detailed, hand-carved sculpture made from sustainable oak. The piece represents traditional
                        craftsmanship passed down through generations in West Africa.</p>
                    <p className='flex gap-12 my-4 font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]'>0.5 ETH <span>10 units </span></p>
                    <p className='flex gap-24 my-4 text-[#54BE73] lg:text-[18px] md:text-[18px] text-[14px]'>Price <span>Quantity</span></p>
                    <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-full my-4 rounded-3xl">
                        Purchase
                    </button>
                </div>
            </section>



            <section className='lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0'>
            <h3 className='font-bold text-white mt-4 lg:mt-4 md:mt-4 my-2 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb '>More Listings</h3> 
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
            </section>
        </main >
    );
};

export default ProductDetails;
