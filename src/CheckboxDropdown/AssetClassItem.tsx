import React from 'react'
import styles from './AssetClassDropdown.module.scss'
import type { AssetClassItemProps } from './types'
import Checkbox from 'react-custom-checkbox'
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
        <Checkbox
          size={20}
          icon={
            <div
              className={styles.checkbox}
              style={{
                display: 'flex',
                flex: 1,
                alignSelf: 'stretch',
                backgroundColor: '#EFEFF0',
                alignItems: 'center',
                width: '20px',
                height: '20px',
                borderRadius: '5px',
              }}
            >
              <Image src={CheckboxIcon} alt='checkbox' width={20} height={20} />
            </div>
          }
          borderColor={`${isChecked ? '' : '#EFEFF0'}`}
          borderWidth={isChecked ? 0 : 2}
          checked={isChecked}
          onChange={handleClick}
          onClick={handleClick}
        />
        <span className={styles.assetLabel}>{label}</span>
      </div>
      <span className={styles.assetCount}>{count}</span>
    </div>
  )
}
