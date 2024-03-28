


const Card = ({title, summary, image}) => {

    return(
        <div className="flex flex-col w-[25rem] rounded-[25px] overflow-hidden  bg-[#111C2A] text-white text-lg hover:shadow-xl mx-2">
            <img src={image} alt={title}  className=" object-fit" />
            <div className="pt-6 pb-4 px-12 justify-center">
                <h1 className="font-bold text-4xl text-center pb-4">{title}</h1>
                <p>{summary}</p>
            </div>
        </div>

    )
}

export default Card;