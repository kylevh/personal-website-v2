'use client'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export const PageWrapper = (({ children, className }: { children: React.ReactNode, className: string, }) => (
    <>
        <AnimatePresence>
            <motion.div
                className={className}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 15 }}
                transition={{ delay: 0.25 }}
            >
                {children}
            </motion.div>
        </AnimatePresence>
    </>
))
