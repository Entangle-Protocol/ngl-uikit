'use client'

import React, { useState, type ReactNode } from 'react'
import styles from './Expander.module.scss'
import clsx from 'clsx'
import { CornersFrame } from '../CornersFrame'
import { DropdownIcon } from '../icons'
import { InfoIcon } from '../icons/InfoIcon'
import { Tooltip } from '../Tooltip'

/**
 * Expandable section with header and animated content
 */
export interface ExpanderProps {
  /** Section title */
  title: string
  /** Optional tooltip text */
  tooltipContent?: string
  /** Additional value displayed in header */
  rightValue?: string
  /** Disable border in closed state */
  containerNoBorder?: boolean
  /** Expandable content */
  children: ReactNode
}

/**
 * Collapsible section component
 * @example
 * ```tsx
 * <Expander title="Settings" tooltipContent="Additional settings">
 *   <div>Expandable content</div>
 * </Expander>
 * ```
 */
export const Expander: React.FC<ExpanderProps> = ({
  title,
  tooltipContent = '',
  rightValue = '',
  containerNoBorder = false,
  children,
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <div
      className={clsx(
        styles.root,
        { [styles.borderNoOpen]: !isOpen },
        { [styles.containerOpen]: isOpen }
      )}
    >
      <div
        onClick={handleOpen}
        className={clsx(
          styles.header,
          { [styles.defaultBorder]: true }
        )}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerContentMobile}>
            <div className={styles.title}>{title}</div>

            {tooltipContent && (
              <Tooltip content={tooltipContent}>
                <InfoIcon />
              </Tooltip>
            )}

            <div className={styles.selectedCount}>{isOpen ? '' : rightValue}</div>
            <div className={clsx(styles.arrowStyle, { [styles.rotate]: isOpen })}>
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={clsx(styles.content, { [styles.contentOpen]: isOpen })}>{children}</div>
      {isOpen && <CornersFrame borderColor={styles.bordeColor} width='16px' height='16px' />}
    </div>
  )
}
