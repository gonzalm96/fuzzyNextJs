import Image from "next/image";
import styles from "./page.module.scss";

import NavBar from "./Components/navBar";
import Hero from "./Components/hero";
import FbFeed from "./Components/fbFeed";
import FooterBar from "./Components/footerBar";
import CtaButton from "./Components/ctaButton";

import WoolOne from "../public/images/basket_of_wool.jpg";
import WoolTwo from "../public/images/wool.jpg";
import WoolThree from "../public/images/flower_plant.jpg";

import { Playfair_Display } from 'next/font/google'

const playFair = Playfair_Display({
  subsets:['latin'],
})


export default function Home() {
  return (
    <div className={styles.page + " " + playFair.className}>
      <Hero />
      <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.contentLeft}>
            <p>As a spinner, I was intrigued by the notion of raising my own fiber.  We currently raise Blue Faced Leicester and Tunis Sheep as well as Angora Rabbits.</p>
            <div className={styles.imagesContainer}>
              <Image src={WoolOne} width="241" height="154" alt="Wool Baskets" />
              <Image src={WoolTwo} width="241" height="154" alt="Wool Baskets" />
              <Image src={WoolThree} width="241" height="154" alt="Wool Baskets" />
            </div>
            <CtaButton primary={true} larger={true} link={"https://www.etsy.com/shop/fuzzybritchesfiber/?etsrc=sdt"} linkText={"Visit Our Shop!"} />

            <h2>Calling all local spinners!</h2>
            <p>The “Woolly Fun Breed Study” launches a new session each year in  February. The breed study meets once a month from February-June in  Stanwood. Each month will feature a new breed of sheep from a regional  farm. Examining different breeds will help us learn how different fibers behave as well as making us better spinners by giving  our brains and hands new challenges. We look forward to building our  fiber community while learning from each other.</p>
            <p>If you are interested in participating in this program (as a spinner or  as a fiber farm) send us an email with your contact information.</p>
            <p>We are excited to continue this program and promote the wool raised in our community.</p>
            <CtaButton primary={false} nav={true} link={"https://docs.google.com/document/d/17tlhusqXq7PFRhfEtKDbxMnCbZxt8IMC346OVQLwqJI/edit?usp=sharing"} linkText={"Local Wool Resources"} />
          </div>
          <div className={styles.contentRight}>
            <FbFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
