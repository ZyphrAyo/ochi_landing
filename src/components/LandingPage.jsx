import React from 'react';
import { FaArrowUpLong } from "react-icons/fa6";
const LandingPage = () => {
  return (
    <div className='w-full h-screen bg-zinc-900 pt-1'>
      <div className='textstructure mt-60 px-20'>
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => (
          <div className='masker' key={index}>
            <div className='w-fit flex items '>
              {index===1 && (<div className='mr-[0.5vw] rounded-md w-[6.5vw] relative top-[1vw] h-[4.22vw] bg-red-500'> </div>)}
            <h1 className='uppercase text-[6vw] leading-[5.5vw] tracking-tighter font-["Founders Grotesk X-Condensed"] font-bold'>
              {item}
            </h1>
            </div>
          </div>
        ))}
      </div>
      <div className='border-t-[2px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20 text-md'>
        {["For Public and Private Companies", "From the First Pitch to the Last"].map((item, index) => (
          <p key={index} className='text-sm font-light tracking-tight leading-none'>
            {item}
          </p>
        ))}
        <div className='start flex items-center gap-5'>
            <div className='font-light uppercase text-md px-4 py-2 border-[1px] border-zinc-400 rounded-full'>Start A Project</div>
            <div className='w-10 h-10 flex items-center justify-center border-[1px] border-zinc-400 rounded-full'>
                <span className='rotate-[45deg]'>
                <FaArrowUpLong/>
                </span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;