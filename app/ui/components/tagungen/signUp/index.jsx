'use client'

import {motion} from "framer-motion"

export default function SignUp(){

    return(
        <div className="flex justify-center py-20">
            <div className="flex flex-col justify-between h-[10rem] my-10">
                <a href="mailto:medieval-memes@gmx.de">
                    <motion.div 
                    className="rounded-full w-[30rem] py-2 border-4"
                    whileHover={{backgroundColor: "#FFFFFF"}}
                    >
                        <motion.h1 
                        className="p-2 text-center text-3xl text-white font-bold"
                        whileHover={{color: "#111C2A"}}
                        >zum Anmeldeformular</motion.h1>
                    </motion.div>
                </a>
                <a href="tel:0049371262220">
                    <motion.div 
                    className="rounded-full w-[30rem] py-2 border-4"
                    whileHover={{backgroundColor: "#FFFFFF"}}
                    >
                        <motion.h1 
                        className="p-2 text-center text-3xl text-white font-bold"
                        whileHover={{color: "#111C2A"}}
                        >Anmeldung per Telefon</motion.h1>
                    </motion.div>
                </a>
            </div>
        </div>
        
    )
}