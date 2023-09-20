'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const RightInAnimation = (({ children, className }: { children: React.ReactNode, className: string, }) => (
    <>
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ delay: 0.1, duration: 1.2, ease: "anticipate"}}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
))
