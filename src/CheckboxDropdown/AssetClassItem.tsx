import React from 'react'
import styles from './CheckboxDropdown.module.scss'
import type { AssetClassItemProps } from './types'
import * as Checkbox from '@radix-ui/react-checkbox'
import { CheckboxIcon } from '../icons'
import Image from 'next/image'

export const AssetClassItem: React.FC<AssetClassItemProps> = ({
  label,
  count,
  isChecked,
  onCheckboxChange,
}) => {
  const handleClick = () => {
    onCheckboxChange(label)
  }

  return (
    <div onClick={handleClick} className={styles.assetItem}>
      <div className={styles.containerCheckbox}>
        <Checkbox.Root
          className={styles.checkbox}
          checked={isChecked}
          onCheckedChange={handleClick}
        >
          <Checkbox.Indicator>
            {isChecked && <Image src={CheckboxIcon} alt='checkbox' width={20} height={20} />}
          </Checkbox.Indicator>
        </Checkbox.Root>
        <span className={styles.assetLabel}>{label}</span>
      </div>
      <span className={styles.assetCount}>{count}</span>
    </div>
  )
}
