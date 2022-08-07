import React from 'react'
import { SafeAreaView } from 'react-native'
import { Outlet } from 'react-router-dom'
import Sidebar from '../Sidebar'
import './index.scss'

const Layout = () => {
  return (
    <SafeAreaView>
      <div className="App">
        <Sidebar />
        <div className="page">
          <span className="tags top-tags">{/* &lt;body&gt; */}</span>
          <Outlet />
          <span className="tags bottom-tags">{/* &lt;body&gt; */}</span>
          <br />
          <span className="bottom-tag-html">{/* &lt;/html&gt; */}</span>
        </div>
      </div>
    </SafeAreaView>
  )
}

export default Layout
