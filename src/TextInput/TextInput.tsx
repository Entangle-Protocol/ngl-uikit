import React from 'react'
import styles from './TextInput.module.scss'
import clsx from 'clsx'
import { Tooltip } from '../Tooltip'
import { InfoIcon } from '../icons/InfoIcon'

/**
 * @group Components
 * @category TextInput
 */

interface TextInputButton {
  label: string
  handleClick: () => void
  disabled?: boolean
}

/**
 * Text input with optional icon and label
 */
export interface TextInputProps {
  /** Input value */
  value: string
  /** Value change handler */
  onChangeTextInput: (value: string) => void
  /** Left side icon or element */
  leftAdornment?: React.ReactNode
  /** Action button configuration */
  button?: TextInputButton
  /** Placeholder text */
  placeholder?: string
  /** Use primary style */
  primary?: boolean
  /** Label configuration */
  label?: {
    text: string
    tooltip?: string
  }
}

/**
 * Text input component
 * @example
 * ```tsx
 * <TextInput
 *   value={text}
 *   onChangeTextInput={setText}
 *   placeholder="Enter value"
 *   label={{ text: "Amount", tooltip: "Enter amount in ETH" }}
 * />
 * ```
 */
export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChangeTextInput,
  placeholder = 'e.g. 09876.3456',
  leftAdornment,
  button,
  primary = false,
  label = {
    text: '',
    tooltip: '',
  },
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && button) {
      e.preventDefault()
      button.handleClick()
    }
  }

  return (
    <div className={clsx(styles.content)}>
      {label && (
        <div className={styles.label}>
          <span>{label.text}</span>
          {label.tooltip && (
            <Tooltip content={label.tooltip}>
              <InfoIcon />
            </Tooltip>
          )}
        </div>
      )}

      <div className={styles.inputWrapper}>
        {leftAdornment && <div className={styles.leftAdornment}>{leftAdornment}</div>}

        <input
          type="text"
          placeholder={placeholder}
          className={clsx(styles.input, { [styles.primary]: primary })}
          value={value}
          onChange={(e) => onChangeTextInput(e.target.value)}
          onKeyPress={handleKeyPress}
        />

        {button && (
          <button className={styles.button} onClick={button.handleClick} type='button'>
            {button.label}
          </button>
        )}
      </div>
    </div>
  )
}
