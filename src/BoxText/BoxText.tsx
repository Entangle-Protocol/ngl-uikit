import React from 'react'
import styles from './BoxText.module.scss'
import clsx from 'clsx'

/**
 * Text container with decorative box styling
 */
export interface BoxTextProps {
  /** Text or component to be displayed */
  children: React.ReactNode | string
}

/**
 * Boxed text component
 * @example
 * ```tsx
 * <BoxText>Important information</BoxText>
 * ```
 */
export const BoxText: React.FC<BoxTextProps> = ({ children }) => {
  return (
    <div
      className={clsx(styles.root, {
        [styles.stringChild]: typeof children === 'string',
      })}
    >
      {children}
    </div>
  )
}
