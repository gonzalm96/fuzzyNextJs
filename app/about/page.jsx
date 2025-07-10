import Image from "next/image";
import styles from "../page.module.scss";

import FbFeed from "../Components/fbFeed";
import Banner from "../Components/bannerImg";
import CtaButton from "../Components/ctaButton";


import AboutImg from "../../public/images/about.jpeg";


import { Playfair_Display } from 'next/font/google'

const playFair = Playfair_Display({
  subsets:['latin'],
})


export default function Home() {
  return (
    <div className={styles.page + " " + playFair.className}>
        <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.contentLeft}>
            <Banner imgSrc={AboutImg} altText="ButtingHeads" />
            <h1>Get to Know Us</h1>
            <p>Fuzzy Britches Fiber is a small family run  farm located in Stanwood, Washington. We raise Blue Faced Leicester and  Tunis Sheep along with Angora Rabbits. All of our  animals are lovingly cared for, and in return supply our small farm with fiber, additional resources for handmade  products and hours of enjoyment.</p>
            <p>We provide products for spinning and felting in the form of raw fiber, prepared fiber in various blends, handspun yarn and a host of other fiber goodies and services.
            We work hard to advocate for these amazing  animals and all of the resources they provide. Our dream is to build a  viable fiber business using locally sourced wool, while providing a loving home to the animals who have provided us with so much.</p>

            <p>Thank you for joining us on this adventure!</p>
            <CtaButton primary={true} link={"https://www.etsy.com/shop/fuzzybritchesfiber/?etsrc=sdt"} linkText={"Visit Our Shop!"} />
          </div>
          <div className={styles.contentRight}>
            <FbFeed />
          </div>
        </div>
      </main>
    </div>
  );
}
