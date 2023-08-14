import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const Sectio4 = () => {
  const [items, setItems] = useState([]);
  const getData = async () => {
    const response = await axios.get(
      "https://64d61f3d754d3e0f1361a33b.mockapi.io/Furniture/hi/utinure",
      {
        params: {
          filter: {
            order: ["id DESC"],
          },
        },
      }
    );
    if (response.status === 200) {
      console.log(response);
      setItems(response.data);
    }
  };

  useEffect(() => {
    getData();
  }, []);
  console.log("123", items);
  const hiItems = items.splice(4, 4);
  console.log("kết quả:", hiItems);
  return (
    <div className="w-full px-[100px] pt-[55px] flex flex-col gap-[26px] h-[777px] border-t-2">
      <h1 className="leading-[54px] text-[36px] text-black">
        Related Products
      </h1>

      <div className="grid grid-cols-4 gap-[32px] ">
        {items.map((item, index) => (
          <Link to={"/Single Product/" + item.id} state={item}>
            <div
              key={index}
              className="post-item flex-flex-col bg-[#F4F5F7] gap-[8px] w-[285px] h-[446px]"
            >
              <img className="w-[285px] h-[301px]" src={item.image} />
              <p className=" ml-[16px] mt-[8px] leading-[28.8px] text-[24px] text-black">
                {item.title}
              </p>
              <p className=" ml-[16px] leading-[24px] text-[16px] text-[#898989]">
                {item.description}
              </p>
              <p className=" ml-[16px] leading-[30px] text-[20px] text-black">
                {item.price}
              </p>
            </div>
          </Link>
        ))}
      </div>
      <button className="ml-[496px] mt-[18px] leading-[24px] text-[16px] mt-[32px] text-center w-[245px] h-[48px] text-amber-600 bg-stone-100 border border-orange-400">
        Show More
      </button>
    </div>
  );
};
export default Sectio4;
