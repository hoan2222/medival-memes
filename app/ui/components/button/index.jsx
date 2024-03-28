'use client'

import {motion} from "framer-motion";


export default function Botton(link){

    return(
        <motion.p 
        whileHover={{scale: 1.1}}
        >
            <div className="rounded-full w-[20rem] py-2 bg-gradient-to-r from-[#CC2E16] to-[#FBBF00]">
                <h1 className="p-2 text-center text-3xl text-white font-bold">zum Generator</h1>
            </div>
        </motion.p>
        
    )
}