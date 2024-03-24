


const Card = ({title, summary, image}) => {

    return(
        <div className="flex flex-col justify-center w-[20rem] rounded-xl overflow-hidden  bg-[#111C2A] text-white text-2xl hover:shadow-xl">
            <img src={image} alt={title} className="h-32"/>
            <div className="py-10 ">
                <h1 className="font-bold text-center">{title}</h1>
                <p>{summary}</p>
            </div>
        </div>

    )
}

export default Card;