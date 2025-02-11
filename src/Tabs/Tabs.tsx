'use client'

import React, { useState } from 'react'
import cx from 'classnames'
import styles from './Tabs.module.scss'

interface TabButton {
  id: string
  label: string
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface TabsProps {
  items: TabButton[]
  spacing?: 'tight' | 'spaced'
  itemsHeight?: 'normal' | 'small'
  activeItem?: string
  onChange?: (id: string) => void
}

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
      className={cx(styles.root, {
        [styles.tight]: spacing === 'tight',
        [styles.spaced]: spacing === 'spaced',
      })}
    >
      {items.map((item: TabButton) => (
        <button
          key={item.id}
          type='button'
          className={cx(styles.toggleButton, {
            [styles.active]: activeItem === item.id,
            [styles.disabled]: item.disabled,
            [styles.small]: itemsHeight === 'small',
          })}
          onClick={() => handleToggle(item.id, item.disabled)}
          disabled={item.disabled}
        >
          {item.icon && (
            <span
              className={cx(styles.icon, {
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
