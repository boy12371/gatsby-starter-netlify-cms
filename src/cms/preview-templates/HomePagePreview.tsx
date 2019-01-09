import React from "react";

import { HomePageTemplate } from "../../templates/home-page";
import { PreviewProps } from "../../common/interfaces";

const HomePagePreview: React.SFC<PreviewProps> = ({ entry, widgetFor }) => (
    <HomePageTemplate
        title={entry.getIn(["data", "title"])}
        content={widgetFor("body")}
    />
);

export default HomePagePreview;
