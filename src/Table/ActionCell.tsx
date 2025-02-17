import React, { memo } from 'react'
import Image from 'next/image'
import type { ActionItem } from './Table'
import styles from './Table.module.scss'

/**
 * @group Components
 * @category Table
 */

interface ActionCellProps {
  actions: ActionItem[]
  isOpen: boolean
  onToggle: () => void
}

const ActionCellComponent: React.FC<ActionCellProps> = ({ actions, isOpen, onToggle }) => {
  if (!actions.length) {
    return null
  }

  const renderAction = (action: ActionItem) =>
    action.type === 'link' ? (
      <a
        key={action.id}
        href={action.action as string}
        target='_blank'
        rel='noopener noreferrer'
        className={styles.menuItem}
      >
        <span>{action.text}</span>
        {action.icon && <Image src={action.icon} width={16} height={16} alt='' />}
      </a>
    ) : (
      <button
        key={action.id}
        className={styles.menuItem}
        onClick={action.action as () => void}
      >
        <span>{action.text}</span>
        {action.icon && <Image src={action.icon} width={16} height={16} alt='' />}
      </button>
    )

  if (actions.length === 1 && (actions[0].type === 'link' || actions[0].type === 'button')) {
    return (
      <div className={styles.actionCell}>
        <a
          href={actions[0].action as string}
          target='_blank'
          rel='noopener noreferrer'
          className={styles.actionButton}
        >
          <Image
            src='/assets/icons/udf/external_link.svg'
            width={16}
            height={16}
            alt='External link'
          />
        </a>
      </div>
    )
  }

  return (
    <div className={styles.actionCell}>
      <button className={styles.actionButton} onClick={onToggle}>
        <Image src='/assets/icons/udf/option_dots.svg' width={16} height={16} alt='Menu' />
      </button>
      {isOpen && <div className={styles.menuDropdown}>{actions.map(renderAction)}</div>}
    </div>
  )
}

export const ActionCell = memo(ActionCellComponent)
ActionCell.displayName = 'ActionCell'
