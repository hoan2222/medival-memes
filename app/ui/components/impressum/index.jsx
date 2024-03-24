export default function Impressum(){

    return(
        <div className="flex flex-col justify-between w-full h-fit bg-black text-white text-3xl pl-28" id="impressum">
            <h1 className="font-bold py-10">Impressum <br />Medieval Memes - Schülerprojekt</h1>
            <div className="flex justify-start">
                <ul className="pb-10">
                    <li>Betreiber:</li>
                    <li>Arbeitsort:<br /> <br /></li>
                    <li className="pt-4">Kontakt: </li>
                </ul>
                <ul className="pl-4">
                    <li> Lena Hensel, Aaron Tröbs</li>
                    <li> Berufsschule FORTIS-AKADEMIE <br />An der Wiesenmühlr 1, 09224 Chemnitz</li>
                    <li className="pt-4">medieval-memes@gmx.de</li>
                </ul>
            </div>



        </div>
    )
}