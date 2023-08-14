import React from "react";
import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";
const Sectio2 = () => {
  let { id } = useParams();
  const { state } = useLocation();

  const [detail, setDetail] = useState({});

  const getData = async () => {
    const response = await axios.get(
      `https://64d61f3d754d3e0f1361a33b.mockapi.io/Furniture/hi/utinure/${id}`
    );

    if (response.status === 200) {
      setDetail(response.data);
    }
  };

  useEffect(() => {
    getData(id);
  }, [id]);
  console.log("hi", detail);
  return (
    <div className="w-full h-[820px] pl-[82px] pt-[35px] flex flex-row gap-[31px]">
      <div className="flex flex-col gap-[32px]">
        <div className="w-[76px] h-[80px] bg-[#F9F1E7] pt-[7px] pb-[18px] pl-[4px] pr-[3px] rounded-[10px]">
          <img
            src="image/sofa1.png"
            className="w-[83px] h-[55px]"
            alt="image"
          />
        </div>
        <div className="w-[76px] h-[80px] bg-[#F9F1E7] pt-[7px] pb-[18px] pl-[4px] pr-[3px] rounded-[10px]">
          <img
            src="image/sofa2.png"
            className="w-[83px] h-[55px]"
            alt="image"
          />
        </div>
        <div className="w-[76px] h-[80px] bg-[#F9F1E7] pt-[7px] pb-[18px] pl-[4px] pr-[3px] rounded-[10px]">
          <img
            src="image/sofa3.png"
            className="w-[83px] h-[55px]"
            alt="image"
          />
        </div>
        <div className="w-[76px] h-[80px] bg-[#F9F1E7] pt-[7px] pb-[18px] pl-[4px] pr-[3px] rounded-[10px]">
          <img
            src="image/sofa4.png"
            className="w-[83px] h-[55px]"
            alt="image"
          />
        </div>
      </div>

      {detail && (
        <img
          className="w-[500px] h-[423px] rounded-[10px] "
          src={detail.image}
          alt="image"
        />
      )}

      <div className="ml-[71px] flex flex-col ">
        {detail && (
          <h1 className="leading-[63px] text-[42px] text-black ">
            {detail.title}
          </h1>
        )}
        {detail && (
          <h5 className="leading-[36px] text-[24px] text-[#9F9F9F] ">
            {detail.price}
          </h5>
        )}

        <div className="flex flex-row gap-[6px]">
          <img src="image/start.png" className="w-[20px] h-[20px]" />
          <img src="image/start.png" className="w-[20px] h-[20px]" />
          <img src="image/start.png" className="w-[20px] h-[20px]" />
          <img src="image/start.png" className="w-[20px] h-[20px]" />
          <img src="image/half star.png" className="w-[20px] h-[20px]" />
          <div className="ml-[12px] w-[1px] h-[30px] bg-black"></div>
          <p className="ml-[16px] leading-[20px] text-[13px] text-[#9F9F9F]"></p>
        </div>
        <p className="mt-[15px] leading-[20px] text-[13px] text-black ">
          Setting the bar as one of the loudest speakers in its class, the
          Kilburn is a compact, stout-hearted hero with a well-balanced audio
          which boasts a clear midrange and extended highs for a sound.
        </p>
        <p className="mt-[22px] leading-[21px] text-[14px] text-[#9F9F9] "></p>
        <div className="mt-[12px] flex flex-row gap-[24px]">
          <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#F9F1E7] text-center rounded-[5px]">
            L
          </button>
          <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#F9F1E7] text-center  rounded-[5px]">
            XL
          </button>
          <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#F9F1E7] text-center  rounded-[5px]">
            XS
          </button>
        </div>
        <div className="mt-[18px] flex flex-row gap-[16px]">
          <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#816DFA] text-center  rounded-full"></button>
          <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-black text-center  rounded-full"></button>
          <button className="leading-[20px] text-[13px]  w-[30px] h-[30px] bg-[#B88E2F] text-center  rounded-full"></button>
        </div>
        <div className="mt-[32px] flex flex-row gap-[18px]">
          <div className="flex flex-row gap-[35px] pl-[15px]  w-[123px] h-[64px] border rounded-[15px] items-center">
            <p className="leading-[24px] text-[16px]">-</p>
            <p className="leading-[24px] text-[16px]">1</p>
            <p className="leading-[24px] text-[16px]">+</p>
          </div>
          <div className=" pl-[48px]  w-[215px] h-[64px] border rounded-[15px]  rounded-[15px]">
            <p className="leading-[30px] mt-[17px] text-[20px]">Add To Cart</p>
          </div>
          <div className="flex flex-row gap-[10px] pl-[47px]  w-[215px] h-[64px] border rounded-[15px] items-center">
            <p className="leading-[30px] text-[20px]">+</p>
            <p className="leading-[30px] text-[20px]">Compare</p>
          </div>
        </div>
        <div className="w-[605px] h-[1px] bg-[#D9D9D9] mt-[60px]"></div>
        <div className="mt-[41px] flex flex-row gap-[16px]">
          <div className="flex flex-col gap-[12px]">
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">SKU</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">
              Category
            </p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">Tags</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">Share</p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">:</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">:</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">:</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">:</p>
          </div>
          <div className="flex flex-col gap-[12px]">
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">SS001</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">Sofas</p>
            <p className=" leading-[24px] text-[16px] text-[#9F9F9F]">
              Sofa, Chair, Home, Shop
            </p>
            <div className=" flex flex-row gap-[25px]">
              <img
                src="image/facebook-fill.png"
                className="w-[20px] h-[20px]"
              />
              <img
                src="image/linkedin-box-fill.png"
                className="w-[20px] h-[20px]"
              />
              <img
                src="image/twitter-circle-filled.png"
                className="w-[20px] h-[20px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Sectio2;
