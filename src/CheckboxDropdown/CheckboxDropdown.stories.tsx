import React from 'react'
import { CheckboxDropdown } from './CheckboxDropdown'

export default {
  title: 'Components/CheckboxDropdown',
  component: CheckboxDropdown,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#141416' },
      ],
    },
  },
  argTypes: {
    label: { control: 'text' },
    withSearch: { control: 'boolean' },
    searchPlaceholder: { control: 'text' },
  },
}

const mockItems = [
  { label: 'Bitcoin', value: 'BTC', count: 125 },
  { label: 'Ethereum', value: 'ETH', count: 89 },
  { label: 'Solana', value: 'SOL', count: 45 },
  { label: 'Cardano', value: 'ADA', count: 67 },
  { label: 'Polkadot', value: 'DOT', count: 34 },
]

export const Default = {
  args: {
    label: 'Asset Class',
    items: mockItems,
    action: (selectedItems: string[]) => console.log('Selected:', selectedItems),
  },
}

export const WithSearch = {
  args: {
    label: 'Select Assets',
    items: mockItems,
    withSearch: true,
    searchPlaceholder: 'Search assets...',
    action: (selectedItems: string[]) => console.log('Selected:', selectedItems),
  },
}

export const Empty = {
  args: {
    label: 'No Items',
    items: [],
    action: (selectedItems: string[]) => console.log('Selected:', selectedItems),
  },
}

export const ManyItems = {
  args: {
    label: 'Many Items',
    items: [
      ...mockItems,
      { label: 'Avalanche', value: 'AVAX', count: 23 },
      { label: 'Polygon', value: 'MATIC', count: 56 },
      { label: 'Chainlink', value: 'LINK', count: 78 },
      { label: 'Uniswap', value: 'UNI', count: 91 },
      { label: 'Aave', value: 'AAVE', count: 44 },
    ],
    withSearch: true,
    action: (selectedItems: string[]) => console.log('Selected:', selectedItems),
  },
} 
