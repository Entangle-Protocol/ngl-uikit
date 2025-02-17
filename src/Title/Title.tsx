import React from 'react'
import styles from './Title.module.scss'
import clsx from 'clsx'

/**
 * Heading component with customizable styles
 */
type TitleVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TitleColor = 'white' | 'black' | 'gray'

/**
 * Title component props
 */
export interface TitleProps {
  /** Title content */
  children: React.ReactNode
  /** Heading level */
  variant?: TitleVariant
  /** Text color */
  color?: TitleColor
  /** Additional class name */
  className?: string
}

const variantToElement: Record<TitleVariant, keyof React.JSX.IntrinsicElements> = {
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
}

/**
 * Title component
 * @example
 * ```tsx
 * <Title variant="h2" color="white">
 *   Section Title
 * </Title>
 * ```
 */
export const Title: React.FC<TitleProps> = ({
  children,
  variant = 'h1',
  color = 'white',
  className,
}) => {
  const Element = variantToElement[variant]

  return (
    <Element className={clsx(styles.root, styles[variant], styles[color], className)}>
      {children}
    </Element>
  )
}
