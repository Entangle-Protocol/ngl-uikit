import React from 'react'
import styles from './BoxText.module.scss'
import cx from 'classnames'

interface BoxTextProps {
  children: React.ReactNode | string
}

export const BoxText: React.FC<BoxTextProps> = ({ children }) => {
  return (
    <div
      className={cx(styles.root, {
        [styles.stringChild]: typeof children === 'string',
      })}
    >
      {children}
    </div>
  )
}
