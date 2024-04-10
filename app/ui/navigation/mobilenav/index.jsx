'use client'

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"


export default function MobileNav(){

    const [mobile, setMobile] = useState(false);

    const toggleMenu = () => {
        setMobile(!mobile);
    }

    const menuVars = {
        initial: {
            scaleY: 0,
        },
        animate: {
            scaleY: 1,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0]
            }
        },
        exit: {
            scaleY: 0,
            transition: {
                duration: 0.3,
                ease: [0.12, 0, 0.39, 0]
            }
        },
    }

    return(

        
        <div className="fixed w-full sm:hidden relative z-20">

            <AnimatePresence>
            {mobile && (
                <motion.div
                    variants={menuVars}
                    initial="initial"
                    animate="animate"
                    className={`${mobile? "" : "hidden"}`}
                    >
                    <motion.div
                    variants={menuVars}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="fixed origin-top-right w-full h-screen bg-white"
                    >
                        <div onClick={toggleMenu} >
                            <XButton />
                        </div>
                        <div className="pt-10">
                         <ul className="text-center px-16 py-4 text-lg font-semibold space-y-10 bg-white">
                             <li>
                                 <a href="/#landing">Home of Memes</a>
                             </li>
                             <li>
                                 <a href="/#option">Memegenerator</a>
                             </li>
                             <li>
                                 <a href="/#sources">Bildquellen</a>
                             </li>
                             <li>
                                 <a href="/#tagungen">Tagungen</a>
                             </li>
                             <li>
                                 <a href="/#impressum">Impressum</a>
                             </li>
                         </ul>
                        </div>
                    </motion.div>

                </motion.div>
            )};
            </AnimatePresence>
            <div className={`${mobile? "hidden" : ""}`}>
                <BarButton handleClick={toggleMenu} />
            </div>
        </div>
    )
}



function BarButton({handleClick}){

    return(
        <div className="flex flex-row justify-end px-5 pt-8 pb-2 shadow-lg bg-white">
            <div onClick={handleClick}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            
        </div>
    )
}





function XButton(){

    return(

        <div className="flex flex-row-reverse px-5 pt-8">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
             </svg>
        </div>
       
    )
}