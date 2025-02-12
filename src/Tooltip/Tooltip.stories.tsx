import React from 'react'
import { Tooltip } from './Tooltip'

export default {
  title: 'Components/Tooltip',
  component: Tooltip,
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
    content: { 
      control: 'text',
      description: 'Содержимое тултипа',
    },
    placement: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Позиция тултипа',
    },
    show: {
      control: 'boolean',
      description: 'Показывать ли тултип',
    },
  },
}

export const Default = {
  args: {
    content: 'Tooltip content',
    children: (
      <button style={{ 
        padding: '8px 16px',
        background: '#333335',
        border: '1px solid #333335',
        color: '#fff',
        cursor: 'pointer'
      }}>
        Hover me
      </button>
    ),
  },
}

export const WithLongContent = {
  args: {
    content: 'This is a longer tooltip content that explains something in more detail and might wrap to multiple lines',
    children: <span style={{ color: '#fff', textDecoration: 'underline', cursor: 'help' }}>Help text</span>,
  },
}

export const CustomPlacement = {
  args: {
    content: 'Tooltip on the right',
    placement: 'right',
    children: <div style={{ 
      width: '40px', 
      height: '40px', 
      background: '#333335',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#fff',
      cursor: 'pointer'
    }}>?</div>,
  },
}

export const WithHTML = {
  args: {
    content: (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <strong>Title</strong>
        <span>Description text</span>
        <span style={{ color: '#727273' }}>Additional info</span>
      </div>
    ),
    children: <span style={{ color: '#fff', cursor: 'help' }}>Hover for rich content</span>,
  },
} 
