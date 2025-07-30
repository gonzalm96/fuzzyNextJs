import Logo from "./logo"
import CtaButton from "./ctaButton"

import Link from "next/link"

import navStyle from '../Styles/nav.module.scss'

import { Signika } from "next/font/google"

const signika = Signika({
    subsets:['latin'],
})

export default function NavBar(){

    function DesktopNav() {
        return(
            <div className={navStyle.navContainer + " " + navStyle.desktop}>
                <Logo />
                <ul className={navStyle.navListDesktop}>
                    <li className={signika.className + " " + navStyle.navItem}><Link href="/">Home</Link></li> 
                    <li className={signika.className + " " + navStyle.navItem}><Link href="/about">About Us</Link></li>
                    <li className={signika.className + " " + navStyle.navItem}><a href="https://docs.google.com/document/d/17tlhusqXq7PFRhfEtKDbxMnCbZxt8IMC346OVQLwqJI/edit?usp=sharing"> Local Resources </a></li>
                    <li className={signika.className + " " + navStyle.navItem}><Link href="/contact">Contact</Link></li>
                    <li className={signika.className + " " + navStyle.navItem}><CtaButton primary={true} nav={true} link={"https://www.etsy.com/shop/fuzzybritchesfiber/?etsrc=sdt"} linkText={"Visit Our Shop!"}/></li>
                </ul>
            </div>
        )
    }

    function MobileNav() {
        return(
            <div className={navStyle.navContainer + " " + navStyle.mobile}>
                <div className={navStyle.mobileHeading}>
                    <Logo />
                    <CtaButton primary={true} nav={true} link={"https://www.etsy.com/shop/fuzzybritchesfiber/?etsrc=sdt"} linkText={"Visit Our Shop!"}/>
                </div>
                <div className={navStyle.navList}>
                    <div>
                        <ul className={navStyle.navListMobile}>
                            <li className={signika.className + " " + navStyle.navItem}><Link href="/">Home</Link></li> 
                            <li className={signika.className + " " + navStyle.navItem}><Link href="/about">About Us</Link></li>
                            <li className={signika.className + " " + navStyle.navItem}><a href="https://docs.google.com/document/d/17tlhusqXq7PFRhfEtKDbxMnCbZxt8IMC346OVQLwqJI/edit?usp=sharing"> Resources </a></li>
                            <li className={signika.className + " " + navStyle.navItem}><Link href="/contact">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }

    return(
        <div className={navStyle.nav}>  
            <DesktopNav />
            <MobileNav />
        </div>
    )
}

