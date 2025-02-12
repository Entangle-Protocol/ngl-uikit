import React from 'react'
import { Table } from './Table'

export default {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
}

const columns = [
  { header: 'Name', accessorKey: 'name' },
  { header: 'Age', accessorKey: 'age' },
  { header: 'Status', accessorKey: 'status' },
]

const data = [
  { name: 'John Doe', age: 25, status: 'Active' },
  { name: 'Jane Smith', age: 30, status: 'Inactive' },
  { name: 'Bob Johnson', age: 45, status: 'Active' },
]

export const Default = {
  args: {
    columns,
    data,
  },
}

export const Empty = {
  args: {
    columns,
    data: [],
  },
} 
