'use client'

import React, { ReactNode, useState } from 'react'
import styles from './Expander.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import { CornersFrame } from '../CornersFrame'
import { DropdownIcon } from '../icons'
import { InfoIcon } from '../icons/InfoIcon'
import { Tooltip } from '../Tooltip'

interface ExpanderProps {
  title: string
  tooltipContent?: string
  rightValue?: string
  containerNoBorder?: boolean
  children: ReactNode
}

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
      className={cx(
        styles.root,
        { [styles.borderNoOpen]: !isOpen },
        { [styles.containerOpen]: isOpen }
      )}
    >
      <div
        onClick={handleOpen}
        className={cx(
          styles.header,
          { [styles.noBorder]: !isOpen },
          { [styles.defaultBorder]: containerNoBorder && isOpen }
        )}
      >
        <div className={styles.headerContent}>
          <div className={styles.headerContentMobile}>
            <div className={styles.title}>{title}</div>

            {tooltipContent && (
              <Tooltip
                content={tooltipContent}
              >
                <InfoIcon />
              </Tooltip>
            )}
          </div>

          <div className={styles.headerContentMobile}>
              <div className={styles.selectedCount}>{isOpen ? '' : rightValue}</div>
            <div className={isOpen ? styles.arrowStyle : ''}>
              <DropdownIcon />
            </div>
          </div>
        </div>
      </div>

      <div className={cx(styles.content, { [styles.contentOpen]: isOpen })}>{children}</div>
      {isOpen && <CornersFrame borderColor={styles.bordeColor} width='16px' height='16px' />}
    </div>
  )
}
