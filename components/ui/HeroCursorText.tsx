'use client'
import React from 'react'
import { sf } from "@/app/fonts";

import { Typewriter, Cursor } from 'react-simple-typewriter'


function HeroCursorText() {


    return (
        <h1 className={`${sf.className} font-light text-7xl sm:text-8xl sm:px-0 text-left text-kyle-dark`} >
            <Typewriter
                words={['developer', 'designer', 'programmer', 'ummmmm', 'nerd']}
                loop={0}
                cursor
                cursorStyle='|'
                typeSpeed={50}
                deleteSpeed={50}
                delaySpeed={2000}
            />
        </h1>
    )
}

export default HeroCursorText