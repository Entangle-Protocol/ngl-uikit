import React from 'react'
import { SearchInput } from './SearchInput'

export default {
  title: 'Components/SearchInput',
  component: SearchInput,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    placeholder: { control: 'text' },
    value: { control: 'text' },
  },
}

export const Default = {
  args: {
    placeholder: 'Search...',
    value: '',
    onSearch: (value: string) => console.log('Search:', value),
  },
}

export const WithValue = {
  args: {
    placeholder: 'Search...',
    value: 'Initial value',
    onSearch: (value: string) => console.log('Search:', value),
  },
} 
