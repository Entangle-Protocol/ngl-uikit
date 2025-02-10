import React from 'react'

import cx from 'classnames'
import styles from './AnimationContainer.module.scss'
import { CornersFrame } from '../CornersFrame'

type AnimationContainer = {
  columns?: number
  rows?: number
  corners?: boolean
  padding?: number
  className?: string
  childrenClassName?: string
  hideAll?: boolean
  children: React.ReactNode
}

export const AnimationContainer: React.FC<AnimationContainer> = ({
  columns = 5,
  rows = 4,
  corners = true,
  padding = 0,
  className = '',
  childrenClassName = '',
  hideAll = false,
  children,
}) => {
  return (
    <div className={cx(styles.container, className)}>
      {columns > 0 && rows > 0 && !hideAll && (
        <div className={styles.grid}>
          <div className={styles.verticalLines}>
            {Array.from({ length: columns + 1 }).map((_, i) => (
              <div className={styles.verticalLines_item} key={i}></div>
            ))}
          </div>
          <div className={styles.horisontalLines}>
            {Array.from({ length: rows + 1 }).map((_, i) => (
              <div className={styles.horisontalLines_item} key={i}></div>
            ))}
          </div>
        </div>
      )}
      {corners && !hideAll && <CornersFrame />}
      <div
        className={cx(styles.children, childrenClassName)}
        style={{ padding: `${padding}px` }}
      >
        {children}
      </div>
    </div>
  )
}
