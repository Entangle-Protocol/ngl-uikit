import React from 'react'
import styles from './Badge.module.scss'
import clsx from 'clsx'
import { CheckIcon, ExpiringIcon, WarningIcon } from '../icons'

/**
 * Status badge component with icons and variants
 */
export interface BadgeProps {
  /** Badge content (overrides default variant text) */
  children?: React.ReactNode
  /** Custom background color */
  color?: string
  /** Custom icon element (overrides default variant icon) */
  icon?: React.ReactNode | null
  /** Badge style variant */
  variant?: 'success' | 'expiring' | 'deposit' | 'warning'
}

/**
 * Badge component for displaying status or information
 * @example
 * ```tsx
 * <Badge variant="success">Completed</Badge>
 * 
 * <Badge 
 *   variant="warning" 
 *   icon={<CustomIcon />}
 * />
 * 
 * <Badge 
 *   color="#6E56CF"
 *   icon={<CustomIcon />}
 * >
 *   Custom Badge
 * </Badge>
 * ```
 */

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  color = '',
  icon = null,
}) => {
  const iconToShow =
    icon ||
    (variant === 'success' ? (
      <CheckIcon />
    ) : variant === 'expiring' ? (
      <ExpiringIcon />
    ) : variant === 'warning' ? (
      <WarningIcon />
    ) : null)

  const textToShow =
    children ||
    (variant === 'success'
      ? 'Success'
      : variant === 'expiring'
        ? 'Expiring'
        : variant === 'deposit'
          ? 'Deposit'
          : variant === 'warning'
            ? 'Warning'
            : '')

  return (
    <div
      className={clsx(styles.root, {
        [styles.success]: variant === 'success',
        [styles.expiring]: variant === 'expiring',
        [styles.warning]: variant === 'warning',
        [styles.deposit]: variant === 'deposit',
      })}
      style={{ backgroundColor: color }}
    >
      {iconToShow}
      <span className={styles.text}>{textToShow}</span>
    </div>
  )
}
