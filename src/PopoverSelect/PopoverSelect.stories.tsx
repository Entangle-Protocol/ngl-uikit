import React from 'react'
import { PopoverSelect } from './PopoverSelect'

export default {
  title: 'Components/PopoverSelect',
  component: PopoverSelect,
  parameters: {
    layout: 'centered',
    backgrounds: {
      default: 'dark',
      values: [
        { name: 'dark', value: '#141416' },
      ],
    },
  },
}

export const Default = {
  args: {
    label: 'Sort By',
    items: [
      { id: 1, label: 'Name A-Z' },
      { id: 2, label: 'Name Z-A' },
      { id: 3, label: 'Newest First' },
    ],
    activeId: 1,
    onSelect: (id: number | string) => console.log('Selected:', id),
  },
}

export const WithCustomIcon = {
  args: {
    label: 'Filter',
    items: [
      { id: 'price', label: 'Price' },
      { id: 'date', label: 'Date' },
    ],
    buttonIcon: <span>🔍</span>,
    onSelect: (id: number | string) => console.log('Selected:', id),
  },
} 
