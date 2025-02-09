import React from 'react'

function Hero() {
  return (
    <div>
      <div className="first-section flex flex-col md:flex-row justify-center md:justify-evenly items-center md:items-start pt-[32px] px-[20px] md:px-[54px] gap-[20px] md:gap-[57px]" >
      <div className="section1-part1 h-auto md:h-[360px] w-full md:w-[640px] rounded-[10px] flex flex-col justify-between"> 
        <h1 className="text-[32px] font-semibold w-[272px] text-[#fff] pl-[21px] pt-[20px] tracking-tighter  h-[96px]">The Best Platform for Car Rental  </h1>
        <p className="w-[272px] font-medium pl-[21px]  tracking-tighter text-[#fff] mt-[31px] h-[49px]">Ease of doing a car rental safely and reliably. Of course at a low price.</p>
        <button className="h-[44px] w-[120px] bg-[#3563E9] rounded-[4px] text-[#fff] ml-[21px] mt-[18px]">Rental Car</button>
        <div className="imagecar1 w-full md:w-[406px]  h-[116px] ml-0  md:ml-[137px]"></div>
      </div>
      <div className="section1-part2 h-auto md:h-[360px] w-full md:w-[640px] rounded-[10px] flex flex-col justify-between">
      <h1 className="text-[32px] font-semibold w-[272px] text-[#fff] pl-[21px] pt-[20px] tracking-tighter h-[96px]">Easy way to rent a car at a low price  </h1>
        <p className="w-[272px] font-medium pl-[21px]  tracking-tighter text-[#fff] mt-[31px] h-[49px]">Providing cheap car rental services and safe and comfortable facilities.</p>
        <button className="h-[44px] w-[120px] bg-[#54A6FF] rounded-[4px] text-[#fff] ml-[21px] mt-[18px]">Rental Car</button>
        <div className="imagecar2 w-auto md:w-[340px] h-[108px] ml-0 md:ml-[137px]"></div>
      </div>
    </div> 
    </div>
  )
}
  
export default Hero