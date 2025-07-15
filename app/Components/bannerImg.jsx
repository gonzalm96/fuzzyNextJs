import Image from "next/image";
import { Fragment } from "react";

import styles from "../page.module.scss"

export default function BannerImg( {imgSrc, altText} ){
    return(
        <Fragment>
            <Image className={styles.banner} src={imgSrc} width="850" height="250" alt={altText} />
        </Fragment>
    )
}