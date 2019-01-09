import React from "react";

import { BlogPostTemplate } from "../../templates/blog-post";
import { PreviewProps } from "../../common/interfaces";

const BlogPostPreview: React.SFC<PreviewProps> = ({ entry, widgetFor }) => (
    <BlogPostTemplate
        content={widgetFor("body")}
        description={entry.getIn(["data", "description"])}
        tags={entry.getIn(["data", "tags"])}
        title={entry.getIn(["data", "title"])}
    />
);

export default BlogPostPreview;
