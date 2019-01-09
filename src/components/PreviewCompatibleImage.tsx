import React from "react";
import Img from "gatsby-image";
import {
    ImageInfo,
    ChildImageSharp,
    PreviewCompatibleImageProps
} from "../common/interfaces";

export function isImageInfo<HCIS extends boolean>(
    o: any,
    hasChildImageSharp: HCIS
): o is ImageInfo<HCIS extends true ? ChildImageSharp : undefined> {
    return o && (hasChildImageSharp ? o.childImageSharp : true);
}

const PreviewCompatibleImage: React.SFC<PreviewCompatibleImageProps> = ({
    imageInfo
}) => {
    const imageStyle = { borderRadius: "5px" };
    const { alt = "", childImageSharp, image } = imageInfo as ImageInfo;

    if (isImageInfo(image, true)) {
        return (
            <Img
                style={imageStyle}
                fluid={image.childImageSharp.fluid}
                alt={alt}
            />
        );
    }

    if (!!childImageSharp) {
        return (
            <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />
        );
    }

    if (!!image && typeof image === "string") {
        return <img style={imageStyle} src={image} alt={alt} />;
    }

    return null;
};

export default PreviewCompatibleImage;
