import React from 'react'
import { TextInput } from './TextInput'

export default {
  title: 'Components/TextInput',
  component: TextInput,
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
    value: { control: 'text' },
    placeholder: { control: 'text' },
    primary: { control: 'boolean' },
  },
}

export const Default = {
  args: {
    value: '',
    placeholder: 'e.g. 09876.3456',
    onChangeTextInput: (value: string) => console.log('Changed:', value),
  },
}

export const WithLabel = {
  args: {
    value: '',
    placeholder: 'Enter amount',
    label: {
      text: 'Amount',
      tooltipContent: 'Enter the amount you want to transfer',
    },
    onChangeTextInput: (value: string) => console.log('Changed:', value),
  },
}

export const WithLeftAdornment = {
  args: {
    value: '1234.56',
    leftAdornment: <span style={{ color: '#727273' }}>$</span>,
    onChangeTextInput: (value: string) => console.log('Changed:', value),
  },
}

export const WithButton = {
  args: {
    value: '100',
    placeholder: 'Enter amount',
    button: {
      label: 'MAX',
      handleClick: () => console.log('MAX clicked'),
    },
    onChangeTextInput: (value: string) => console.log('Changed:', value),
  },
}

export const Primary = {
  args: {
    value: '1234.56',
    primary: true,
    placeholder: 'Enter amount',
    onChangeTextInput: (value: string) => console.log('Changed:', value),
  },
}

export const ComplexExample = {
  args: {
    value: '1234.56',
    primary: true,
    placeholder: 'Enter amount',
    leftAdornment: <span style={{ color: '#727273' }}>$</span>,
    button: {
      label: 'MAX',
      handleClick: () => console.log('MAX clicked'),
    },
    label: {
      text: 'Amount to deposit',
      tooltipContent: 'Maximum amount you can deposit is $10,000',
    },
    onChangeTextInput: (value: string) => console.log('Changed:', value),
  },
} 
