import type { Dispatch, SetStateAction } from 'react'
import { Link, useLocation } from 'react-router-dom'
import * as styles from '../Header.css'

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

  const isHome =
    location.pathname === '/' ||
    location.pathname === '/home'

  return (
    <header
      className={styles.header}
    >
      <div className={styles.left}>
        {isHome && (
          <button
            className={styles.menuButton}
            onClick={() =>
              setIsLeftSideBarOpen(
                prev => !prev
              )
            }
          >
            <i
              className={`fas ${
                isLeftSideBarOpen
                  ? 'fa-xmark'
                  : 'fa-bars'
              }`}
            />
          </button>
        )}

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

        <div className={styles.navLinks}>
          <Link to="/about">
            About
          </Link>

          <Link to="/contact">
            Contact
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header