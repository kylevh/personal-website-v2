'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const FadeInAnimation = (({ children, className }: { children: React.ReactNode, className: string, }) => (
    <>
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{ opacity: 0, }}
                animate={{ opacity: 1, }}
                exit={{ opacity: 0, }}
                transition={{ delay: 0.4, duration: .7, ease: "easeInOut"}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
))
