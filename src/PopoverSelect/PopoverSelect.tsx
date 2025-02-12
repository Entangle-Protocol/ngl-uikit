'use client'
import React, { useEffect, useRef } from 'react'
import styles from './PopoverSelect.module.scss'
import { PopoverSelectItem } from './PopoverSelectItem'
import { DropdownOrderIcon } from '../icons'
import cx from 'classnames'
interface PopoverSelectItem {
  id: number | string
  label: string
  hasCheck?: boolean
  hasCursor?: boolean
}

interface PopoverSelectProps {
  label: string
  items: PopoverSelectItem[]
  activeId?: number | string | null
  action: (id: number | string) => void
  buttonIcon?: React.ReactNode
}

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
        className={cx(styles.actionButton, { [styles.active]: isOpen })}
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
