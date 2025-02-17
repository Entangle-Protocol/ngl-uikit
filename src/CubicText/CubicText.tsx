import React from 'react'
import styles from './CubicText.module.scss'

/**
 * Text with cubic animation effect
 */

export interface CubicTextProps {
  /** Text content to be animated */
  content: string
}

/**
 * Animated text component
 * @example
 * ```tsx
 * <CubicText content="Hello World" />
 * ```
 */

export const CubicText: React.FC<CubicTextProps> = ({ content }) => {
  const words = content.split(' ').filter((word) => word.length > 0)

  return (
    <div className={styles.root}>
      {words.map((word, index) => (
        <div key={index} className={styles.word}>
          {word}
        </div>
      ))}
    </div>
  )
}
