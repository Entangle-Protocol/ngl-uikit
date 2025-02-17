import React from 'react'
import styles from './SearchInput.module.scss'
import { SearchIcon } from '../icons'

/**
 * Search input with icon and debounced onChange
 */

export interface SearchInputProps {
  /** Input placeholder text */
  placeholder?: string
  /** Current input value */
  value: string
  /** Search callback function */
  onSearch: (value: string) => void
}

/**
 * Search input component
 * @example
 * ```tsx
 * <SearchInput
 *   placeholder="Search..."
 *   value={searchTerm}
 *   onSearch={setSearchTerm}
 * />
 * ```
 */

export const SearchInput: React.FC<SearchInputProps> = ({ placeholder, value, onSearch }) => {
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value)
  }

  return (
    <div className={styles.root}>
      <div className={styles.searchBar}>
        <div className={styles.searchIcon}>
          <SearchIcon />
        </div>
        <input
          type='text'
          value={value}
          onChange={handleSearchChange}
          placeholder={placeholder}
          className={styles.searchInput}
        />
      </div>
    </div>
  )
}
