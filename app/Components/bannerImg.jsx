import Image from "next/image";
import { Fragment } from "react";

export default function BannerImg( {imgSrc, altText} ){
    return(
        <Fragment>
            <Image src={imgSrc} width="850" height="250" alt={altText} />
        </Fragment>
    )
}