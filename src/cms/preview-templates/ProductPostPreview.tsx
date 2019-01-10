import React from "react";

import { ProductPostTemplate } from "../../templates/product-post";
import { PreviewProps } from "../../common/interfaces";

const ProductPostPreview: React.SFC<PreviewProps> = ({ entry, widgetFor }) => (
    <ProductPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
    />
);

export default ProductPostPreview;
