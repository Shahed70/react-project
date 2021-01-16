import React, { Component } from "react";
import AboutPageDesc from "../aboutpagecontent/AboutPageDesc";
import PagesBanner from "../allpagetopbanner/PagesBanner";
import Footer from "../footer/Footer";
import TopNav from "../TopNav";

export class AboutPage extends Component {
  render() {
    return (
      <>
        <TopNav />
        <PagesBanner pageTitle="About Me"/>
        <AboutPageDesc />
        <Footer />
      </>
    );
  }
}

export default AboutPage;
