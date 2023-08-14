import React from "react";
const Section1 = () => {
  return (
    <div className="w-full bg-[url('image/background.png')] h-[700px] relative ">
      <div className="mt-[153px] ml-[700px] flex flex-col gap-[4px] bg-[#FFF3E3] pl-[41px] pr-[43px] pb-[37px] absolute w-[643px] h-[443px]">
        <h6 className="leading-[24px] text-[16px] text-black mt-[62px]">
          NEW ARRIVAL
        </h6>
        <h1 className=" leading-[65px] text-[52px] text-amber-600">
          DISCOVER OUR NEW COLLECTION
        </h1>
        <p className="leading-24px text-18px text-black mt-[13px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper mattis.
        </p>
        <button className="w-[222px] h-[74px] items-center justify-center mt-[42px] bg-amber-600">
          BUY NOW
        </button>
      </div>
    </div>
  );
};
export default Section1;
