import React from 'react'
import Image from 'next/image'
import { sf } from "@/app/fonts";
import Link from 'next/link'


export default function InfoPage() {
  return (
    <main className="flex h-screen items-center justify-between p-2 bg-kyle-white">
      <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 h-screen w-full'>
        <div className='col-span-3 md:hidden'>
          <div className="w-full  md:hidden flex justify-end p-4">
            <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>works</strong></h1>
          </div>
        </div>

        {/* Left side Profile Pic */}
        <div className='flex flex-col col-span-6 justify-center'>
          <div className="flex flex-row md:flex-col items-center w-full">
            <div className='flex-1 p-4'>
              <Image alt='Headshot of myself' height={200} width={200} src='/images/cynd2.jpg' className='w-full h-auto' />
              <div className="hidden md:block md:mt-10">
                <h1 className={`${sf.className} font-light text-3xl underline`}>linkedin</h1>
                <h1 className={`${sf.className} font-light text-3xl underline`}>github</h1>
                <h1 className={`${sf.className} font-light text-3xl underline`}>behance</h1>
              </div>

            </div>
            <div className='md:hidden flex-1 p-4'>
              <h1 className={`${sf.className} text-2xl font-light underline`}>linkedin</h1>
              <h1 className={`${sf.className} text-2xl font-light underline`}>github</h1>
              <h1 className={`${sf.className} text-2xl font-light underline`}>behance</h1>
            </div>


          </div>
        </div>

        {/* Right side Text contents */}
        {/* Should be 1 column, if bigger than 12 col each occupying 6 col */}
        <div className='col-span-6 '>
          <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
            <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>info</strong></h1>
          </div>

          <div className='w-full md:w-96  p-4 md:pt-80 '>
            <h1 className={`${sf.className} font-bold text-4xl`}>about me</h1>
            <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
            <p className={`${sf.className} font-light text-lg`}> equuntur temporibus aspernatur. Nulla aspernatur enim officia sint veritatis, fugit ad accusamus consequuntur ipsa quae inventore eius laudantium, quos voluptatum exercitationem? Quisquam et soluta autem eveniet? </p>
          </div>
        </div>

      </div>
    </main>
  )
}
