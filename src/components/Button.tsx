import { Link } from 'react-router-dom'
import * as styles from '../Button.css'

type ButtonProps = {
  to: string
  children: React.ReactNode
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