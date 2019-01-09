import React from "react";
import { Link } from "gatsby";

import logo from "../img/logo.svg";

const Navbar: React.SFC = () => (
    <nav className="navbar is-transparent">
        <div className="container">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <figure className="image">
                        <img src={logo} alt="Kaldi" style={{ width: "88px" }} />
                    </figure>
                </Link>
            </div>
            <div className="navbar-start">
                <Link className="navbar-item" to="/about">
                    关于我们
                </Link>
                <Link className="navbar-item" to="/products">
                    产品展示
                </Link>
                <Link className="navbar-item" to="/contact">
                    联系我们
                </Link>
                <Link className="navbar-item" to="/contact/examples">
                    案例展示
                </Link>
            </div>
        </div>
    </nav>
);

export default Navbar;
