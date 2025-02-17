'use client'
import React, { useEffect, useRef } from 'react'
import styles from './PopoverSelect.module.scss'
import { PopoverSelectItem } from './PopoverSelectItem'
import { DropdownOrderIcon } from '../icons'
import clsx from 'clsx'

/**
 * Configuration for select item
 */
interface PopoverSelectItem {
  /** Unique identifier */
  id: number | string
  /** Item display text */
  label: string
  /** Show checkmark */
  hasCheck?: boolean
  /** Show cursor */
  hasCursor?: boolean
}

/**
 * Dropdown select with custom items
 */

export interface PopoverSelectProps {
  /** Dropdown label */
  label: string
  /** List of selectable items */
  items: PopoverSelectItem[]
  /** Currently selected item id */
  activeId?: number | string | null
  /** Selection change handler */
  action: (id: number | string) => void
  /** Custom dropdown icon */
  buttonIcon?: React.ReactNode
}

/**
 * Dropdown select component
 * @example
 * ```tsx
 * <PopoverSelect
 *   label="Sort by"
 *   items={[
 *     { id: 1, label: 'Name' },
 *     { id: 2, label: 'Date' }
 *   ]}
 *   activeId={1}
 *   action={(id) => handleSort(id)}
 * />
 * ```
 */

export const PopoverSelect: React.FC<PopoverSelectProps> = ({
  label,
  items,
  activeId,
  action,
  buttonIcon = <DropdownOrderIcon />,
}) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleItemClick = (id: number | string) => {
    action(id)
    setIsOpen(false)
  }

  const handleOpenClick = () => {
    setIsOpen((prev) => !prev)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className={styles.root} ref={dropdownRef}>
      <div
        className={clsx(styles.actionButton, { [styles.active]: isOpen })}
        onClick={handleOpenClick}
      >
        {buttonIcon}
      </div>
      {isOpen && (
        <div className={styles.dropdown} role='listbox'>
          <div className={styles.heading}>{label}</div>
          {items.map((item) => (
            <PopoverSelectItem
              key={item.id}
              label={item.label}
              isSelected={activeId === item.id}
              onClick={() => handleItemClick(item.id)}
              id={item.id}
            />
          ))}
        </div>
      )}
    </div>
  )
}
