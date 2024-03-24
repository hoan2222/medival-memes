

export default function Option(){

    return(
        <div className="flex flex-col justify-between  w-full   my-10 pt-16 shadow-xl">
            <h1 className="py-8 text-center text-3xl text-[#111C2A] font-bold">Wähle deine bevorzugte Option</h1>
            <div className="flex justify-between py-8 px-[20%]">
            <a href="">
                <div className="rounded-full w-[20rem] py-2 bg-[#111C2A]">
                    <h1 className="p-2 text-center text-3xl text-white font-bold">kostenlose Memes</h1>
                </div>
            </a>
            <a href="">
                <div className="rounded-full w-[20rem] py-2 bg-[#111C2A]">
                    <h1 className="p-2 text-center text-3xl text-white font-bold">Memegenerator</h1>
                </div>
            </a>
            </div>
            <h1 className="py-8 text-center text-3xl text-[#111C2A] font-bold">Wähle aus einer Vielzahl an Hintergründen</h1>
            <div className="flex justify-center pb-8">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                </svg>
            </div>
            

        </div>
    )
}



