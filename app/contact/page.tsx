import React from 'react'
import { sf } from "@/app/fonts";
import Link from 'next/link'
import { FadeInAnimation } from '@/components/pages/FadeInAnimation';
import { RightInAnimation } from '@/components/pages/RightInAnimation';
import { LeftInAnimation } from '@/components/pages/LeftInAnimation';


export default function ContactPage() {
    return (
        <main className="flex h-screen items-center justify-center p-2 bg-kyle-white">
            <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 h-screen w-full max-w-[100rem]'>

                {/* NavBar */}
                <FadeInAnimation className='col-span-3 md:col-span-12 '>
                    <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
                        <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-10`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>contact</strong></h1>
                    </div>
                    <div className="w-full  md:hidden flex justify-end p-4 pr-0">
                        <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>contact</strong></h1>
                    </div>
                </FadeInAnimation>


                {/* Left section */}
                <RightInAnimation className='col-span-3 col-start-1 md:col-start-3 h-1/3 lg:mt-48 md:mt-36 mt-14'>
                    <div className='w-full flex flex-col justify-end '>
                        <h1 className={`${sf.className} g:mt-40 font-bold text-3xl xl sm:text-4xl text-left text-kyle-dark`}>contact me</h1>
                        <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
                        <p className={`${sf.className} font-light text-2xl sm:text-2xl lg:text-3xl text-left text-kyle-dark`}> want to get in contact? send me a message through this form or email me at <strong className="underline"><Link href="mailto:kylevh@outlook.com">kylevh@outlook.com</Link></strong> </p>
                    </div>
                </RightInAnimation>

                {/* Right section */}
                <LeftInAnimation className='col-span-4 col-start-1 md:col-start-7 md:mt-20 my-8 '>
                    <div className='w-full flex flex-col justify-end '>
                        <form action="https://formspree.io/f/xyyqprpe" method="POST" className="space-y-8 pb-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">email</label>
                                <input type="email" id="email" name="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="your@email.com" required/>
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">subject</label>
                                <input type="text" name="subject" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="let me know how I can help you" required/>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message"  className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">message</label>
                                <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="leave a comment..."></textarea>
                            </div>
                            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-kyle-dark sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>
                    </div>
                </LeftInAnimation>

            </div>
        </main>
    )
}
