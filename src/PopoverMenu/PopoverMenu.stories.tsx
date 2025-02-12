import React from 'react'
import { PopoverMenu } from './PopoverMenu'

export default {
  title: 'Components/PopoverMenu',
  component: PopoverMenu,
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
    actions: [
      { id: 1, text: 'View Details', type: 'link', action: 'https://example.com' },
      { id: 2, text: 'Delete', type: 'button', action: () => console.log('delete clicked') },
    ],
  },
}

export const WithCustomIcon = {
  args: {
    actions: [
      { id: 1, text: 'Edit', type: 'button', action: () => console.log('edit clicked') },
      { id: 2, text: 'Share', type: 'button', action: () => console.log('share clicked') },
    ],
    buttonIcon: <span>⚙️</span>,
  },
} 
