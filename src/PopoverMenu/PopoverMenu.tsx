'use client'
import React, { useEffect, useRef, useState } from 'react'
import styles from './PopoverMenu.module.scss'
import { OptionDotsIcon } from '../icons'

interface PopoverMenuItem {
  id: number | string
  text: string
  type: 'link' | 'button'
  action: string | (() => void)
  icon?: React.ReactNode
}

interface PopoverMenuProps {
  actions: PopoverMenuItem[]
  buttonIcon?: React.ReactNode
}

export const PopoverMenu: React.FC<PopoverMenuProps> = ({
  actions,
  buttonIcon = <OptionDotsIcon />
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)

  if (!actions.length) {
    return null
  }

  const handleToggle = () => {
    setIsOpen(prev => !prev)
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

  const renderAction = (action: PopoverMenuItem) =>
    action.type === 'link' ? (
      <a
        key={action.id}
        href={action.action as string}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.menuItem}
      >
        <span>{action.text}</span>
        {action.icon}
      </a>
    ) : (
      <button
        key={action.id}
        className={styles.menuItem}
        onClick={action.action as () => void}
      >
        <span>{action.text}</span>
        {action.icon}
      </button>
    )
    
  return (
    <div className={styles.root} ref={menuRef}>
      <button className={styles.actionButton} onClick={handleToggle}>
        {buttonIcon}
      </button>
      {isOpen && (
        <div className={styles.menuDropdown}>
          {actions.map(renderAction)}
        </div>
      )}
    </div>
  )
}
