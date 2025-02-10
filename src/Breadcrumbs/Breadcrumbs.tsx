'use client'

import React, { memo } from 'react'

import styles from './Breadcrumbs.module.scss'
import { usePathname } from 'next/navigation'

export interface BreadcrumbsProps {}

const BreadcrumbsComponent = ({}: BreadcrumbsProps) => {
  const pathname = usePathname()
  let finalDisplay

  const slash = <span className={styles.slash}>/</span>

  if (pathname.includes('/pair-')) {
    finalDisplay = (
      <>
        Data Feeds {slash} {pathname.replace('/pair-', '').split('-')[0]}/
        {pathname.replace('/pair-', '').split('-')[1]}
      </>
    )
  } else if (pathname.includes('/dashboard')) {
    finalDisplay = <>Data Feeds {slash} Dashboard</>
  }

  return <div className={styles.root}>{finalDisplay}</div>
}

export const Breadcrumbs = memo(BreadcrumbsComponent)
Breadcrumbs.displayName = 'Breadcrumbs'
