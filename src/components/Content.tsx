import React from "react";
import { HTMLContentProps, ContentProps } from "../common/interfaces";

export const HTMLContent: React.SFC<HTMLContentProps> = ({
    content,
    className
}) => (
    <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export const Content: React.SFC<ContentProps> = ({ content, className }) => (
    <div className={className}>{content}</div>
);

export default Content;
