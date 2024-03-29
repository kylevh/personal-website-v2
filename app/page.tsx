import { sf } from "@/app/fonts";
import Navbar from "@/components/ui/navbar"
import HeroCursorText from '@/components/ui/HeroCursorText'
import { LeftInAnimation } from "@/components/pages/LeftInAnimation";
import { RightInAnimation } from "@/components/pages/RightInAnimation";
import { UpAnimation } from "@/components/pages/UpAnimation";
import { FadeInAnimation } from "@/components/pages/FadeInAnimation";
import LocalTime from "@/components/pages/LocalTime";

export default function Home() {


  return (
    <main className="flex h-screen items-center justify-center p-2 sm:p-24 bg-kyle-white">
      {/* Container for hero home page */}
      <div className="grid grid-cols-3 lg:grid-cols-12 p-4 gap-2 h-screen w-full max-w-[100rem]">

        <div className="w-full col-span-12 col-start-1 md:h-52">
          <div className='h-20'>
            <Navbar />
          </div>
        </div>

        {/* Left Header Text */}
        <FadeInAnimation className="w-full h-auto col-span-3 col-start-1">
          <h1 className={`${sf.className} font-bold text-6xl sm:text-8xl sm:px-0 sm:mb-6 mb-2 text-left text-kyle-dark`}> kyle </h1>
          <h2 className={`${sf.className} font-bold text-6xl sm:text-8xl sm:px-0 sm:mb-6 mb-1 text-left text-kyle-dark`}> {" "} huynh, </h2>

          <HeroCursorText />

          <div className="lg:h-64 h-0" />
        </FadeInAnimation>

        {/* Right header text bg-purple-700 sm:bg-red-700 md:bg-orange-400 lg:bg-yellow-200 xl:bg-green-700 */}
        <UpAnimation className="w-full col-span-4 col-start-1 mt-0 lg:mt-28
        lg:col-span-5 
        lg:col-start-8
        xl:col-start-9
        
        ">
          <LocalTime/>
          <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
          <p className={`${sf.className} md:w-96 font-light text-2xl sm:text-3xl text-left text-kyle-dark`}>
            i’m kyle, a software engineer and graphic designer based
            in seattle, wa
          </p>
        </UpAnimation>
      </div>

    </main>
  );
}

