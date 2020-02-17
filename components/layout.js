import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";

const Layout = props => (
  <div>
    <Nav />
    {props.children}
    <Footer />
  </div>
);

export default Layout;
