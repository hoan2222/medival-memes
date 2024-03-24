

export default function Box({title, content}){

    return(
        <div className="p-4 bg-white rounded-[35px] sm:w-[30%]">
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="text-2xl text-wrap">{content}</p>
        </div>
    )
}