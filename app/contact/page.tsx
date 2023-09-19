import React from 'react'
import { sf } from "@/app/fonts";
import Link from 'next/link'


export default function ContactPage() {
    return (
        <main className="flex h-screen items-center justify-center p-2 bg-kyle-white">
            <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 h-screen w-full max-w-[100rem]'>

                {/* NavBar */}
                <div className='col-span-3 md:col-span-12 '>
                    <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
                        <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-10`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>contact</strong></h1>
                    </div>
                    <div className="w-full  md:hidden flex justify-end p-4 pr-0">
                        <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>contact</strong></h1>
                    </div>
                </div>


                {/* Left section */}
                <div className='col-span-3 col-start-1 md:col-start-3 h-1/3 lg:mt-48 md:mt-36 mt-14'>
                    <div className='w-full flex flex-col justify-end '>
                        <h1 className={`${sf.className} g:mt-40 font-bold text-3xl xl sm:text-4xl text-left text-kyle-dark`}>contact me</h1>
                        <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
                        <p className={`${sf.className} font-light text-2xl sm:text-2xl lg:text-3xl text-left text-kyle-dark`}> wanna get in contact? send me a message through this form or email me at kylevh@outlook.com </p>
                    </div>
                </div>

                {/* Right section */}
                <div className='col-span-4 col-start-1 md:col-start-7 md:mt-20 my-8 '>
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
                </div>



                {/* Left side Text contents */}
                {/* Should be 1 column, if bigger than 12 col each occupying 6 col */}
                {/* <div className='col-span-6 '>


                    <div className='w-full md:w-96  p-4 md:pt-80 '>
                        <h1 className={`${sf.className} font-bold text-4xl`}>about me</h1>
                        <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
                        <p className={`${sf.className} font-light text-lg`}> equuntur temporibus aspernatur. Nulla aspernatur enim officia sint veritatis, fugit ad accusamus consequuntur ipsa quae inventore eius laudantium, quos voluptatum exercitationem? Quisquam et soluta autem eveniet? </p>
                    </div>
                </div>

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
                </div> */}

            </div>
        </main>
    )
}
