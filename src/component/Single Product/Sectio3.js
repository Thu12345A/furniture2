import React from "react";
const Sectio3 = () => {
  return (
    <div className="w-full h-[744px] pt-[48px] px-[99px] flex flex-col  border-t-2 ">
      <div className="flex flex-row gap-[52px] justify-center  ">
        <h1 className="leading-[36px] text-[24px] text-black">Description</h1>
        <p className="leading-[36px] text-[24px] text-[#9F9F9F]">
          Additional Information
        </p>
        <p className="leading-[36px] text-[24px] text-[#9F9F9F]">Reviews [5]</p>
      </div>
      <div className="w-[1026px] h-[48px] mt-[37px] ml-[108px]">
        {" "}
        <p className="leading-[24px] text-[16px] text-[#9F9F9F]  ">
          Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn
          portable active stereo speaker takes the unmistakable look and sound
          of Marshall, unplugs the chords, and takes the show on the road.
        </p>
      </div>
      <div className="w-[1026px] h-[96px] mt-[30px] ml-[108px]">
        <p className="leading-[24px] text-[16px] text-[#9F9F9F]  ">
          Weighing in under 7 pounds, the Kilburn is a lightweight piece of
          vintage styled engineering. Setting the bar as one of the loudest
          speakers in its class, the Kilburn is a compact, stout-hearted hero
          with a well-balanced audio which boasts a clear midrange and extended
          highs for a sound that is both articulate and pronounced. The analogue
          knobs allow you to fine tune the controls to your personal preferences
          while the guitar-influenced leather strap enables easy and stylish
          travel.
        </p>
      </div>

      <div className="flex flex-row gap-[20px] mt-[36px] ">
        <div className="w-[605px] h-[348px]  bg-[#F9F1E7] rounded-[10px]">
          <img
            src="image/Cloud sofa three seater + ottoman_1 1.png"
            className="w-[500px] h-[300px] ml-[51px]"
          />
        </div>
        <div className="w-[605px] h-[348px]  bg-[#F9F1E7] rounded-[10px]">
          <img
            src="image/Cloud sofa three seater + ottoman_1 1.png"
            className="w-[500px] h-[300px] ml-[51px] "
          />
        </div>
      </div>
    </div>
  );
};
export default Sectio3;
