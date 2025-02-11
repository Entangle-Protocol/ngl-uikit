export interface AssetClassItemProps {
  label: string
  count?: number
  isSelected?: boolean
  isChecked: boolean
  onCheckboxChange: (label: string) => void
}

export interface AssetClassFilterProps {
  filterCount: number
  onApply: () => void
}
