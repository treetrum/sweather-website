/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

import Header from "./header";
import "./layout.css";

import Container from "./shared/Container";
import styled from "styled-components";

const Footer = styled.div`
    border-top: 1px solid black;
    padding-top: 2em;
    margin-top: 2em;
`;

const Layout = ({ children }) => {
    return (
        <Container>
            <Header />
            <div>
                <main>{children}</main>
                <Footer>&copy; {new Date().getFullYear()} Sam Davis</Footer>
            </div>
        </Container>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
