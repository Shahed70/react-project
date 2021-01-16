import React, { Component } from "react";
import Video from "video-react/lib/components/Video";
import Analysis from "../analysis/Analysis";
import Review from "../ClinetReview/Review";
import Courses from "../courses/Courses";
import Footer from "../footer/Footer";
import RecentProject from "../recentProject/recentProject";
import Services from "../Services";
import Summery from "../summery/Summery";
import TopBanner from "../TopBanner";

export class HomePage extends Component {
  render() {
    return (
      <>
        <TopBanner />
        <Services />
        <Analysis />
        <Summery />
        <RecentProject />
        <Courses />
        <Video />
        <Review />
        <Footer />
      </>
    );
  }
}

export default HomePage;
