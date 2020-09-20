import { Link } from "gatsby";
import PropTypes from "prop-types";
import React from "react";
import Container from "./shared/Container";
import styled from "styled-components";
import { breakpoint } from "../constants";

const Main = styled.div`
    ul {
        display: block;
        padding: 0;
        margin: 0;
        margin-left: -0.5em;
        margin-right: -0.5em;

        li {
            display: block;
            margin: 0;
            padding: 0;

            a {
                display: block;
                padding: 0.5em;
            }
        }
    }

    @media (min-width: ${breakpoint}) {
        ul {
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }
`;

const Menu = () => (
    <Main>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/privacy">Privacy Policy</Link>
            </li>
            <li>
                <Link to="/terms">Terms of Use</Link>
            </li>
        </ul>
    </Main>
);

export default Menu;
