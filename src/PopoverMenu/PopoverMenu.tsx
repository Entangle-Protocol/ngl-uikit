'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './PopoverMenu.module.scss'
import { OptionDotsIcon } from '../icons'
import clsx from 'clsx'

/**
 * Menu item configuration
 */

interface PopoverMenuItem {
  /** Unique identifier */
  id: number | string
  /** Menu item text */
  text: string
  /** Item type - link or button */
  type: 'link' | 'button'
  /** Click handler or URL */
  action: string | (() => void)
  /** Optional icon element */
  icon?: React.ReactNode
}

/**
 * Dropdown menu with custom actions
 */

export interface PopoverMenuProps {
  /** Array of menu items */
  actions: PopoverMenuItem[]
  /** Custom trigger button icon */
  buttonIcon?: React.ReactNode
}

/**
 * Popover menu component
 * @example
 * ```tsx
 * <PopoverMenu
 *   actions={[
 *     { id: 1, text: 'Edit', type: 'button', action: () => {} },
 *     { id: 2, text: 'View', type: 'link', action: '/view' }
 *   ]}
 * />
 * ```
 */

export const PopoverMenu: React.FC<PopoverMenuProps> = ({
  actions,
  buttonIcon = <OptionDotsIcon />,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  const handleToggle = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  if (!actions.length) {
    return null
  }

  const handleItemClick = (action: PopoverMenuItem) => {
    if (action.type === 'button' && typeof action.action === 'function') {
      action.action()
    }
    setIsOpen(false)
  }

  const renderAction = (action: PopoverMenuItem) =>
    action.type === 'link' ? (
      <a
        key={action.id}
        href={action.action as string}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.menuItem}
        onClick={() => setIsOpen(false)}
      >
        {action.icon}
        <span>{action.text}</span>
      </a>
    ) : (
      <button
        key={action.id}
        className={styles.menuItem}
        onClick={() => handleItemClick(action)}
      >
        {action.icon}
        <span>{action.text}</span>
      </button>
    )

  return (
    <div className={styles.root} ref={menuRef}>
      <button
        className={clsx(styles.actionButton, { [styles.active]: isOpen })}
        onClick={handleToggle}
      >
        {buttonIcon}
      </button>
      {isOpen && <div className={styles.menuDropdown}>{actions.map(renderAction)}</div>}
    </div>
  )
}
