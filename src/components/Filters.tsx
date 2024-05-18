import React from 'react'
import { Button, Form, Collapse } from 'antd'
import FilterInput from './FilterInput'
import FilterSerach from './FilterSerach'
import { GENDERS, SPECIES, STATUSES } from '../const'
import { useFeature } from '../useFeature'

type propTypes = {
  defaultFilters?: Filters
  onChange: (filter: Object) => void
  onReset: () => void
}

function Filters({ defaultFilters, onChange, onReset }: propTypes) {
  const isSearch = useFeature('bbdb177c-72b2-4d65-85d2-f5ca65f2b21d')
  const [form] = Form.useForm()
  const filters: Filters = defaultFilters || {
    name: '',
    status: '',
    species: '',
    type: '',
    gender: '',
  }

  const handleChangeFilter = (name: string, value: string = '') => {
    form.setFieldsValue({ [name]: value })
    onChange({ [name]: value })
  }

  const handleReset = () => {
    onReset()
    form.resetFields()
  }

  console.log(isSearch)

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      form={form}
      name='filters'
      style={{ width: '300px' }}>
      {isSearch && <Form.Item name='name' wrapperCol={{ span: 24 }}>
        <FilterSerach
          name='name'
          value={filters.name}
          onSearch={handleChangeFilter}
        />
      </Form.Item>}
      <Collapse accordion>
        <Collapse.Panel header='Filters' key='1'>
          <Form.Item name='gender' label='Gender'>
            <FilterInput
              name='gender'
              value={filters.gender}
              list={GENDERS}
              onChange={handleChangeFilter}
            />
          </Form.Item>
          <Form.Item name='status' label='Status'>
            <FilterInput
              name='status'
              value={filters.status}
              list={STATUSES}
              onChange={handleChangeFilter}
            />
          </Form.Item>
          <Form.Item name='species' label='Species'>
            <FilterInput
              name='species'
              value={filters.species}
              list={SPECIES}
              onChange={handleChangeFilter}
            />
          </Form.Item>
          <Form.Item name='type' label='Type'>
            <FilterSerach
              name='type'
              value={filters.type}
              onSearch={handleChangeFilter}
            />
          </Form.Item>
          <Form.Item>
            <Button htmlType='button' onClick={handleReset}>
              Reset
            </Button>
          </Form.Item>
        </Collapse.Panel>
      </Collapse>
    </Form>
  )
}

export default Filters
