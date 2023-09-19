import React from 'react'
import Image from 'next/image'
import { sf } from "@/app/fonts";
import Link from 'next/link'


export default function InfoPage() {
    return (
        <main className="flex min-h-screen  justify-center p-2 bg-kyle-white">
            <div className='grid grid-cols-3 md:grid-cols-12 p-4 gap-2 min-h-screen align-top w-full max-w-[100rem]'>

                {/* NavBar */}
                <div className='col-span-3 md:col-span-12  h-50'>
                    <div className="w-full  md:flex hidden justify-end pr-24 p-4 ">
                        <h1 className={`${sf.className} whitespace-pre font-light text-lg md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-10`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>info</strong></h1>
                    </div>
                    <div className="w-full  md:hidden flex justify-end p-4 pr-0">
                        <h1 className={`${sf.className} whitespace-pre font-light text-xl md:text-xl text-gray-500 hover:text-kyle-dark duration-200 pt-5 pr-0 lg:pr-4 xl:pr-36`}><Link href='/'>back</Link>    /    <strong className='text-kyle-dark'>info</strong></h1>
                    </div>
                </div>

                {/* Left side Profile Pic for mobile*/}
                <div className='flex flex-col col-span-6  align-top'>
                    <div className="flex flex-row md:flex-col items-center w-full">
                        <div className='flex-1'>
                            <Image alt='Headshot of myself' height={200} width={200} src='/images/kylehuynh.jpg' className='w-full h-auto' />
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

                {/* Right section */}
                <div className='col-span-4 col-start-1 md:col-start-7 md:mt-36 my-8 h-auto w-full md:ml-14'>
                    <div className='w-full flex flex-col justify-end '>
                        <h1 className={`${sf.className} g:mt-40 font-bold text-3xl xl sm:text-4xl text-left text-kyle-dark`}>about me</h1>
                        <div className="w-8 sm:w-12 h-[5px] sm:h-[7px] col-span-2 col-start-6 my-6 bg-kyle-dark" />
                        <p className={`${sf.className} font-light text-2xl sm:text-2xl lg:text-3xl text-left text-kyle-dark`}> Hi! My name is Kyle and I'm a software engineer. My story started in 1984 when the first macintosh was introduced. This is a bunch of filler text to see how text would look in this section. I don't know what else to write so I'm going to write this. </p>
                        {/* <p className={`${sf.className} font-light text-2xl sm:text-2xl lg:text-3xl text-left text-kyle-dark`}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia fugit ut quis ipsum voluptates praesentium repellat debitis optio illo dignissimos repudiandae aliquid, soluta, blanditiis nam porro! Nihil excepturi dolor eligendi!
                            Non, iste debitis. Corrupti, molestias soluta excepturi reprehenderit placeat consectetur adipisci voluptates qui dicta, ipsa laboriosam numquam sunt vero at aliquam odit et nemo dignissimos pariatur ab, veniam commodi repudiandae.
                            Iste incidunt et, magnam illo quidem recusandae ab itaque autem eaque voluptatem excepturi architecto praesentium est, aliquam dolores perspiciatis optio porro esse facere dolorem vero? Quasi quae tempore culpa exercitationem?
                            Sapiente odit quia praesentium asperiores est. Modi amet optio eaque excepturi ipsum, dolorum expedita harum quidem necessitatibus facilis aspernatur repellendus hic distinctio quis. Mollitia similique ad cupiditate quo est. Voluptatem.
                            Laborum, suscipit, mollitia hic totam at vel voluptates harum ipsa facere voluptatum maiores sed sint. Excepturi sapiente vel sint expedita aliquid? Fugiat maiores accusantium asperiores consequatur nisi quod culpa dolorem.
                            Eaque nulla quaerat ducimus repellendus harum accusamus vero ipsum in neque doloremque corrupti cumque, ex necessitatibus, quod non illo mollitia nihil adipisci! Magnam laboriosam minus quos id omnis maxime odio?
                            Fuga aliquam assumenda, aliquid ipsum at tenetur debitis esse, cupiditate excepturi impedit quis consequatur reiciendis culpa praesentium odit fugiat laboriosam quia eius inventore natus voluptates aperiam placeat. Nobis, eius iste!
                            Officia distinctio perspiciatis quaerat asperiores amet, quas maxime veritatis magnam labore culpa? Corporis nisi magni alias laborum quam, quis deleniti. Explicabo impedit, fugit dignissimos veritatis ipsa provident quos sint beatae?
                            Eaque ducimus id iure deserunt voluptate sint non nisi facilis nihil consequatur, modi voluptatem repellat ullam pariatur fugit! Ab, nesciunt earum. Reiciendis totam inventore voluptatibus corrupti doloribus blanditiis. Laborum, id.
                            Optio quis atque ex beatae dolore, saepe veritatis quod, quae ut dolores modi aliquid earum dolor. Aperiam tenetur pariatur dolorem quos nesciunt culpa, velit commodi possimus quas! Corrupti, nisi? Soluta.</p> */}
                    </div>
                </div>




            </div>
        </main>
    )
}
