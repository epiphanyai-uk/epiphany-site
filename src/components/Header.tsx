import { useEffect, type Dispatch, type SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as styles from '../styles/Header.css'
import epiphanyImg from '../assets/epiphanyai-logo.png';

export interface HeaderProps {
  isLeftSideBarOpen: boolean
  setIsLeftSideBarOpen:
  Dispatch<SetStateAction<boolean>>
}

const Header = ({
  isLeftSideBarOpen,
  setIsLeftSideBarOpen,
}: HeaderProps) => {

  const location = useLocation()

useEffect(() => {
  setIsLeftSideBarOpen(false)
}, [location.pathname, setIsLeftSideBarOpen])



  return (
    <header
      className={styles.header}
    >
      <div className={styles.left}>

        <button
          className={styles.menuButton}
          onClick={() =>
            setIsLeftSideBarOpen(
              v => !v
            )
          }
        >
          {isLeftSideBarOpen ? (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <line x1="3" y1="18" x2="21" y2="18" />
            </svg>
          )}
        </button>

        <div className={styles.logoWrapper}>
          <Link to="/">
            <svg
              className="h-10 w-auto"
              viewBox="0 0 175 40"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <linearGradient
                  id="epiphanyGrad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop
                    offset="0%"
                    stopColor="#00bfa5"
                  />
                  <stop
                    offset="100%"
                    stopColor="#40c4ff"
                  />
                </linearGradient>
              </defs>

              <text
                x="0"
                y="34"
                fontSize="28"
                fontWeight="600"
                fontFamily="JetBrains Mono, monospace"
                fill="url(#epiphanyGrad)"
              >
                Epiphany
              </text>
            </svg>
          </Link>
        </div>

        {/* MOBILE NAV */}
        {isLeftSideBarOpen && (
          <nav className={styles.mobileNavOpen}>
            <Link to="/" className={styles.logoWrapper}>
              <img src={epiphanyImg} width={50} height={50} alt="Epiphany Logo" />
            </Link>
            <Link className={styles.navLinks} to="/about">
              About
            </Link>

            <Link className={styles.navLinks} to="/contact">
              Contact
            </Link>
          </nav>
        )}

        {/* DESKTOP NAV */}
        <nav className={styles.desktopNav}>
          <Link to="/">
            <img src={epiphanyImg} width={50} height={50} alt="Epiphany Logo" />
          </Link>
          <Link className={styles.navLinks} to="/about">
            About
          </Link>

          <Link className={styles.navLinks} to="/contact">
            Contact
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Header