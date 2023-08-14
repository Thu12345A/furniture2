import React from "react";
const Header = () => {
  return (
    <div className="w-full h-[100px] bg-white pl-[54px] ">
      <div className="flex flex-row  gap-[158px]  ">
        <div className="flex flex-row gap-[5px] items-center h-[100px]">
          <img src="image/logo.png " className="w-[50px] h-[32px]"></img>
          <img src="image/logoHeader.png" className="w-[130px] h-[41px]"></img>
        </div>
        <div className="flex flex-row gap-[75px] ml-[108px] items-center h-[100px]">
          <a
            href=""
            className="leading-[24px] text-[16px] text-black font-sans"
          >
            Home
          </a>
          <a
            href=""
            className="leading-[24px] text-[16px] text-black font-sans"
          >
            Shop
          </a>
          <a
            href=""
            className="leading-[24px] text-[16px] text-black font-sans"
          >
            About
          </a>
          <a
            href=""
            className="leading-[24px] text-[16px] text-black font-sans"
          >
            Contact
          </a>
        </div>

        <div className="flex flex-row gap-[45px] items-center h-[100px] ">
          <img
            src="image/mdi_account-alert-outline.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            src="image/akar-icons_search.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            src="image/akar-icons_heart.png"
            className="w-[28px] h-[28px] "
          ></img>
          <img
            src="image/ant-design_shopping-cart-outlined.png"
            className="w-[28px] h-[28px] "
          ></img>
        </div>
      </div>
    </div>
  );
};
export default Header;
