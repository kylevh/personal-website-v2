'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { sf } from "@/app/fonts";
import Link from 'next/link'
import { FadeInAnimation } from '@/components/pages/FadeInAnimation';
import { RightInAnimation } from '@/components/pages/RightInAnimation';
import { LeftInAnimation } from '@/components/pages/LeftInAnimation';
import { UpAnimation } from '@/components/pages/UpAnimation';
import portfolios from '@/components/projects.js';
import { Button } from '@/components/ui/button';

export default function Page({ params }: { params: { id: number } }) {
    const [portfolioItems, setPortfolioItems] = useState<ProjectItem[]>(portfolios);
    const item = portfolioItems[params.id]

    return (
        <main className="flex min-h-screen  justify-center p-2 bg-kyle-white">
            <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 min-h-screen align-top w-full max-w-[100rem]'>

                {/* NavBar */}
                <FadeInAnimation className='col-span-3 md:col-span-12  h-52'>
                    <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
                        <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-10`}><Link href='/works'>back</Link></h1>

                    </div>
                    <div className="w-full  md:hidden flex justify-end p-4 pr-0">
                        <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/works'>back</Link></h1>
                    </div>

                </FadeInAnimation>

                {/* Left side Profile Pic for mobile*/}
                <UpAnimation className='flex flex-col col-span-6'>
                    <div className="flex flex-row md:flex-col items-center w-full">
                        <div className='flex-1'>
                            <Image alt='Project Thumbnail' height={200} width={500} src={`${item.imagePath}`} className='border-4 rounded-sm border-kyle-dark w-full h-auto mb-5' />



                            {item.images && (
                                item.images.map((url: string) => {
                                    return <Image key={url} alt='Project Thumbnail' height={200} width={500} src={`${url}`} className='border-4 rounded-sm border-kyle-dark w-full h-auto mb-5' />
                                })
                            )}
                        </div>



                    </div>
                </UpAnimation>

                {/* Right section */}
                <UpAnimation className='col-span-4 col-start-1 md:col-start-7 h-auto w-full mt-8 md:mt-0 md:ml-14 mb-10'>
                    <div className='w-full flex flex-col justify-end '>
                        <h1 className={`${sf.className} g:mt-40 font-bold text-3xl xl sm:text-4xl text-left text-kyle-dark`}>{item.title}</h1>
                        <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
                        <p className={`${sf.className} font-light text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-10 whitespace-pre-line`}>{item.pageDesc} </p>
                        {item.link1 && (
                            <Button className={`${sf.className} font-light text-xl mt-2`}><Link className="w-full" href={item.link1}>github</Link></Button>
                        )}
                        {item.link2 && (
                            <Button className={`${sf.className} font-light text-xl mt-2`}><Link className="w-full" href={item.link2}>visit</Link></Button>

                        )}
                    </div>
                </UpAnimation>

            </div >
        </main >
    )
}
