import React from "react";
import Helmet from "react-helmet";

import Navbar from "../components/Navbar";
import "./all.sass";

const TemplateWrapper: React.SFC = ({ children }) => (
    <div>
        <Helmet title="首页 | 上海匡架网络" />
        <Navbar />
        <div>{children}</div>
    </div>
);

export default TemplateWrapper;
