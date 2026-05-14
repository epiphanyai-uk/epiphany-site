import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useState } from 'react'

const Layout = () => {
  const [
    isLeftSideBarOpen,
    setIsLeftSideBarOpen,
  ] = useState(false)

  return (
    <>
      <Header
        isLeftSideBarOpen={
          isLeftSideBarOpen
        }
        setIsLeftSideBarOpen={
          setIsLeftSideBarOpen
        }
      />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  )
}

export default Layout