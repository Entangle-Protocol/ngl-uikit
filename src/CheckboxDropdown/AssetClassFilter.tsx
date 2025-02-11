import React from 'react'
import styles from './CheckboxDropdown.module.scss'
import type { AssetClassFilterProps } from './types'
import { FilterIcon } from '../icons'

export const AssetClassFilter: React.FC<AssetClassFilterProps> = ({ filterCount, onApply }) => {
  return (
    <button className={styles.filterButton} onClick={onApply}>
      <div className={styles.filterIcon}>
        <FilterIcon />
      </div>
      <span className={styles.filterText}>Filter ({filterCount})</span>
    </button>
  )
}
