import Image from "next/image"
import LogoFile from "../../public/images/Fuzzy_Britches_Farm_Logo_Pass_2.png";

export default function Logo(){
    return(
        <div>
            <Image src={LogoFile} height="101" width="131" alt="Fuzzy Britches Fiber" />
        </div>
    )
}