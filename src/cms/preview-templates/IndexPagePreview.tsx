import React from "react";

import { IndexPageTemplate } from "../../templates/index-page";
import { PreviewProps } from "../../common/interfaces";

const IndexPagePreview: React.SFC<PreviewProps> = ({ entry, getAsset }) => {
    const entryBlurbs = entry.getIn(["data", "intro", "blurbs"]);
    const blurbs = entryBlurbs ? entryBlurbs.toJS() : [];
    console.log(JSON.stringify(blurbs));
    return (
        <IndexPageTemplate
            image={entry.getIn(["data", "image"])}
            title={entry.getIn(["data", "title"])}
            heading={entry.getIn(["data", "heading"])}
            description={entry.getIn(["data", "description"])}
            fullImage={entry.getIn(["data", "full_image"])}
        />
    );
};

export default IndexPagePreview;
