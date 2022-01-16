import React from 'react'
import { Input } from 'antd'

type propsType = {
  name: string
  value?: string
  onSearch: (name: string, value: string) => void
}

function FilterSerach({ name, value, onSearch }: propsType) {
  const handleSearch = (value: string) => onSearch(name, value)

  return (
    <Input.Search
      placeholder='Search'
      allowClear
      enterButton
      onSearch={handleSearch}
    />
  )
}

export default FilterSerach
