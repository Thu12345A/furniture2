import React from "react";
const Section5 = () => {
  return (
    <div className="w-full pt-[32px] flex flex-col gap-2 relative text-center pb-[32px] overflow-x-hidden">
      <h5 className="leading-[30px] text-[20px]">Share your setup with</h5>
      <h1 className="leading-[48px] text-[40px]">#FuniroFurniture</h1>

      <div className="flex flex-col= gap-4 mt-[27px] relative">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <img
              src="image/unos.png"
              className=" w-[274px] h-[382px] mt-[-50px] "
            />
            <img
              src="image/dos.png"
              className="w-[451px] h-[312px] ml-94px mt-[20px]"
            />
          </div>

          <div className="flex flex-row gap-4">
            <img src="image/tres.png" className="w-[381px] h-[323px]" />
            <img src="image/cuatro.png" className="w-[344px] h-[242px]" />
          </div>
        </div>
        <img
          src="image/cinco.png"
          className="w-[295px] h-[392px] mt-[86px]  "
        />
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-4">
            <img src="image/siete.png" className="w-[290px] h-[348px] " />
            <img
              src="image/seis.png"
              className=" w-[274px] h-[382px] mt-[-35px] "
            />
          </div>

          <div className="flex flex-row gap-4">
            <img src="image/ocho.png" className="w-[178px] h-[242px]" />
            <img src="image/nueve.png" className="w-[258px] h-[196px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section5;
