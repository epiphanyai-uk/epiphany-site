import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'
import * as styles from '../styles/Button.css'

type ButtonProps = {
  to: string
  children: ReactNode
  variant?: 'primary' | 'secondary'
}

export function Button({
  to,
  children,
  variant = 'primary',
}: ButtonProps) {
  return (
    <Link
      to={to}
      className={styles.buttonVariants[variant]}
    >
      {children}
    </Link>
  )
}