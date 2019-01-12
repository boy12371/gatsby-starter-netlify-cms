import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const NavigationSettings: React.SFC = () => {
    return <Layout />;
};

export default NavigationSettings;

export const navigationSettingsQuery = graphql`
    query NavigationSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                navigation {
                    title
                    path
                }
            }
        }
    }
`;
