import React, { useState, useRef, useEffect } from 'react'
import styles from './Tooltip.module.scss'
import clsx from 'clsx'

/**
 * Tooltip component for displaying additional information
 */

export interface TooltipProps {
  /** Element that triggers the tooltip */
  children: React.ReactNode
  /** Tooltip content */
  content: React.ReactNode | string
  /** Control tooltip visibility */
  show?: boolean
  /** Tooltip position */
  placement?: 'top' | 'bottom' | 'left' | 'right'
}

/**
 * Tooltip component
 * @example
 * ```tsx
 * <Tooltip content="Additional info" placement="top">
 *   <button>Hover me</button>
 * </Tooltip>
 * ```
 */

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  show = true,
  placement = 'top'
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const triggerRef = useRef<HTMLDivElement>(null)
  const tooltipRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const updateTooltipPosition = () => {
      const trigger = triggerRef.current
      const tooltip = tooltipRef.current
      
      if (!trigger || !tooltip || !isVisible) return

      const triggerRect = trigger.getBoundingClientRect()
      const tooltipRect = tooltip.getBoundingClientRect()
      
      let top = 0
      let left = 0

      switch (placement) {
        case 'top':
          top = triggerRect.top - tooltipRect.height - 8
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
          break
        case 'bottom':
          top = triggerRect.bottom + 8
          left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2
          break
        case 'left':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
          left = triggerRect.left - tooltipRect.width - 8
          break
        case 'right':
          top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2
          left = triggerRect.right + 8
          break
      }

      tooltip.style.top = `${top}px`
      tooltip.style.left = `${left}px`
    }

    window.addEventListener('scroll', updateTooltipPosition)
    window.addEventListener('resize', updateTooltipPosition)
    
    updateTooltipPosition()

    return () => {
      window.removeEventListener('scroll', updateTooltipPosition)
      window.removeEventListener('resize', updateTooltipPosition)
    }
  }, [isVisible, placement])

  if (!show) return <span>{children}</span>

  return (
    <div 
      ref={triggerRef}
      className={styles.tooltipContainer}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && (
        <div 
          ref={tooltipRef}
          className={clsx(styles.tooltip, styles[placement])}
        >
          {content}
        </div>
      )}
    </div>
  )
}
