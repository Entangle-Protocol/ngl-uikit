import React, { ReactNode } from 'react'
import styles from './Button.module.scss'
import cx from 'classnames'

interface ButtonProps {
  children: ReactNode | string
  onClick: () => void
  disabled?: boolean
  primary?: boolean
  fullWidth?: boolean
}

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
      className={cx(styles.root, {
        [styles.disabled]: disabled,
        [styles.primary]: primary,
        [styles.fullWidth]: fullWidth,
      })}
      onClick={handleButtonClick}
      role="button"
      tabIndex={disabled ? -1 : 0}
    >
      <div className={styles.childrenWrapper}>
        {children}
      </div>
    </div>
  )
}
