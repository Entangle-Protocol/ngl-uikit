import React from 'react'
import styles from './Title.module.scss'
import cx from 'classnames'

type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TitleColor = 'white' | 'black' | 'gray'

interface TitleProps {
  children: React.ReactNode
  variant?: TitleVariant
  color?: TitleColor
  className?: string
}

const variantToElement: Record<TitleVariant, keyof JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6'
}

export const Title: React.FC<TitleProps> = ({
  children,
  variant = 'h1',
  color = 'white',
  className
}) => {
  const Element = variantToElement[variant]

  return (
    <Element 
      className={cx(
        styles.root,
        styles[variant],
        styles[color],
        className
      )}
    >
      {children}
    </Element>
  )
}
