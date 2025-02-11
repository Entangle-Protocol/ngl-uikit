import React from 'react'
import styles from './PopoverSelect.module.scss'
import { CheckOrderIcon } from '../icons'

interface PopoverSelectItemProps {
  label: string
  isSelected?: boolean
  hasCheck?: boolean
  hasCursor?: boolean
  onClick: () => void
  id: number | string
}

export const PopoverSelectItem: React.FC<PopoverSelectItemProps> = ({
  label,
  isSelected,
  hasCheck,
  hasCursor,
  onClick,
  id,
}) => {
  const itemClass = isSelected ? styles.selectedItem : styles.orderItem

  return (
    <div className={itemClass} role='button' onClick={onClick} tabIndex={typeof id === 'number' ? id : 0}>
      <div className={styles.orderItemContent}>
        {hasCheck ? (
          <CheckOrderIcon />
        ) : (
          <div className={styles.block} />
        )}
        <div>{label}</div>
      </div>
      {hasCursor && <i className={styles.cursorIcon} />}
    </div>
  )
}
