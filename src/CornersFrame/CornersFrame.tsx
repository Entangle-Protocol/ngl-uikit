import React from 'react'
import clsx from 'clsx'
import styles from './CornersFrame.module.scss'

/**
 * Decorative frame with customizable corner elements
 */
export interface CornersFrameProps {
  /** Width of corner elements */
  width?: string
  /** Height of corner elements */
  height?: string
  /** Border width of corner elements */
  borderWidth?: string
  /** Border color of corner elements */
  borderColor?: string
}

/**
 * Corner decoration component
 * @example
 * ```tsx
 * <CornersFrame width="40px" height="40px" borderColor="primary" />
 * ```
 */
export const CornersFrame = ({
  width = '32px',
  height = '32px',
  borderWidth = '1px',
  borderColor = '',
}) => {
  return (
    <div className={styles.root}>
      <div
        className={clsx(styles.top, styles.item, styles.left, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
      <div
        className={clsx(styles.top, styles.item, styles.right, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
      <div
        className={clsx(styles.bottom, styles.item, styles.right, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
      <div
        className={clsx(styles.bottom, styles.item, styles.left, borderColor)}
        style={{ width, height, borderWidth }}
      ></div>
    </div>
  )
}
