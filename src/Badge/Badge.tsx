import React from 'react'
import styles from './Badge.module.scss'
import cx from 'classnames'
import { CheckIcon, ExpiringIcon, DepositIcon, WarningIcon } from '../icons'

interface BadgeProps {
  children: React.ReactNode
  color?: string
  icon?: React.ReactNode | null
  variant?: 'success' | 'expiring' | 'deposit' | 'warning'
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = null,
  color = '',
  icon = null,
}) => {
  const iconToShow = variant === 'success'
    ? <CheckIcon />
    : variant === 'expiring'
      ? <ExpiringIcon />
      : variant === 'deposit'
        ? <DepositIcon />
        : variant === 'warning'
          ? <WarningIcon />
          : icon

  const textToShow = variant === 'success'
    ? 'Success'
    : variant === 'expiring'
      ? 'Expiring'
      : variant === 'deposit'
        ? 'Deposit'
        : variant === 'warning'
          ? 'Warning'
          : children

  return (
    <div
      className={cx(styles.root, {
        [styles.success]: variant === 'success',
        [styles.expiring]: variant === 'expiring',
        [styles.warning]: variant === 'warning',
        [styles.deposit]: variant === 'deposit'
      })}
      style={{ backgroundColor: !variant ? color : '' }}
    >
      {iconToShow}
      <span className={styles.text}>{textToShow}</span>
    </div>
  )
}
