import React from "react";

import { ArticlePostTemplate } from "../../templates/article-post";
import { PreviewProps } from "../../common/interfaces";

const ArticlePostPreview: React.SFC<PreviewProps> = ({ entry, widgetFor }) => (
    <ArticlePostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
    />
);

export default ArticlePostPreview;
