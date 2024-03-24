import Box from "../box"
import SignUp from "./signUp"

export default function Tagungen(){

    return(
        <div className="w-full bg-[#111C2A]" id="tagungen">
            <div className="flex justify-center p-16 text-4xl font-bold text-white">
                <h1 className="">Tagungen in der TU Chemnitz</h1> 
            </div>
            <div className="flex justify-between px-28 py-16">
            <Box title="14. Juli 2024" content="Lorem Ipsum und das übliche Bla Bla Bla." />
            <Box title="15. Juli 2024" content="Lorem Ipsum und das übliche Bla Bla Bla." />
            <Box title="16. Juli 2024" content="Lorem Ipsum und das übliche Bla Bla Bla." /> 
            </div>
            <p className="px-28 pb-10 text-wrap text-2xl text-white">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
            </p>
            <SignUp />
        </div>
    )
}