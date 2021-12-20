import React from 'react'
import '../Css/CollegeQuery.css'
import Feed from './Feed'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Widgets from './Widgets'
function CollegeQuery() {
    return (
        <div className="query">
          <Navbar/>
          <div className="query_content">
          <Sidebar className="sidebar"/>
          <Feed/>
          <Widgets/>

          </div>
        </div>
    )
}

export default CollegeQuery
