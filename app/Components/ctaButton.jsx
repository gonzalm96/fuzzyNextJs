import btnStyle from '../Styles/buttons.module.scss'

import { Signika } from "next/font/google"

const signika = Signika({
    subsets:['latin'],
})

export default function CtaButton( {primary, larger, nav, link, linkText } ){
    return(
        <a href={link} 
        className={
            (primary ? (btnStyle.btn + " " + btnStyle.primary + " " + signika.className):(btnStyle.btn + " " + btnStyle.secondary + " " + signika.className))
            + " " +
            ((larger ? btnStyle.largeBtn : ""))
            + " " +
            ((nav ? btnStyle.navBtn : ""))
        }>{linkText}</a>
    )
}