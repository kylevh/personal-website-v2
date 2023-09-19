'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { sf } from "@/app/fonts";



function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    return (
        <header className="text-gray-600 body-font block h-24 z-auto pt-4 w-full">
            {/* Desktop navbar */}
            <div className="container flex flex-wrap p-5 flex-col items-end justify-center lg:justify-end ">
                <nav className="flex flex-wrap items-end text-base justify-end">
                    <Link
                        href={"/works"}
                        className={`${sf.className} font-light mr-12 sm:mr-20 text-lg md:text-xl text-center justify-center cursor-pointer text-gray-500 hover:text-kyle-dark duration-200`}
                    >
                        works
                    </Link>
                    <Link
                        href={"/info"}
                        className={`${sf.className} font-light mr-12 sm:mr-20 text-lg md:text-xl cursor-pointer text-gray-500 hover:text-kyle-dark duration-200`}
                    >
                        info
                    </Link>
                    <Link
                        href={"/contact"}
                        className={`${sf.className} font-light lg:mr-20 text-lg md:text-xl cursor-pointer text-gray-500 hover:text-kyle-dark duration-200`}
                    >
                        contact
                    </Link>
                </nav>
            </div>

            {/* Mobile navbar */}
            

        </header>
    )
}

export default Navbar