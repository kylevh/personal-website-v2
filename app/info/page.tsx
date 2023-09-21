import React from 'react'
import Image from 'next/image'
import { sf } from "@/app/fonts";
import Link from 'next/link'
import { FadeInAnimation } from '@/components/pages/FadeInAnimation';
import { RightInAnimation } from '@/components/pages/RightInAnimation';
import { LeftInAnimation } from '@/components/pages/LeftInAnimation';
import { UpAnimation } from '@/components/pages/UpAnimation';
import { Button } from '@/components/ui/button';


export default function InfoPage() {
    return (
        <main className="flex min-h-screen  justify-center p-2 bg-kyle-white">
            <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 min-h-screen align-top w-full max-w-[100rem]'>

                {/* NavBar */}
                <FadeInAnimation className='col-span-3 md:col-span-12  h-50'>
                    <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
                        <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-10`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>info</strong></h1>
                    </div>
                    <div className="w-full  md:hidden flex justify-end p-4 pr-0">
                        <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>info</strong></h1>
                    </div>
                </FadeInAnimation>

                {/* Left side Profile Pic for mobile*/}
                <UpAnimation className='flex flex-col col-span-6  align-top'>
                    <div className="flex flex-row md:flex-col items-center w-full">
                        <div className='flex-1'>
                            <div className="relative">
                                <Image alt='Headshot of myself' height={200} width={200} src='/images/kh_cropped.png' className='absolute w-full h-auto z-20' />
                                <Image alt='Headshot of myself' height={200} width={200} src='/images/kh_cropped.png' className=' w-full h-auto z-10' />

                                <Image alt='Headshot of myself' height={200} width={200} src='/images/dark.png' className='hidden md:block bg-kyle-dark w-full h-auto absolute z-10 top-12 left-12' />
                            </div>

                            <div className="hidden md:block md:mt-20">
                                <h1 className={`${sf.className} font-light text-3xl underline`}><Link href="mailto:kylevh@outlook.com">email</Link></h1>
                                <h1 className={`${sf.className} font-light text-3xl underline`}><Link href="https://www.linkedin.com/in/kylevhuynh/">linkedin</Link></h1>
                                <h1 className={`${sf.className} font-light text-3xl underline`}><Link href="https://www.github.com/kylevh">github</Link></h1>
                                <button className={`${sf.className} font-light text-2xl mt-3 h-11 px-5 text-kyle-dark transition-colors duration-150 border border-kyle-dark rounded-none focus:shadow-outline hover:bg-kyle-dark hover:text-kyle-white`}>resume</button>
                            </div>

                        </div>
                        <div className='md:hidden flex-1 p-4'>
                            <h1 className={`${sf.className} font-light text-3xl underline`}><Link href="mailto:kylevh@outlook.com">email</Link></h1>
                            <h1 className={`${sf.className} text-2xl font-light underline`}><Link href="https://www.linkedin.com/in/kylevhuynh/">linkedin</Link></h1>
                            <h1 className={`${sf.className} text-2xl font-light underline`}><Link href="https://www.github.com/kylevh">github</Link></h1>
                            <Button className={`${sf.className} font-light text-xl mt-2`}>resume</Button>
                        </div>


                    </div>
                </UpAnimation>

                {/* Right section */}
                <UpAnimation className='col-span-4 col-start-1 md:col-start-7 md:mt-24 my-8 h-auto w-full md:ml-14'>
                    <div className='w-full flex flex-col justify-end '>
                        <h1 className={`${sf.className} g:mt-40 font-bold text-3xl xl sm:text-4xl text-left text-kyle-dark`}>about me</h1>
                        <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
                        <p className={`${sf.className} font-light text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-4`}>
                            Hi, I am <strong className="font-bold">Kyle Huynh</strong>
                            <Image alt="" src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" className="inline mb-1 mx-2" width={25} height={25} />
                            it&apos;s nice to meet you.
                        </p>
                        <p className={`${sf.className} font-light text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-4`}>
                            I&apos;m a recent graduate of the University of Washington Bothell, majoring in Computer Science & Software Engineering.
                        </p>
                        <p className={`${sf.className} font-light text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-4`}>
                            My areas of interest include UI/UX, web development, DevOps, and game development.
                        </p>
                        <p className={`${sf.className} font-light text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-4`}>
                            With a detail oriented-focus, I enjoy creating simple but effective solutions to improve application performance, ease of maintenance, and user experience.
                        </p>
                        <p className={`${sf.className} font-light text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-4`}>
                            Outside of development, I enjoy doing art, kendo, film photography, and cooking!
                        </p>

                        <p className={`${sf.className} font-bold text-2xl sm:text-xl lg:text-2xl text-left text-kyle-dark mb-4 underline`}>
                            <Link href="/contact">Get in touch!</Link>
                        </p>


                    </div>
                </UpAnimation>




            </div>
        </main>
    )
}
