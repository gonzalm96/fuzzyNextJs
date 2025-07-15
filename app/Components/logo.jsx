import Image from "next/image"
import LogoFile from "../../public/images/Fuzzy_Britches_Farm_Logo_Pass_2.png";

import navStyle from '../Styles/nav.module.scss'

export default function Logo(){
    return(
        <div>
            <a href="/" className={navStyle.desktopLogo}>
                <Image src={LogoFile} height="101" width="131" alt="Fuzzy Britches Fiber" />
            </a>
            <a href="/" className={navStyle.mobileLogo}>
                <Image src={LogoFile} height="60" width="77" alt="Fuzzy Britches Fiber" />
            </a>
        </div>
    )
}