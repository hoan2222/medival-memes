import Botton from "../../button"


export default function MainImage(){

    return(
        
        <div className="flex flex-col justify-between align-center pt-72 pb-20 h-[100vh] bg-cover bg-[url('/Background_Image.jpg')]" id="landing">
           <div className="flex justify-center">
                    <img src="/MemeGenerator.svg" alt="Memegenerator" width={800} />
           </div>
           <div className="flex justify-center">
                <Botton />
           </div>
        </div>
    )
}