import React, { Component } from 'react'
import PagesBanner from '../allpagetopbanner/PagesBanner'
import AllProjects from '../Allprojects/AllProjects'
import Footer from '../footer/Footer'
import TopNav from '../TopNav'

export class ProjectPage extends Component {
    render() {
        return (
            <>
               <TopNav />
               <PagesBanner pageTitle="All Projects"/> 
               <AllProjects/>
               <Footer />
            </>
        )
    }
}

export default ProjectPage
