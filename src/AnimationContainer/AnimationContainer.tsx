import React from 'react'

import clsx from 'clsx'
import styles from './AnimationContainer.module.scss'
import { CornersFrame } from '../CornersFrame'

/**
 * Container with animated grid background and corner decorations
 */

export interface AnimationContainerProps {
  /** Number of vertical grid lines */
  columns?: number
  /** Number of horizontal grid lines */
  rows?: number
  /** Show corner decorations */
  corners?: boolean
  /** Inner padding in pixels */
  padding?: number
  /** Additional container class name */
  className?: string
  /** Additional children wrapper class name */
  childrenClassName?: string
  /** Hide grid and corners */
  hideAll?: boolean
  /** Container content */
  children: React.ReactNode
}

/**
 * Animated container with grid background
 * @example
 * ```tsx
 * <AnimationContainer columns={3} rows={2} corners>
 *   <div>Container content</div>
 * </AnimationContainer>
 * ```
 */
export const AnimationContainer: React.FC<AnimationContainerProps> = ({
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
    <div className={clsx(styles.root, className)}>
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
        className={clsx(styles.children, childrenClassName)}
        style={{ padding: `${padding}px` }}
      >
        {children}
      </div>
    </div>
  )
}
