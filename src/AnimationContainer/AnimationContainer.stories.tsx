import React from 'react'
import { AnimationContainer } from './AnimationContainer'

export default {
  title: 'Components/AnimationContainer',
  component: AnimationContainer,
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
    columns: {
      control: 'number',
      description: 'Количество колонок в сетке',
    },
    rows: {
      control: 'number', 
      description: 'Количество строк в сетке',
    },
    padding: {
      control: 'number',
      description: 'Внутренние отступы контейнера',
    },
    withCorners: {
      control: 'boolean',
      description: 'Показывать ли уголки',
    },
  },
}

export const Default = {
  args: {
    columns: 3,
    rows: 2,
    padding: 24,
    withCorners: true,
    children: (
      <div style={{ 
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#D0D0D1',
        fontSize: '14px',
        lineHeight: '20px'
      }}>
        Анимированный контент
      </div>
    ),
  },
}

export const WithoutCorners = {
  args: {
    columns: 2,
    rows: 2,
    padding: 16,
    withCorners: false,
    children: (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '16px',
        color: '#D0D0D1'
      }}>
        <div>Блок 1</div>
        <div>Блок 2</div>
        <div>Блок 3</div>
        <div>Блок 4</div>
      </div>
    ),
  },
}

export const LargeGrid = {
  args: {
    columns: 4,
    rows: 3,
    padding: 32,
    withCorners: true,
    children: (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gridTemplateRows: 'repeat(3, 1fr)',
        gap: '16px',
        color: '#D0D0D1'
      }}>
        {Array(12).fill(null).map((_, i) => (
          <div key={i} style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#202020',
            padding: '8px'
          }}>
            Item {i + 1}
          </div>
        ))}
      </div>
    ),
  },
} 
