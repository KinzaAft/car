import Hero from "./components/hero";
import Popular from "./components/popular";
import Link from "next/link";

export default function Home() {
  
  return (
    <>
    <div className="main bg-[#F6F7F9] h-auto md:h-auto">
    <Hero/>
    {/* <Second/> */}
    <Popular/>
      <div className="flex justify-center items-center">
        <Link href="/dashboard">
      <button className="h-[44px] w-[150px] bg-[#3563E9] rounded-[4px] text-[#fff] mt-[30px] mb-5 ">Show More Car</button>
      </Link>
      </div>

    </div>
     
    </>
    );
}
