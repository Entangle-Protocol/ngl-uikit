import React from 'react'
import type { ReactNode } from 'react'
import styles from './Button.module.scss'
import clsx from 'clsx'

/**
 * Basic button component with primary/secondary styles and disabled state support
 */

export interface ButtonProps {
  /** Button content */
  children: ReactNode | string
  /** Click handler */
  onClick: () => void
  /** Disabled state */
  disabled?: boolean
  /** Primary style */
  primary?: boolean
  /** Full width mode */
  fullWidth?: boolean
}

/**
 * Button component
 * @example
 * ```tsx
 * <Button onClick={() => console.log('clicked')} primary>
 *   Click me
 * </Button>
 * ```
 */

export const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  primary = false,
  fullWidth = false,
}) => {
  const handleButtonClick = () => {
    if (!disabled) {
      onClick()
    }
  }

  return (
    <div
      className={clsx(styles.root, {
        [styles.disabled]: disabled,
        [styles.primary]: primary,
        [styles.fullWidth]: fullWidth,
      })}
      onClick={handleButtonClick}
      role='button'
      tabIndex={disabled ? -1 : 0}
    >
      <div className={styles.childrenWrapper}>{children}</div>
    </div>
  )
}
