import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Content, HTMLContent } from "../components/Content";
import { AboutPageTemplateProps, AboutPageProps } from "../common/interfaces";
import { Helmet } from "react-helmet";

export const AboutPageTemplate: React.SFC<AboutPageTemplateProps> = ({
    title,
    content,
    contentComponent
}) => {
    const PageContent = contentComponent || Content;

    return (
        <section className="section section--gradient">
            <Helmet titleTemplate="%s | 上海匡架网络">
                <title>关于我们</title>
            </Helmet>
            <div className="container">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="section">
                            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                                {title}
                            </h2>
                            <PageContent
                                className="content"
                                content={content}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const AboutPage: React.SFC<AboutPageProps> = ({ data }) => {
    const { markdownRemark: post } = data;

    return (
        <Layout>
            <AboutPageTemplate
                contentComponent={HTMLContent}
                title={post.frontmatter.title}
                content={post.html}
            />
        </Layout>
    );
};

export default AboutPage;

export const aboutPageQuery = graphql`
    query AboutPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            html
            frontmatter {
                title
            }
        }
    }
`;
