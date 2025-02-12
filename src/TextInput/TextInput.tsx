import React from 'react'
import styles from './TextInput.module.scss'
import cx from 'classnames'
import { Tooltip } from '../Tooltip'
import { InfoIcon } from '../icons/InfoIcon'

interface TextInputButton {
  label: string
  handleClick: () => void
  disabled?: boolean
}

interface TextInputProps {
  value: string
  onChangeTextInput: (value: string) => void
  leftAdornment?: React.ReactNode
  button?: TextInputButton
  placeholder?: string
  primary?: boolean
  label?: {
    text: string
    tooltipContent: string
  }
}

export const TextInput: React.FC<TextInputProps> = ({
  value,
  onChangeTextInput,
  leftAdornment,
  button,
  placeholder = 'e.g. 09876.3456',
  primary = false,
  label = {
    text: '',
    tooltipContent: '',
  },
}) => {
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && button) {
      e.preventDefault()
      button.handleClick()
    }
  }

  return (
    <div className={styles.content}>
      {label && (
        <div className={styles.label}>
          <span>{label.text}</span>
          {label.tooltipContent && (
            <Tooltip content={label.tooltipContent}>
              <InfoIcon />
            </Tooltip>
          )}
        </div>
      )}

      <div className={styles.inputWrapper}>
        {leftAdornment && <div className={styles.leftAdornment}>{leftAdornment}</div>}

        <input
          type='text'
          placeholder={placeholder}
          className={cx(styles.input, { [styles.primary]: primary })}
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
