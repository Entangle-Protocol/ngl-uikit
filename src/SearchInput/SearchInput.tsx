import React from 'react'
import styles from './SearchInput.module.scss'
import { SearchIcon } from '../icons'

export interface SearchInputProps {
  placeholder: string
  value: string
  onSearch: (value: string) => void
}

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
