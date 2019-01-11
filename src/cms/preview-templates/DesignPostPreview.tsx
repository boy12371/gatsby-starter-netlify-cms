import React from "react";

import { DesignPostTemplate } from "../../templates/design-post";
import { PreviewProps } from "../../common/interfaces";

const DesignPostPreview: React.SFC<PreviewProps> = ({ entry, widgetFor }) => (
    <DesignPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
    />
);

export default DesignPostPreview;
