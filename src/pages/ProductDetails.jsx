import React, { useState, useEffect } from 'react'
import featured1 from "../assets/featured1.svg";
import CallApi from "../api/CallApi";
import { Link, useParams } from "react-router-dom";
import { toast } from 'react-toastify';
import { formatUnits } from 'ethers';

const ProductDetails = () => {
<<<<<<< Updated upstream
    return (
        <main className="bg-[#231D16] w-screen">
            <h1 className=" text-white lg:text-[28px] md:text-[28px] text-[20px] font-serif font-bold flex gap-6 lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-6 px-4">
             <Link to='/marketplace'> Back </Link><span>  Details Page</span>
            </h1>
=======
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const { id } = useParams()
  
    useEffect(() => {
      const fetchData = async () => {
        try {
            console.log("Calling API with params:", {
                contractAddress: import.meta.env.VITE_CONTRACT_ADDRESS,
                method: 'getProductDetails',
                contractSpecsId: 12237,
                params: id
            });
          const result = await CallApi('getProductDetails', import.meta.env.VITE_CONTRACT_ADDRESS, 12237, [Number(id)]);
          setData(result.flat());
        } catch (err) {
          setError(err);
        }
      };
  
      fetchData();
    }, []);
  
    // if (error) return toast.error(`Error: ${error.message}`)
    // if (!data) return <div>Loading...</div>;
    console.log(data)
>>>>>>> Stashed changes

  return (
    <main className="bg-[#231D16]">
      <h1 className=" text-white lg:text-[28px] md:text-[28px] text-[20px] font-serif font-bold flex gap-6 lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-6 px-4">
        <Link to="/marketplace"> Back </Link>
        <span> Details Page</span>
      </h1>

      {data?.map((info) => (<section className="lg:w-[80%] md:w-[80%] w-[100%] mx-auto py-12 px-4 lg:px-0 md:px-0 flex lg:flex-row md:flex-row flex-col justify-between">
        <div className="lg:w-[35%] md:w-[35%] w-[100%] border bg-[#231D16]/90  rounded-2xl ">
          <img
            src={info.productUri}
            alt=""
            className="w-[100%] p-4 object-cover object-center rounded-2xl"
          />
        </div>
        <div className="text-white lg:w-[60%] md:w-[60%] w-[100%] p-4 border bg-[#231D16]/90 border-white rounded-2xl">
          <h3 className="font-bold mt-4 lg:mt-0 md:mt-0 lg:text-[24px] md:text-[24px] text-[20px] capitalise font-titiliumweb">
            {info.productName}
          </h3>
          <p className="font-titiliumweb mb-4 font-normal text-white lg:text-[18px] md:text-[18px] text-[14px]">
            {" "}
           {info.productOrigin}
          </p>
          <p className="font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]">
            {" "}
            Description
          </p>
          <p className="font-titiliumweb mb-4 font-normal text-white text-justify lg:text-[18px] md:text-[18px] text-[14px]">
            {" "}
            {info.productDescription}
          </p>
          <p className="flex gap-12 my-4 font-titiliumweb mb-4 font-bold text-white lg:text-[24px] md:text-[24px] text-[20px]">
          {formatUnits(info.productPrice.toString(), 'ether')} ETH <span>{info.quantity}units </span>
          </p>
          <p className="flex gap-24 my-4 text-[#54BE73] lg:text-[18px] md:text-[18px] text-[14px]">
            Price <span>Quantity</span>
          </p>
          <button className="bg-[#54BE73] text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-full my-1 rounded-3xl">
            Purchase
          </button>
          <button className="bg-transparent text-white py-2 px-4  lg:text-[20px] md:text-[20px] font-bold text-[16px] w-full my-4 rounded-3xl border border-white">
            Chat Seller
          </button>
        </div>
      </section>))}
    </main>
  );
};

export default ProductDetails;
