'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import { FaGithub } from 'react-icons/fa';
import { FaExternalLinkAlt } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'
import { sf } from "@/app/fonts";
import Link from 'next/link';
import portfolios from '@/components/projects.js';
import { motion, AnimatePresence } from 'framer-motion'


const variants = {
  hidden: {opacity: 0},
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const images = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: .5
    },
  },
};

function ProjectsContainer() {
  const [portfolioItems, setPortfolioItems] = useState(portfolios);


  return (
    <motion.div className="grid grid-cols-1  md:grid-cols-2 xl:grid-cols-3 gap-4"
    variants={variants}
    initial="hidden"
    animate="show"
    >
      {
        portfolioItems.map((item) => {
          return <motion.div className="max-w-full rounded-lg mb-8" key={item.id} variants={images}>
            <div className="relative group">
              <Image
                className="border-4 border-kyle-dark rounded-smo object-cover hover:opacity-20 transition duration-200 h-60 "
                alt=""
                src={item.imagePath}
                width={1000}
                height={500}
              />
              <div className="absolute inset-0 bg-gray-900 opacity-0 group-hover:opacity-50 transition duration-200" />
              <div className="absolute inset-0 flex items-center justify-center  opacity-0 group-hover:opacity-100 transition duration-200">
                {item.link1 && (
                  <Link href={item.link1} rel="noopener noreferrer">
                    <FaGithub className="w-10 h-10 text-kyle-white hover:opacity-25 fill-current transition duration-200" />
                  </Link>
                )
                }

                {/* If two links are active, add a margin between the two */}
                {(item.link1 && item.link2) && (
                  <div className="px-6" />
                )
                }

                {item.link2 && (
                  <Link href={item.link2} rel="noopener noreferrer">
                    <FaExternalLinkAlt className="w-10 h-10 text-kyle-white hover:opacity-25  fill-current  transition duration-200" />
                  </Link>
                )}

                <div />
              </div>
            </div>

            <h1 className={`${sf.className} font-regular text-3xl text-left text-kyle-dark mt-4`}>{item.title}</h1>
            <p className={`${sf.className} font-light text-xl text-left text-kyle-dark my-1`}>{item.desc}</p>
            {
              item.categories.map((category) => {
                return <Badge className="mr-1" key={category}>{category}</Badge>
              })
            }
          </motion.div>
        })}


    </motion.div >
  )
}

export default ProjectsContainer