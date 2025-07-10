import { Signika } from "next/font/google"

import footerStyles from "../Styles/footer.module.scss"

const signika = Signika({
    subsets:['latin'],
})

export default function FooterBar(){
    return(
        <div className={footerStyles.footerContainer}>
            <ul className={footerStyles.footerList}>
                <li className={signika.className}><a href="home">Fuzzy Britches Fiber</a></li>
                <li className={signika.className}>Stanwood, WA</li>
                <li className={signika.className}><a href="mailto:Fuzzybritchesfiber@hotmail.com">Fuzzybritchesfiber@hotmail.com</a></li>
                <li className={signika.className}><a href="facebook link">Visit us on Facebook!</a></li>
            </ul>
        </div>
    )
}