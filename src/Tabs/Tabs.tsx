'use client'

import React from 'react'
import clsx from 'clsx'
import styles from './Tabs.module.scss'

/**
 * Tab button configuration
 */
interface TabButton {
  /** Unique identifier */
  id: string
  /** Display text */
  label: string
  /** Button value */
  value: string
  /** Optional icon element */
  icon?: React.ReactNode
  /** Disable tab button */
  disabled?: boolean
}

/**
 * Tabs component for navigation and content switching
 */
export interface TabsProps {
  /** Array of tab items */
  items: TabButton[]
  /** Tab spacing style */
  spacing?: 'tight' | 'spaced'
  /** Tab height style */
  itemsHeight?: 'normal' | 'small'
  /** Currently active tab id */
  activeItem?: string
  /** Tab change handler */
  onChange?: (id: string) => void
}

/**
 * Navigation tabs component
 * @example
 * ```tsx
 * <Tabs
 *   items={[
 *     { id: 'tab1', label: 'First Tab', value: '1' },
 *     { id: 'tab2', label: 'Second Tab', value: '2' }
 *   ]}
 *   activeItem="tab1"
 *   onChange={(id) => setActiveTab(id)}
 * />
 * ```
 */
export const Tabs: React.FC<TabsProps> = ({
  items,
  spacing = 'spaced',
  itemsHeight = 'normal',
  activeItem,
  onChange,
}) => {
  const handleToggle = (id: string, disabled?: boolean) => {
    if (disabled) {
      return
    }
    onChange?.(id)
  }

  return (
    <div
      className={clsx(styles.root, {
        [styles.tight]: spacing === 'tight',
        [styles.spaced]: spacing === 'spaced',
      })}
    >
      {items?.map((item: TabButton) => (
        <button
          key={item.id}
          type='button'
          className={clsx(styles.toggleButton, {
            [styles.active]: activeItem === item.id,
            [styles.disabled]: item.disabled,
            [styles.small]: itemsHeight === 'small',
          })}
          onClick={() => handleToggle(item.id, item.disabled)}
          disabled={item.disabled}
        >
          {item.icon && (
            <span
              className={clsx(styles.icon, {
                [styles.active]: activeItem === item.id,
                [styles.disabled]: item.disabled,
              })}
            >
              {item.icon}
            </span>
          )}
          <span>{item.label}</span>
        </button>
      ))}
    </div>
  )
}
