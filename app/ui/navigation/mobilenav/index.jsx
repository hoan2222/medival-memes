'use client'

import { useState } from "react"


export default function MobileNav(){

    const [mobile, setMobile] = useState(false);



    return(
        <div>
            <ul className=" text-center">
            <li>
                <a href="/medival-memes/#landing">Home of Memes</a>
            </li>
            <li>
                <a href="/medival-memes/#option">Memegenerator</a>
            </li>
            <li>
                <a href="/medival-memes/#sources">Bildquellen</a>
            </li>
            <li>
                <a href="/medival-memes/#tagungen">Tagungen</a>
            </li>
            <li>
                <a href="/medival-memes/#impressum">Impressum</a>
            </li>
            </ul>
        </div>
    )
}