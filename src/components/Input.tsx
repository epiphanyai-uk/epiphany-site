import type { InputHTMLAttributes } from 'react'
import * as styles from '../styles/Input.css'

type InputProps =
  InputHTMLAttributes<HTMLInputElement>

export const Input = ({
  className,
  ...props
}: InputProps) => {
  return (
    <input
      className={
        className
          ? `${styles.input} ${className}`
          : styles.input
      }
      {...props}
    />
  )
}