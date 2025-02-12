import React from 'react'
import styles from './CheckboxDropdown.module.scss'
import type { AssetClassItemProps } from './types'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckboxIcon } from '../icons'

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
        <Checkbox.Root className={styles.checkbox} checked={isChecked}>
          <Checkbox.Indicator>{isChecked && <CheckboxIcon />}</Checkbox.Indicator>
        </Checkbox.Root>
        <span className={styles.assetLabel}>{label}</span>
      </div>
      <span className={styles.assetCount}>{count}</span>
    </button>
  )
}
