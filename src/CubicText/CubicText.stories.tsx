import React from 'react'
import { CubicText } from './CubicText'

export default {
  title: 'Components/CubicText',
  component: CubicText,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    content: { control: 'text' },
  },
}

export const Default = {
  args: {
    content: 'Simple cubic text example',
  },
}

export const LongText = {
  args: {
    content: 'This is a longer text that will be split into multiple cubic segments',
  },
}

export const SingleWord = {
  args: {
    content: 'SINGLE',
  },
} 
