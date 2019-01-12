import React from "react";
import { graphql } from "gatsby";

import Layout from "../components/Layout";

const UnitsSettings: React.SFC = () => {
    return <Layout />;
};

export default UnitsSettings;

export const unitsSettingsQuery = graphql`
    query UnitsSettings($id: String!) {
        markdownRemark(id: { eq: $id }) {
            frontmatter {
                currency
                weight
            }
        }
    }
`;
