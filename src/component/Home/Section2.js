import React from "react";
const Section2 = () => {
  return (
    <div className="px-[131px] pt-[30px] flex flex-col w-full  bg-white text-center gap-2 ">
      <h5 className="leading-[48px] text-[32px] text-black">
        Browse The Range
      </h5>
      <p className="leading-[30px] text-[20px] text-gray-500 mb-[15px]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
      <div className="grid grid-cols-3 gap-[5px]">
        <div className="flex flex-col gap-4">
          <img className="h-[520px] rounded-md" src="image/image 106.png"></img>
          <p className="leading-[36px] text-[24px]">Dining</p>
        </div>
        <div className="flex flex-col gap-4">
          <img className="h-[520px] rounded-md" src="image/image 100.png"></img>
          <p className="leading-[36px] text-[24px]">Living</p>
        </div>
        <div className="flex flex-col gap-4">
          <img className="h-[520px] rounded-md" src="image/image 101.png"></img>
          <p className="leading-[36px] text-[24px]">Bedroom</p>
        </div>
      </div>
    </div>
  );
};
export default Section2;
