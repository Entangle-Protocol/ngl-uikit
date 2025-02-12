import React from 'react'
import Tippy from '@tippyjs/react'
import styles from './Tooltip.module.scss'

export interface TooltipProps {
  children: React.ReactNode
  content: React.ReactNode | string
  show?: boolean
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  show = true,
  placement = 'top',
}) => {
  return (
    <Tippy
      content={show ? content : ''}
      placement={placement}
      className={show ? styles.tooltip : ''}
      arrow={false}
    >
      <span>{children}</span>
    </Tippy>
  )
}
