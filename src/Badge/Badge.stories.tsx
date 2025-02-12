import React from 'react'
import { Badge } from './Badge'

export default {
  title: 'Components/Badge',
  component: Badge,
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
    variant: {
      control: 'select',
      options: ['success', 'warning', 'deposit', 'expiring'],
      description: 'Предустановленные варианты стилей',
    },
    color: {
      control: 'text',
      description: 'Кастомный цвет (если не выбран variant)',
    },
  },
}

export const Success = {
  args: {
    variant: 'success',
    children: 'Active',
  },
}

export const Warning = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Deposit = {
  args: {
    variant: 'deposit',
    children: 'Deposit',
  },
}

export const Expiring = {
  args: {
    variant: 'expiring',
    children: 'Expiring',
  },
}

export const CustomColor = {
  args: {
    color: '#6E56F8',
    children: 'Custom Badge',
  },
} 
