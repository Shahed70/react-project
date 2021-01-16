import React, { Component } from 'react'
import AllCourse from '../Allcourses/AllCourse'
import PagesBanner from '../allpagetopbanner/PagesBanner'
import Footer from '../footer/Footer'
import TopNav from '../TopNav'

export class CoursesPage extends Component {
    render() {
        return (
            <>
                <TopNav />
                <PagesBanner pageTitle="All Courses"/>
                <AllCourse />
                <Footer />  
            </>
        )
    }
}

export default CoursesPage
