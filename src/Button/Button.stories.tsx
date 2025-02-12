import React from 'react'
import { Button } from './Button'

export default {
  title: 'Components/Button',
  component: Button,
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
    primary: { control: 'boolean' },
    disabled: { control: 'boolean' },
    fullWidth: { control: 'boolean' },
    onClick: { action: 'clicked' },
  },
}

export const Primary = {
  args: {
    children: 'Primary Button',
    primary: true,
    onClick: () => console.log('clicked'),
  },
}

export const Secondary = {
  args: {
    children: 'Secondary Button',
    primary: false,
    onClick: () => console.log('clicked'),
  },
}

export const FullWidth = {
  args: {
    children: 'Full Width Button',
    primary: true,
    fullWidth: true,
    onClick: () => console.log('clicked'),
  },
}

export const Disabled = {
  args: {
    children: 'Disabled Button',
    primary: true,
    disabled: true,
    onClick: () => console.log('clicked'),
  },
}

export const WithLongText = {
  args: {
    children: 'This is a very long button text to test wrapping behavior',
    primary: true,
    onClick: () => console.log('clicked'),
  },
} 
