import React from 'react'
import { BoxText } from './BoxText'

export default {
  title: 'Components/BoxText',
  component: BoxText,
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

export const WithString = {
  args: {
    children: '0.0012',
  },
}

export const WithLongString = {
  args: {
    children: '1234567.89',
  },
}

export const WithComponent = {
  args: {
    children: (
      <div style={{ color: '#fff', display: 'flex', alignItems: 'center', gap: '4px' }}>
        <span>$</span>
        <span>1,234.56</span>
      </div>
    ),
  },
}

export const WithSmallText = {
  args: {
    children: '0.000000001',
  },
} 
