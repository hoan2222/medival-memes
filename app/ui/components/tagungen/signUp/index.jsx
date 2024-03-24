'use client'

import {motion} from "framer-motion"

export default function SignUp(){

    return(
        <div className="flex justify-center py-20">
            <div className="flex flex-col justify-between h-[10rem] my-10">
                <a href="mailto:medieval-memes@gmx.de">
                    <div className="rounded-full w-[30rem] py-2 border-4">
                        <h1 className="p-2 text-center text-3xl text-white font-bold">zum Anmeldeformular</h1>
                    </div>
                </a>
                <a href="tel:0049371262220">
                    <div className="rounded-full w-[30rem] py-2 border-4">
                        <h1 className="p-2 text-center text-3xl text-white font-bold">Anmeldung per Telefon</h1>
                    </div>
                </a>
            </div>
        </div>
        
    )
}