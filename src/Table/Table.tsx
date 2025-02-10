'use client'
import React, { useEffect, useState } from 'react'
import styles from './Table.module.scss'
import type { ColumnDef } from '@tanstack/table-core'
import { flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table'
import cn from 'classnames'
import { ActionCell } from './ActionCell'

export interface ActionItem {
  id: number
  type: 'link' | 'button'
  action: (() => void) | string
  icon?: string
  text?: string
}

export interface TableProps<T> {
  data: T[]
  columns: ColumnDef<T, any>[]
  isHeadHidden?: boolean
  tableClassName?: string
  theadClassName?: string
  tdClassName?: string
  trClassName?: string
  thClassname?: string
  tbodyClassName?: string
  actions?: ActionItem[]
}

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
    <table className={cn(styles.table, tableClassName)}>
      {!isHeadHidden && (
        <thead className={cn(styles.theead, theadClassName)}>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className={cn(styles.tr, trClassName)} key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th className={cn(styles.th, thClassname)} key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
      )}
      <tbody className={cn(styles.tbody, tbodyClassName)}>
        {table.getRowModel().rows.map((row) => (
          <tr className={cn(styles.tr, trClassName)} key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <td className={cn(styles.td, tdClassName)} key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
