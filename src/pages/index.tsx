import React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/Layout";
import { Frontmatter } from "../common/interfaces";

export interface Edge<F extends Frontmatter = Frontmatter> {
    node: {
        id: string;
        excerpt: string;
        fields: {
            slug: string;
        };
        frontmatter: F;
    };
}

export interface PageRouteProps<F extends Frontmatter = Frontmatter> {
    data: {
        allMarkdownRemark: {
            edges: Edge<F>[];
            totalCount: number;
        };
        site: {
            siteMetadata: {
                title: string;
            };
        };
    };
    pageContext: {
        tag: string;
    };
}

export default class IndexPage extends React.Component<PageRouteProps> {
    render() {
        const { data } = this.props;
        const { edges: posts } = data.allMarkdownRemark;

        return (
            <Layout>
                <section className="section">
                    <div className="container">
                        <div className="content">
                            <h1 className="has-text-weight-bold is-size-2">
                                Latest Stories
                            </h1>
                        </div>
                        {posts.map(({ node: post }) => (
                            <div
                                className="content"
                                style={{
                                    border: "1px solid #eaecee",
                                    padding: "2em 4em"
                                }}
                                key={post.id}
                            >
                                <p>
                                    <Link
                                        className="has-text-primary"
                                        to={post.fields.slug}
                                    >
                                        {post.frontmatter.title}
                                    </Link>
                                    <span> &bull; </span>
                                    <small>{post.frontmatter.date}</small>
                                </p>
                                <p>
                                    {post.excerpt}
                                    <br />
                                    <br />
                                    <Link
                                        className="button is-small"
                                        to={post.fields.slug}
                                    >
                                        Keep Reading →
                                    </Link>
                                </p>
                            </div>
                        ))}
                    </div>
                </section>
            </Layout>
        );
    }
}

export const pageQuery = graphql`
    query IndexQuery {
        allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "product-post" } } }
        ) {
            edges {
                node {
                    excerpt(pruneLength: 400)
                    id
                    fields {
                        slug
                    }
                    frontmatter {
                        title
                        templateKey
                        date(formatString: "MMMM DD, YYYY")
                    }
                }
            }
        }
    }
`;
