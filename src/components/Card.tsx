import type { HTMLAttributes } from 'react'
import * as styles from '../Card.css'

type CardProps =
  HTMLAttributes<HTMLDivElement>

export const Card = ({
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={
        className
          ? `${styles.card} ${className}`
          : styles.card
      }
      {...props}
    />
  )
}

export const CardContent = ({
  className,
  ...props
}: CardProps) => {
  return (
    <div
      className={
        className
          ? `${styles.cardContent} ${className}`
          : styles.cardContent
      }
      {...props}
    />
  )
}