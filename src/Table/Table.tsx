'use client'
import React, { useEffect, useState } from 'react'
import styles from './Table.module.scss'
import type { ColumnDef } from '@tanstack/table-core'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import clsx from 'clsx'
import { ActionCell } from './ActionCell'

export interface ActionItem {
  /** Unique identifier */
  id: number
  /** Action type */
  type: 'link' | 'button'
  /** Click handler or URL */
  action: (() => void) | string
  /** Optional icon */
  icon?: string
  /** Optional text */
  text?: string
}

/**
 * Data table with sorting and custom cell rendering
 */

export interface TableProps<T> {
  /** Table data array */
  data: T[]
  /** Column configurations */
  columns: ColumnDef<T, any>[]
  /** Hide table header */
  isHeadHidden?: boolean
  /** Additional table class name */
  tableClassName?: string
  /** Additional thead class name */
  theadClassName?: string
  /** Additional td class name */
  tdClassName?: string
  /** Additional tr class name */
  trClassName?: string
  /** Additional th class name */
  thClassname?: string
  /** Additional tbody class name */
  tbodyClassName?: string
  /** Optional action buttons */
  actions?: ActionItem[]
}

/**
 * Table component with sorting and action buttons
 * @example
 * ```tsx
 * <Table
 *   data={users}
 *   columns={[
 *     { id: 'name', header: 'Name', cell: (row) => row.getValue() },
 *     { id: 'age', header: 'Age', cell: (row) => row.getValue() }
 *   ]}
 *   actions={[
 *     { id: 1, type: 'button', text: 'Edit', action: () => {} }
 *   ]}
 * />
 * ```
 */
export const Table = function <T>({
  data,
  columns: userColumns,
  isHeadHidden,
  thClassname,
  trClassName,
  tdClassName,
  tableClassName,
  theadClassName,
  tbodyClassName,
  actions,
}: TableProps<T>) {
  const [openRow, setOpenRow] = useState<string | null>(null)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!(event.target as HTMLElement).closest(`.${styles.actionCell}`)) {
        setOpenRow(null)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const columns = [...userColumns]

  if (actions) {
    columns.push({
      id: 'actions',
      size: 10,
      maxSize: 10,
      cell: ({ row }) => (
        <ActionCell
          actions={actions}
          isOpen={openRow === row.id}
          onToggle={() => setOpenRow(openRow === row.id ? null : row.id)}
        />
      ),
    } as ColumnDef<T, any>)
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  })

  return (
    <table className={clsx(styles.table, tableClassName)}>
      {!isHeadHidden && (
        <thead className={clsx(styles.theead, theadClassName)}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={clsx(styles.tr, trClassName)} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className={clsx(styles.th, thClassname)} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      )}
      <tbody className={clsx(styles.tbody, tbodyClassName)}>
        {table.getRowModel().rows.map((row) => (
          <tr className={clsx(styles.tr, trClassName)} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className={clsx(styles.td, tdClassName)} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
