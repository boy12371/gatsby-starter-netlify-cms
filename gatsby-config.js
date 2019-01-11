module.exports = {
    siteMetadata: {
        title: "上海匡架网络",
        description:
            "上海匡架网络科技有限公司作为领先的移动互联网应用服务提供商，致力于将先进的营销理念、客户服务理念和通信信息服务平台相结合，为企业提供基于移动互联网的创新的应用解决方案与服务。帮助企业利用移动互联网和客户、员工、合作伙伴更有效地沟通互动，创造营销、客服新价值。"
    },
    plugins: [
        "gatsby-plugin-typescript",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sass",
        {
            // keep as first gatsby-source-filesystem plugin for gatsby image support
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/static/img`,
                name: "uploads"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/pages`,
                name: "pages"
            }
        },
        {
            resolve: "gatsby-source-filesystem",
            options: {
                path: `${__dirname}/src/img`,
                name: "images"
            }
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-transformer-remark",
            options: {
                plugins: [
                    {
                        resolve: "gatsby-remark-relative-images",
                        options: {
                            name: "uploads"
                        }
                    },
                    {
                        resolve: "gatsby-remark-images",
                        options: {
                            // It's important to specify the maxWidth (in pixels) of
                            // the content container as this plugin uses this as the
                            // base for generating different widths of each image.
                            maxWidth: 2048
                        }
                    },
                    {
                        resolve: "gatsby-remark-copy-linked-files",
                        options: {
                            destinationDir: "static"
                        }
                    }
                ]
            }
        },
        {
            resolve: "gatsby-plugin-netlify-cms",
            options: {
                modulePath: `${__dirname}/src/cms/cms`
            }
        },
        {
            resolve: "gatsby-plugin-purgecss", // purges all unused/unreferenced css rules
            options: {
                develop: true, // Activates purging in npm run develop
                purgeOnly: ["/all.sass"] // applies purging only on the bulma css file
            }
        }, // must be after other CSS plugins
        "gatsby-plugin-netlify" // make sure to keep it last in the array
    ]
};
