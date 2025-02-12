import React from 'react'
import { CornersFrame } from './CornersFrame'

export default {
  title: 'Components/CornersFrame',
  component: CornersFrame,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    width: { control: 'text' },
    height: { control: 'text' },
    borderWidth: { control: 'text' },
    borderColor: { control: 'text' },
  },
}

export const Default = {
  args: {
    width: '32px',
    height: '32px',
  },
}

export const CustomBorder = {
  args: {
    width: '48px',
    height: '48px',
    borderWidth: '2px',
    borderColor: '#6E56F8',
  },
} 
