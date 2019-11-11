import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import { EmployeeRequest } from '../../interface/employee'

interface Props extends FormComponentProps {
  onDataChange (data: EmployeeRequest, callback: () => void): void
  setLoading (loading: boolean): void
}

// Hooks
const QueryFormHooks = (props: Props) => {
  const [name, setName] = useState()
  const [departmentId, setDepartmentId] = useState()

  const handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value)
  }

  const handleDepartmentChange = (value: number) => {
    setDepartmentId(value)
  }
  const handleSubmit = () => {
    props.setLoading(true)
    props.onDataChange({ name, departmentId }, () => {
      props.setLoading(false)
    })
  }

  useEffect(() => {
    handleSubmit()
    // eslint-disable-next-line
  }, [])

  return (
    <>
      <Form layout="inline">
        <Form.Item>
          <Input placeholder="姓名"
                 style={ { width: 120 } }
                 allowClear
                 value={ name }
                 onChange={ handleNameChange }
          />
        </Form.Item>
        <Form.Item>
          <Select placeholder="部门"
                  style={ { width: 120 } }
                  allowClear
                  value={ departmentId }
                  onChange={ handleDepartmentChange }
          >
            <Select.Option value={1}>技术部</Select.Option>
            <Select.Option value={2}>产品部</Select.Option>
            <Select.Option value={3}>市场部</Select.Option>
            <Select.Option value={4}>运营部</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Button type="primary" onClick={ handleSubmit }>查询</Button>
        </Form.Item>
      </Form>
    </>
  )
}

const WrapQueryForm = Form.create<Props>({
  name: 'employee_query'
})(QueryFormHooks)

export default WrapQueryForm