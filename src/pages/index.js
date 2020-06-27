import React from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>Home</h1>
        <p>A beautifully simple weather app for iOS</p>
        <p>
            <a href="https://itunes.apple.com/au/app/sweather/id1238159259?mt=8">
                View in the App Store
            </a>
        </p>
    </Layout>
);

export default IndexPage;
