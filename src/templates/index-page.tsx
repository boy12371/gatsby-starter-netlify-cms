import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import PreviewCompatibleImage, {
    isImageInfo
} from "../components/PreviewCompatibleImage";
import Feature from "../components/Features";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import { IndexPageTemplateProps, IndexPageProps } from "../common/interfaces";

export const IndexPageTemplate: React.SFC<IndexPageTemplateProps> = ({
    image,
    title,
    heading,
    description,
    fullImage
}) => (
    <section className="section section--gradient">
        <div className="container">
            <div className="section">
                <div className="columns">
                    <div className="column is-10 is-offset-1">
                        <div className="content">
                            <div
                                className="full-width-image-container margin-top-0"
                                style={{
                                    backgroundImage: `url(${
                                        isImageInfo(image, true)
                                            ? image.childImageSharp.fluid.src
                                            : image
                                    })`
                                }}
                            >
                                <h2
                                    className="has-text-weight-bold is-size-1"
                                    style={{
                                        boxShadow:
                                            "0.5rem 0 0 #f40, -0.5rem 0 0 #f40",
                                        backgroundColor: "#f40",
                                        color: "white",
                                        padding: "1rem"
                                    }}
                                >
                                    {title}
                                </h2>
                            </div>
                            <div className="columns">
                                <div className="column is-7">
                                    <h3 className="has-text-weight-semibold is-size-2">
                                        {heading}
                                    </h3>
                                    <p>{description}</p>
                                </div>
                            </div>
                            <div className="columns">
                                <div className="column is-7">
                                    <h3 className="has-text-weight-semibold is-size-3" />
                                </div>
                            </div>
                            <div className="tile is-ancestor">
                                <div className="tile is-vertical">
                                    <div className="tile">
                                        <div className="tile is-parent is-vertical">
                                            <article className="tile is-child" />
                                        </div>
                                        <div className="tile is-parent">
                                            <article className="tile is-child" />
                                        </div>
                                    </div>
                                    <div className="tile is-parent">
                                        <article className="tile is-child" />
                                    </div>
                                </div>
                            </div>
                            <div
                                className="full-width-image-container"
                                style={{
                                    backgroundImage: `url(${
                                        isImageInfo(fullImage, true)
                                            ? fullImage.childImageSharp.fluid
                                                  .src
                                            : fullImage
                                    })`
                                }}
                            />
                            <h2 className="has-text-weight-semibold is-size-2" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

const IndexPage: React.SFC<IndexPageProps> = ({ data }) => {
    const { frontmatter } = data.markdownRemark;

    return (
        <Layout>
            <IndexPageTemplate
                image={frontmatter.image}
                title={frontmatter.title}
                heading={frontmatter.heading}
                description={frontmatter.description}
                fullImage={frontmatter.full_image}
            />
        </Layout>
    );
};

export default IndexPage;

export const indexPageQuery = graphql`
    query IndexPage($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
                title
                heading
                description
                full_image {
                    childImageSharp {
                        fluid(maxWidth: 2048, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;
