import React from 'react'
import styles from './PopoverSelect.module.scss'
import { CheckOrderIcon } from '../icons'

interface PopoverSelectItemProps {
  label: string
  isSelected?: boolean
  onClick: () => void
  id: number | string
}

export const PopoverSelectItem: React.FC<PopoverSelectItemProps> = ({
  label,
  isSelected,
  onClick,
  id,
}) => {
  const itemClass = isSelected ? styles.selectedItem : styles.orderItem

  return (
    <div
      className={itemClass}
      role='button'
      onClick={onClick}
      tabIndex={typeof id === 'number' ? id : 0}
    >
      <div className={styles.orderItemContent}>
        {isSelected ? <CheckOrderIcon /> : <div className={styles.block} />}
        <div>{label}</div>
      </div>
    </div>
  )
}
