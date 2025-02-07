'use client'

import React, { useState } from 'react'
import cx from 'classnames'
import styles from './ToggleGroup.module.scss'

interface ToggleButton {
  id: string
  label: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface ToggleGroupProps {
  buttons: ToggleButton[]
  spacing?: 'tight' | 'spaced'
  buttonsHeight?: 'normal' | 'small'
  activeButton?: string
  onToggle?: (id: string) => void
}

export const ToggleGroup: React.FC<ToggleGroupProps> = ({
  buttons,
  spacing = 'spaced',
  buttonsHeight = 'normal',
  activeButton,
  onToggle,
}) => {

  const handleToggle = (id: string, disabled?: boolean) => {
    if (disabled) {
      return
    }
    onToggle?.(id)
  }

  return (
    <div
      className={cx(styles.root, {
        [styles.tight]: spacing === 'tight',
        [styles.spaced]: spacing === 'spaced',
      })}
    >
      {buttons.map((button: ToggleButton) => (
        <button
          key={button.id}
          type='button'
          className={cx(styles.toggleButton, {
            [styles.active]: activeButton === button.id,
            [styles.disabled]: button.disabled,
            [styles.small]: buttonsHeight === 'small',
          })}
          onClick={() => handleToggle(button.id, button.disabled)}
          disabled={button.disabled}
        >
          {button.icon && (
            <span
              className={cx(styles.icon, {
                [styles.active]: activeButton === button.id,
                [styles.disabled]: button.disabled,
              })}
            >
              {button.icon}
            </span>
          )}
          <span>{button.label}</span>
        </button>
      ))}
    </div>
  )
}
