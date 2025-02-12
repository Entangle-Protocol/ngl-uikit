import React from 'react'
import { Expander } from './Expander'

export default {
  title: 'Components/Expander',
  component: Expander,
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
    title: { 
      control: 'text',
      description: 'Заголовок раскрывающегося блока',
    },
    tooltipContent: { 
      control: 'text',
      description: 'Текст подсказки (если нужна)',
    },
    rightValue: {
      control: 'text',
      description: 'Значение справа от заголовка',
    },
    containerNoBorder: {
      control: 'boolean',
      description: 'Убрать рамку у контейнера',
    },
  },
}

export const Default = {
  args: {
    title: 'TRANSACTION DETAILS',
    children: (
      <div style={{ color: '#D0D0D1', fontSize: '14px', lineHeight: '20px' }}>
        Expanded content goes here
      </div>
    ),
  },
}

export const WithTooltip = {
  args: {
    title: 'APY',
    tooltipContent: 'Annual Percentage Yield (APY) is the normalized...',
    children: (
      <div style={{ color: '#D0D0D1', fontSize: '14px', lineHeight: '20px' }}>
        Current APY: 12.5%
      </div>
    ),
  },
}

export const WithRightValue = {
  args: {
    title: 'TOTAL VALUE',
    rightValue: '$1,234.56',
    children: (
      <div style={{ color: '#D0D0D1', fontSize: '14px', lineHeight: '20px' }}>
        <div>Asset 1: $734.56</div>
        <div>Asset 2: $500.00</div>
      </div>
    ),
  },
}

export const NoBorder = {
  args: {
    title: 'SETTINGS',
    containerNoBorder: true,
    children: (
      <div style={{ color: '#D0D0D1', fontSize: '14px', lineHeight: '20px' }}>
        Settings content
      </div>
    ),
  },
}

export const ComplexContent = {
  args: {
    title: 'PORTFOLIO BREAKDOWN',
    rightValue: '3 assets',
    tooltipContent: 'Detailed breakdown of your portfolio assets',
    children: (
      <div style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '12px',
        color: '#D0D0D1', 
        fontSize: '14px', 
        lineHeight: '20px'
      }}>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Bitcoin (BTC)</span>
          <span>45%</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Ethereum (ETH)</span>
          <span>35%</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span>Solana (SOL)</span>
          <span>20%</span>
        </div>
      </div>
    ),
  },
} 
