import { Merriweather } from "next/font/google"

import Image from "next/image"
import BannerImg from "../../public/images/hero.jpeg"

import heroStyles from "../Styles/hero.module.scss"

const merry = Merriweather({
    subsets: ['latin'],
    weight: ['400', '700', '900'],
});

export default function Hero(){
    return(
        <div className={heroStyles.heroSection}>
            <div className={heroStyles.leftSection}>
                <h1 className={merry.className}>Welcome!</h1>
                <h2 className={merry.className}>Fuzzy Britches Fiber is a small hobby farm in Stanwood, Washington.</h2>
            </div>
            <div className={heroStyles.rightSection}>
                <Image src={BannerImg} height="200" width="300" alt="Banner"/>
            </div>
        </div>
    )
}