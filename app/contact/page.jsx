import styles from "../page.module.scss";

import ContactPic from "../../public/images/contact.jpeg";

import Banner from "../Components/bannerImg";
import FbFeed from "../Components/fbFeed";
import CtaButton from "../Components/ctaButton";

import { Playfair_Display } from 'next/font/google'

const playFair = Playfair_Display({
  subsets:['latin'],
})

export default function Contact() {
  return (
    <div className={styles.page + " " + playFair.className}>
        <main className={styles.main}>
        <div className={styles.mainContent}>
          <div className={styles.contentLeft}>
            <Banner imgSrc={ContactPic} altText="Hens on the Farm" />
                <h1 >Contact Us</h1>
                    <div className={styles.contactInfo}>
                        <p>
                        <strong>Location:</strong> Standwood, WA
                        </p>
                        <p>
                        <strong>Phone:</strong> 425-736-4023
                        </p>
                        <p>
                        <strong>Email:</strong> <a href="mailto:Fuzzybritchesfiber@hotmail.com">Fuzzybritchesfiber@hotmail.com</a>
                        </p>
                        <p>
                        <strong>Facebook:</strong> <a href="https://www.facebook.com/fuzzybritchesfiber/"> Fuzzy Britches Fiber</a>
                        </p>
                        <CtaButton primary={true} link={"#"} linkText={"Visit Our Shop!"} />
                    </div>
                    
          </div>
          <div className={styles.contentRight}>
            <FbFeed />
          </div>
        </div>
      </main>
    </div>
  );
}