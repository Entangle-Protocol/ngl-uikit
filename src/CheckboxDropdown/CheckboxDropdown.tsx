'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './CheckboxDropdown.module.scss'
import { AssetClassItem } from './AssetClassItem'
import { AssetClassFilter } from './AssetClassFilter'
import { DropdownIcon } from '../icons'
import { SearchInput } from '../SearchInput/SearchInput'
import cx from 'classnames'

interface CheckboxDropdownProps {
  label: string
  items: { label: string; value: string; count: number }[]
  action: (selectedItems: string[]) => void
  withSearch?: boolean
  searchPlaceholder?: string
}

export const CheckboxDropdown: React.FC<CheckboxDropdownProps> = ({
  label,
  items,
  action,
  withSearch = false,
  searchPlaceholder = '',
}) => {
  const [selectedAssets, setSelectedAssets] = useState<string[]>([])
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement | null>(null)

  const handleOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleCheckboxChange = (label: string) => {
    setSelectedAssets((prev) =>
      prev.includes(label) ? prev.filter((item) => item !== label) : [...prev, label]
    )
  }

  const handleApplyFilter = () => {
    action(selectedAssets)
    setIsOpen(false)
  }

  const filteredAssets = useMemo(() => {
    return items.filter((item) => item.label.toLowerCase().includes(searchTerm.toLowerCase()))
  }, [items, searchTerm])

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
    <div ref={dropdownRef} className={styles.root}>
      <div onClick={handleOpen} className={styles.dropdownBtn}>
        <div className={styles.textDropdown}>
          {label} ({items.length})
        </div>
        <div className={cx(styles.arrowStyle, { [styles.rotate]: isOpen })}>
          <DropdownIcon />
        </div>
      </div>
      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.container}>
            {withSearch && items.length > 4 && (
              <SearchInput
                placeholder={searchPlaceholder ?? 'Search Asset Class'}
                value={searchTerm}
                onSearch={setSearchTerm}
              />
            )}

            <div className={styles.assetList}>
              {filteredAssets?.map((asset, index) => (
                <AssetClassItem
                  key={index}
                  label={asset.label}
                  count={asset.count}
                  isChecked={selectedAssets.includes(asset.label)}
                  onCheckboxChange={handleCheckboxChange}
                />
              ))}
            </div>
            <AssetClassFilter
              filterCount={selectedAssets.length}
              onApply={handleApplyFilter}
            />
          </div>
        </div>
      )}
    </div>
  )
}
