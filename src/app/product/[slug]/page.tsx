import { client } from "@/sanity/lib/client";
import Product from "@/type/product";
import { groq } from "next-sanity";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Link from "next/link";

interface ProductPageProps {
  params: { slug: string };
}

async function getProduct(slug: string): Promise<Product | null> {
  const result = await client.fetch(
    groq`*[_type == "car" && slug.current == $slug][0]{
      _id,
      name,
      image,
      pricePerDay,
      capacity,
      steering,
       seatingCapacity,
       fuelCapacity,
       transmission,
        type,
    }`,
    { slug }
  );
  console.log("Fetched product:", result); // Debugging output
  return result || null;
}


export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = params;

  const product = await getProduct(slug);

  if (!product) {
    return <div>No product found for this slug.</div>;
  }
  
  return (
        <div className='w-full bg-[#F6F7F9]'>
          <div className='flex '>
            <div className=" one w-[30%] hidden md:block">
            <nav className="bg-white shadow-lg h-[1600px] w-[360px] left-0 min-w-[240px] py-6 px-4 font-[sans-serif] overflow-auto">
          <ul>
            <li>
              <a href="javascript:void(0)"
                className="text-[#86878a] hover:text-blue-600 text-[15px] block ml-[32px]">
                TYPE
              </a>
            </li>
          </ul>
    
          <div className="mt-4  ml-[32px]">
            <div className="flex items-center">
            
            <input type="checkbox"  placeholder='hi' />
            <label className=" ml-4 text-[20px] space-x-0 text-[#4e5a6d]">Sport</label>
          </div>
          <div className="flex ">
            <input type="checkbox" placeholder='hi' className="w-4" />
            <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4">SUV</label>
          </div>
          <div className="flex">
            <input type="checkbox" placeholder='hi' className="w-4" />
            <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4 ">MPv</label>
           </div>
           <div className="flex">
             <input type="checkbox" placeholder='hi' className="w-4" />
             <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4 ">Sedan</label>
           </div>
           <div className="flex">
             <input type="checkbox" placeholder='hi' className="w-4" />
             <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4 ">Coupe</label>
           </div>
           <div className="flex">
             <input type="checkbox" placeholder='hi' className="w-4" />
             <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4 ">Hatchback</label>
           </div>
           </div>
    
    
           <ul>
             <li>
               <a href="javascript:void(0)"
                className="text-[#86878a] hover:text-blue-600 text-[15px] block ml-[32px] mt-[60px]">
                CAPACITY
              </a>
            </li>
          </ul>
    
          <div className="mt-4  ml-[32px]">
            <div className="flex items-center">
            <input type="checkbox" placeholder='hi'  />
            <label className=" ml-4 text-[20px] space-x-0 text-[#4e5a6d]">2 Person</label>
          </div>
          <div className="flex ">
            <input type="checkbox" placeholder='hi' className="w-4" />
            <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4">4 Person</label>
          </div>
          <div className="flex">
            <input type="checkbox" placeholder='hi'  className="w-4" />
            <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4 ">6 Person</label>
          </div>
          <div className="flex">
            <input type="checkbox" placeholder='hi' className="w-4" />
            <label className="mt-[10px] text-[20px] space-x-0  text-[#4e5a6d] ml-4 ">8 or More</label>
          </div>
          </div>
    
    
          <ul>
            <li>
              <a href="javascript:void(0)"
                className="text-[#86878a] hover:text-blue-600 text-[15px] block ml-[32px] mt-[60px]">
                CAPACITY
              </a>
            </li>
          </ul>
          <svg className='ml-[24px]' width="296" height="24" viewBox="0 0 296 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect y="6" width="296" height="12" rx="6" fill="#90A3BF"/>
    <rect y="6" width="220" height="12" rx="6" fill="#3563E9"/>
    <circle cx="220" cy="12" r="10" fill="#3563E9" stroke="white" stroke-width="4"/>
    </svg>
    
          
        </nav>
            </div>
            <div className="two w-[70%] flex ">
                <div className='-[35%]'>
            <div className="section1-part2  h-auto  mt-[10px] md:h-[360px] w-full md:w-[492px] rounded-[10px]"> 
            <h1 className=" text-[32px] font-semibold w-full md:w-[450px] text-[#fff] pl-[21px] pt-[20px] tracking-tighter ">Sports car with the best design and acceleration </h1>
            <p className="w-[272px] font-medium pl-[21px]  tracking-tighter text-[#fff] mt-[21px] h-[49px]">Safety and comfort while driving a futuristic and elegant sports car </p>
            {/* <button className="h-[44px] w-[120px] bg-[#3563E9] rounded-[4px] text-[#fff] ml-[21px] mt-[18px]">Rental Car</button> */}
            <div className=" w-full md:w-[406px] mt-4 h-[116px] ml-0  md:ml-[17px]">{product.image && (
                            <Image src={urlFor(product.image).url()}
                            alt= "Car Image"
                            width={782}
                            height={872}
                            >
                            </Image>
                          )}</div> 
          
          </div> 
          <div className='flex justify-evenly'>
          <div className='h-[124px] w-[148px] rounded-lg mt-[20px]'> {product.image && (
                            <Image src={urlFor(product.image).url()}
                            alt= "Car Image"
                            width={232}
                            height={72}
                            >
                            </Image>
                          )}</div>
          <div className='h-[124px] w-[148px]  rounded-lg mt-[20px]'>
          {product.image && (
                            <Image src={urlFor(product.image).url()}
                            alt= "Car Image"
                            width={232}
                            height={72}
                            >
                            </Image>
                          )}
          </div>
          <div className='h-[124px] w-[148px] rounded-lg mt-[20px]'> {product.image && (
                            <Image src={urlFor(product.image).url()}
                            alt= "Car Image"
                            width={232}
                            height={72}
                            >
                            </Image>
                          )}</div>
    
          </div>
          </div>
          <div className='h-[508px] w-[492px] bg-white ml-[20px] mr-[20px] mt-[10px] rounded-md '>
            <div className='flex justify-between ml-[24px]  mt-5 font-medium text-[32px]  mr-[10px] items-center'>
                <p>{product.name}</p>
                <svg  className='mr-[10px]' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.44 3.09961C14.63 3.09961 13.01 3.97961 12 5.32961C10.99 3.97961 9.37 3.09961 7.56 3.09961C4.49 3.09961 2 5.59961 2 8.68961C2 9.87961 2.19 10.9796 2.52 11.9996C4.1 16.9996 8.97 19.9896 11.38 20.8096C11.72 20.9296 12.28 20.9296 12.62 20.8096C15.03 19.9896 19.9 16.9996 21.48 11.9996C21.81 10.9796 22 9.87961 22 8.68961C22 5.59961 19.51 3.09961 16.44 3.09961Z" fill="#ED3F3F"/>
                </svg>
            </div>
    
            <div className='flex items-center ml-[24px]'>
            <svg width="108" height="20" viewBox="0 0 108 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_35_7942)">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M9.16664 2.65862C9.22421 2.47609 9.33846 2.31666 9.49281 2.20349C9.64717 2.09031 9.83358 2.0293 10.025 2.0293C10.2164 2.0293 10.4028 2.09031 10.5571 2.20349C10.7115 2.31666 10.8257 2.47609 10.8833 2.65862L12.4333 7.42529H17.4333C17.6315 7.41779 17.8268 7.47541 17.9892 7.58932C18.1516 7.70324 18.2723 7.86719 18.3327 8.05614C18.3932 8.24508 18.3902 8.44862 18.324 8.63567C18.2579 8.82271 18.1324 8.98297 17.9666 9.09196L13.9083 12.0336L15.4583 16.8086C15.5196 16.9905 15.5212 17.1872 15.4627 17.3701C15.4043 17.5529 15.2889 17.7122 15.1335 17.8249C14.9781 17.9375 14.7907 17.9975 14.5988 17.996C14.4068 17.9946 14.2204 17.9319 14.0666 17.817L9.99998 14.842L5.94164 17.792C5.7879 17.9069 5.60145 17.9696 5.40951 17.971C5.21758 17.9725 5.03022 17.9125 4.87479 17.7999C4.71936 17.6872 4.604 17.5279 4.54557 17.3451C4.48713 17.1622 4.48868 16.9655 4.54998 16.7836L6.09998 12.0086L2.04164 9.06696C1.87588 8.95797 1.75035 8.79771 1.68424 8.61067C1.61813 8.42362 1.61508 8.22008 1.67554 8.03114C1.736 7.84219 1.85666 7.67824 2.01907 7.56432C2.18149 7.45041 2.37673 7.39279 2.57498 7.40029H7.57498L9.16664 2.65862Z" fill="#FBAD39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M31.1666 2.65862C31.2242 2.47609 31.3385 2.31666 31.4928 2.20349C31.6472 2.09031 31.8336 2.0293 32.025 2.0293C32.2164 2.0293 32.4028 2.09031 32.5571 2.20349C32.7115 2.31666 32.8257 2.47609 32.8833 2.65862L34.4333 7.42529H39.4333C39.6315 7.41779 39.8268 7.47541 39.9892 7.58932C40.1516 7.70324 40.2723 7.86719 40.3327 8.05614C40.3932 8.24508 40.3902 8.44862 40.324 8.63567C40.2579 8.82271 40.1324 8.98297 39.9666 9.09196L35.9083 12.0336L37.4583 16.8086C37.5196 16.9905 37.5212 17.1872 37.4627 17.3701C37.4043 17.5529 37.2889 17.7122 37.1335 17.8249C36.9781 17.9375 36.7907 17.9975 36.5988 17.996C36.4068 17.9946 36.2204 17.9319 36.0666 17.817L32 14.842L27.9416 17.792C27.7879 17.9069 27.6014 17.9696 27.4095 17.971C27.2176 17.9725 27.0302 17.9125 26.8748 17.7999C26.7194 17.6872 26.604 17.5279 26.5456 17.3451C26.4871 17.1622 26.4887 16.9655 26.55 16.7836L28.1 12.0086L24.0416 9.06696C23.8759 8.95797 23.7504 8.79771 23.6842 8.61067C23.6181 8.42362 23.6151 8.22008 23.6755 8.03114C23.736 7.84219 23.8567 7.67824 24.0191 7.56432C24.1815 7.45041 24.3767 7.39279 24.575 7.40029H29.575L31.1666 2.65862Z" fill="#FBAD39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M53.1666 2.65862C53.2242 2.47609 53.3385 2.31666 53.4928 2.20349C53.6472 2.09031 53.8336 2.0293 54.025 2.0293C54.2164 2.0293 54.4028 2.09031 54.5571 2.20349C54.7115 2.31666 54.8257 2.47609 54.8833 2.65862L56.4333 7.42529H61.4333C61.6315 7.41779 61.8268 7.47541 61.9892 7.58932C62.1516 7.70324 62.2723 7.86719 62.3327 8.05614C62.3932 8.24508 62.3902 8.44862 62.324 8.63567C62.2579 8.82271 62.1324 8.98297 61.9666 9.09196L57.9083 12.0336L59.4583 16.8086C59.5196 16.9905 59.5212 17.1872 59.4627 17.3701C59.4043 17.5529 59.2889 17.7122 59.1335 17.8249C58.9781 17.9375 58.7907 17.9975 58.5988 17.996C58.4068 17.9946 58.2204 17.9319 58.0666 17.817L54 14.842L49.9416 17.792C49.7879 17.9069 49.6014 17.9696 49.4095 17.971C49.2176 17.9725 49.0302 17.9125 48.8748 17.7999C48.7194 17.6872 48.604 17.5279 48.5456 17.3451C48.4871 17.1622 48.4887 16.9655 48.55 16.7836L50.1 12.0086L46.0416 9.06696C45.8759 8.95797 45.7504 8.79771 45.6842 8.61067C45.6181 8.42362 45.6151 8.22008 45.6755 8.03114C45.736 7.84219 45.8567 7.67824 46.0191 7.56432C46.1815 7.45041 46.3767 7.39279 46.575 7.40029H51.575L53.1666 2.65862Z" fill="#FBAD39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M75.1666 2.65862C75.2242 2.47609 75.3385 2.31666 75.4928 2.20349C75.6472 2.09031 75.8336 2.0293 76.025 2.0293C76.2164 2.0293 76.4028 2.09031 76.5571 2.20349C76.7115 2.31666 76.8257 2.47609 76.8833 2.65862L78.4333 7.42529H83.4333C83.6315 7.41779 83.8268 7.47541 83.9892 7.58932C84.1516 7.70324 84.2723 7.86719 84.3327 8.05614C84.3932 8.24508 84.3902 8.44862 84.324 8.63567C84.2579 8.82271 84.1324 8.98297 83.9666 9.09196L79.9083 12.0336L81.4583 16.8086C81.5196 16.9905 81.5212 17.1872 81.4627 17.3701C81.4043 17.5529 81.2889 17.7122 81.1335 17.8249C80.9781 17.9375 80.7907 17.9975 80.5988 17.996C80.4068 17.9946 80.2204 17.9319 80.0666 17.817L76 14.842L71.9416 17.792C71.7879 17.9069 71.6014 17.9696 71.4095 17.971C71.2176 17.9725 71.0302 17.9125 70.8748 17.7999C70.7194 17.6872 70.604 17.5279 70.5456 17.3451C70.4871 17.1622 70.4887 16.9655 70.55 16.7836L72.1 12.0086L68.0416 9.06696C67.8759 8.95797 67.7504 8.79771 67.6842 8.61067C67.6181 8.42362 67.6151 8.22008 67.6755 8.03114C67.736 7.84219 67.8567 7.67824 68.0191 7.56432C68.1815 7.45041 68.3767 7.39279 68.575 7.40029H73.575L75.1666 2.65862Z" fill="#FBAD39"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M97.1666 2.65862C97.2242 2.47609 97.3385 2.31666 97.4928 2.20349C97.6472 2.09031 97.8336 2.0293 98.025 2.0293C98.2164 2.0293 98.4028 2.09031 98.5571 2.20349C98.7115 2.31666 98.8257 2.47609 98.8833 2.65862L100.433 7.42529H105.433C105.632 7.41779 105.827 7.47541 105.989 7.58932C106.152 7.70324 106.272 7.86719 106.333 8.05614C106.393 8.24508 106.39 8.44862 106.324 8.63567C106.258 8.82271 106.132 8.98297 105.967 9.09196L101.908 12.0336L103.458 16.8086C103.52 16.9905 103.521 17.1872 103.463 17.3701C103.404 17.5529 103.289 17.7122 103.133 17.8249C102.978 17.9375 102.791 17.9975 102.599 17.996C102.407 17.9946 102.22 17.9319 102.067 17.817L98 14.842L93.9416 17.792C93.7879 17.9069 93.6014 17.9696 93.4095 17.971C93.2176 17.9725 93.0302 17.9125 92.8748 17.7999C92.7194 17.6872 92.604 17.5279 92.5456 17.3451C92.4871 17.1622 92.4887 16.9655 92.55 16.7836L94.1 12.0086L90.0416 9.06696C89.8759 8.95797 89.7504 8.79771 89.6842 8.61067C89.6181 8.42363 89.6151 8.22008 89.6755 8.03114C89.736 7.84219 89.8567 7.67824 90.0191 7.56432C90.1815 7.45041 90.3767 7.39279 90.575 7.40029H95.575L97.1666 2.65862Z" stroke="#90A3BF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
    <defs>
    <clipPath id="clip0_35_7942">
    <rect width="108" height="20" fill="white"/>
    </clipPath>
    </defs>
    </svg>
    
    <p className='text-[#596780] ml-3'>440+ Reviewer </p>
            </div>
    
            <div>
                <p className='mt-[30px] text-[20px] ml-[24px] pr-[10px]  text-[#596780]'>NISMO has become the embodiment of Nissan's outstanding performance, inspired by the most unforgiving proving ground, the "race track".</p>
                <div className='flex mt-6 justify-evenly p-2'>
                <p className='text-[#8693a8] font-medium '>Type Car</p> 
                <p className='text-[#596780] font-medium ml-[24px]'>{product.transmission}</p> 
                <p className='text-[#8693a8] font-medium ml-[24px] '>Capaity</p> 
                <p className='text-[#596780]  font-medium ml-[24px] '>{product.seatingCapacity}</p> 
            </div>
            <div className='flex  justify-evenly p-2'>
                <p className='text-[#8693a8] font-medium '>Steering</p> 
                <p className='text-[#596780] font-medium ml-[24px]'>Manual</p> 
                <p className='text-[#8693a8] font-medium ml-[24px] '>Gasoline</p> 
                <p className='text-[#596780]  font-medium ml-[24px] '>{product.fuelCapacity}</p> 
            </div>
            <div className='flex align-bottom justify-between'>
            <p className='text-black font-medium text-[28px] mt-9 ml-[24px]'>{product.pricePerDay} <span className='text-[#90A3BF] text-[16px]'>days</span></p>
            <Link href="/checkout">
            <button className="h-[44px] w-[126px] mr-4 bg-[#3563E9] rounded-[4px] text-[#fff] ml-[21px] mt-[38px]" >Rental Car</button>
            </Link>
            </div>
            {/* <p className='text-[#90A3BF] text-[16px] ml-[24px] line-through'>$100.00</p> */}
            
            </div>
            
            </div>        
    
            </div>
            <div/>
    
     
            </div>
    
    
        </div>
      )

 
}
