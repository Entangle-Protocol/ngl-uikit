import React from 'react'
import styles from './CheckboxDropdown.module.scss'
import type { AssetClassItemProps } from './types'
import { CheckboxIcon } from '../icons'
import clsx from 'clsx'

/**
 * @group Components
 * @category AssetClassItem
 */

/**
 * Selectable item with checkbox for dropdown list
 */
export const AssetClassItem: React.FC<AssetClassItemProps> = ({
  label,
  count,
  isChecked,
  onCheckboxChange,
}) => {
  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation()
    onCheckboxChange(label)
  }

  return (
    <button onClick={handleClick} className={styles.assetItem}>
      <div className={styles.containerCheckbox}>
        <div className={clsx(styles.checkbox, { [styles.checked]: isChecked })}>
          {isChecked && <CheckboxIcon />}
        </div>
        <span className={styles.assetLabel}>{label}</span>
      </div>
      <span className={styles.assetCount}>{count}</span>
    </button>
  )
}
