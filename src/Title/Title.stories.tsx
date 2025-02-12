import React from 'react'
import { Title } from './Title'

export default {
  title: 'Components/Title',
  component: Title,
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
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'Размер и стиль заголовка',
    },
    color: {
      control: 'select',
      options: ['white', 'black', 'gray'],
      description: 'Цвет заголовка',
    },
  },
}

export const Default = {
  args: {
    children: 'Default Title',
    variant: 'h1',
    color: 'white',
  },
}

export const Colors = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title variant="h2" color="white">White Title</Title>
      <Title variant="h2" color="black">Black Title</Title>
      <Title variant="h2" color="gray">Gray Title</Title>
    </div>
  ),
}

export const AllVariants = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Title variant="h1">Heading Level 1</Title>
      <Title variant="h2">Heading Level 2</Title>
      <Title variant="h3">Heading Level 3</Title>
      <Title variant="h4">Heading Level 4</Title>
      <Title variant="h5">Heading Level 5</Title>
      <Title variant="h6">Heading Level 6</Title>
    </div>
  ),
}

export const WithLongText = {
  args: {
    variant: 'h2',
    children: 'This is a very long title that might wrap to multiple lines to test how it looks',
    color: 'white',
  },
} 
