import React from 'react'
import { Select } from 'antd'

type propsType = {
  name: string
  value: string
  list: Array<string>
  onChange: (name: string, value: string) => void
}

function FilterInput({ name, value, list, onChange }: propsType) {
  function handleChange(value: string) {
    onChange(name, value)
  }

  return (
    <Select
      allowClear
      style={{ width: '100%' }}
      placeholder='Please select'
      value={value ? value : null}
      onChange={handleChange}>
      {list.map(item => (
        <Select.Option key={item}>{item}</Select.Option>
      ))}
    </Select>
  )
}

export default FilterInput
