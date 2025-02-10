import React from 'react'
import cx from 'classnames'
import styles from './CornersFrame.module.scss'

export const CornersFrame = ({
  width = '32px',
  height = '32px',
  borderWidth = '1px',
  borderColor = '',
}) => {
  return (
    <div className={styles.root}>
      <div
        className={cx(styles.top, styles.item, styles.left, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
      <div
        className={cx(styles.top, styles.item, styles.right, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
      <div
        className={cx(styles.bottom, styles.item, styles.right, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
      <div
        className={cx(styles.bottom, styles.item, styles.left, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
    </div>
  )
}
