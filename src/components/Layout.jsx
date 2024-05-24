// create a layout component that wraps the entire page with a header and a footer

import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navigation from "./Navigation";
import '@radix-ui/themes/styles.css';
import { Theme, Button } from '@radix-ui/themes'



const Layout = ({ children }) => {
    return (
        <Theme
            accentColor="mint"
            panelBackground="solid"
            scaling="100%"
            radius="full"
        >
                <Header />
                <main>{children}</main>
                <Footer />
       
        </Theme>
    );
};

export default Layout;      