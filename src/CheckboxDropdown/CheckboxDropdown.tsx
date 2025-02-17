'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import styles from './CheckboxDropdown.module.scss'
import { AssetClassItem } from './AssetClassItem'
import { AssetClassFilter } from './AssetClassFilter'
import { DropdownIcon } from '../icons'
import { SearchInput } from '../SearchInput/SearchInput'
import clsx from 'clsx'

/**
 * @group Components
 * @category CheckboxDropdown
 */

/**
 * Dropdown with multiple selection and search functionality
 */

export interface CheckboxDropdownProps {
  /** Dropdown title */
  label: string
  /** Array of selectable items */
  items: { 
    /** Display text */
    label: string, 
    /** Item value */
    value: string, 
    /** Item count */
    count: number 
  }[]
  /** Selection change handler */
  action: (selectedItems: string[]) => void
  /** Enable search functionality */
  withSearch?: boolean
  /** Search input placeholder text */
  searchPlaceholder?: string
}

/**
 * Checkbox dropdown component
 * @example
 * ```tsx
 * <CheckboxDropdown
 *   label="Select Categories"
 *   items={[
 *     { label: 'Category 1', value: 'cat1', count: 5 },
 *     { label: 'Category 2', value: 'cat2', count: 3 }
 *   ]}
 *   action={(selected) => console.log(selected)}
 *   withSearch
 * />
 * ```
 */

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
        <div className={clsx(styles.arrowStyle, { [styles.rotate]: isOpen })}>
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
