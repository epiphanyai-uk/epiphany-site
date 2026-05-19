import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'
import * as styles from '../styles/Layout.css'

const Layout = () => {
  const [
    isLeftSideBarOpen,
    setIsLeftSideBarOpen,
  ] = useState(false)

  return (
   <div 
  //  className={styles.appShell}
   >
      <Header
        isLeftSideBarOpen={
          isLeftSideBarOpen
        }
        setIsLeftSideBarOpen={
          setIsLeftSideBarOpen
        }
      />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
      </div> 
  )
}

export default Layout