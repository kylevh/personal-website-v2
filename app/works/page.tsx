import React from 'react'
import Image from 'next/image'
import { sf } from "@/app/fonts";
import Link from 'next/link'
import ProjectsContainer from '@/components/ui/ProjectsContainer';


export default function WorksPage() {
    return (
        <main className="flex min-h-screen items-center justify-center p-2 bg-kyle-white">
            <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 w-full max-w-[100rem]'>

                {/* Navbar */}
                <div className='col-span-3 md:col-span-12 '>
                    <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
                        <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-10`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>works</strong></h1>
                    </div>

                    <div className="w-full  md:hidden flex justify-end p-4">
                        <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>works</strong></h1>
                    </div>
                </div>

                <div className='col-span-3 col-start-1 md:col-start-2 py-20'>
                    <h1 className={`${sf.className} font-bold text-4xl md:text-4xl`}>my works</h1>
                    <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark"></div>
                </div>

                <div className='col-span-3 col-start-1 md:col-span-10 md:col-start-2 h-full'>
                    <div className='w-full justify-center h-auto mb-36'>
                        <ProjectsContainer />
                    </div>
                </div>


            </div>
        </main>
    )
}
