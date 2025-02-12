import React from 'react'
import { Tabs } from './Tabs'

export default {
  title: 'Components/Tabs',
  component: Tabs,
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
    spacing: {
      control: 'radio',
      options: ['tight', 'spaced'],
      description: 'Отступы между табами',
    },
    itemsHeight: {
      control: 'radio',
      options: ['normal', 'small'],
      description: 'Размер табов',
    },
  },
}

const defaultItems = [
  { id: 'tab1', label: 'Overview', value: 'overview' },
  { id: 'tab2', label: 'Details', value: 'details' },
  { id: 'tab3', label: 'History', value: 'history' },
]

export const Default = {
  args: {
    items: defaultItems,
    activeItem: 'tab1',
    onChange: (id: string) => console.log('Tab changed:', id),
  },
}

export const WithIcons = {
  args: {
    items: [
      { 
        id: 'chart', 
        label: 'Chart View', 
        value: 'chart', 
        icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 2h12v12H2z" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      },
      { 
        id: 'list', 
        label: 'List View', 
        value: 'list', 
        icon: <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M2 4h12M2 8h12M2 12h12" stroke="currentColor" strokeWidth="1.5"/>
        </svg>
      },
    ],
    activeItem: 'chart',
    onChange: (id: string) => console.log('Tab changed:', id),
  },
}

export const Small = {
  args: {
    items: defaultItems,
    activeItem: 'tab1',
    itemsHeight: 'small',
    onChange: (id: string) => console.log('Tab changed:', id),
  },
}

export const Tight = {
  args: {
    items: defaultItems,
    activeItem: 'tab2',
    spacing: 'tight',
    onChange: (id: string) => console.log('Tab changed:', id),
  },
}

export const WithDisabled = {
  args: {
    items: [
      { id: 'tab1', label: 'Active', value: 'active' },
      { id: 'tab2', label: 'Disabled', value: 'disabled', disabled: true },
      { id: 'tab3', label: 'Available', value: 'available' },
    ],
    activeItem: 'tab1',
    onChange: (id: string) => console.log('Tab changed:', id),
  },
} 
