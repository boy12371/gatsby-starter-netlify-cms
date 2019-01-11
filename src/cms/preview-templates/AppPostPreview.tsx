import React from "react";

import { AppPostTemplate } from "../../templates/app-post";
import { PreviewProps } from "../../common/interfaces";

const AppPostPreview: React.SFC<PreviewProps> = ({ entry, widgetFor }) => (
    <AppPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
    />
);

export default AppPostPreview;
