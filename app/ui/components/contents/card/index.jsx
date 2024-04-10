


const Card = ({title, summary, image}) => {

    return(
        <div className="flex flex-col w-[25rem] justify-between rounded-[25px] overflow-hidden  bg-[#111C2A] text-white text-lg hover:shadow-xl mx-2">
            <img src={image} alt={title}  className=" object-fit" />
            <div className="pt-6 pb-4 px-12 justify-center">
                <h1 className="font-bold text-4xl text-center pb-4">{title}</h1>
                <p>{summary}</p>
            </div>
            <a href={image}>
                <div className="w-full flex justify-center pb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9 12.75 3 3m0 0 3-3m-3 3v-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </div>
            </a>
        </div>

    )
}

export default Card;