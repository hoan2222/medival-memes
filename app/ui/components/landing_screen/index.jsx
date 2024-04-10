import MainImage from "./mainImage"

export default function Landing(){
    return(
        <div>
            <div className="flex justify-center bg-[#111C2A] pt-10 h-[25rem] ">
               <img src="/Logo.png" alt="logo" className="object-scale-down w-48" />
            </div>
            <MainImage />
        </div>
       
    )
}
