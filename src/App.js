import React, { Component } from 'react'
import TopBanner from './component/TopBanner'
import Services from './component/Services'
import Analysis from './component/analysis/Analysis'
import Summery from './component/summery/Summery'
class App extends Component {
  render() {
    return (
      <>

        <TopBanner />
        <Services />  
        <Analysis />
        <Summery />
      </>
    )
  }
}

export default App

