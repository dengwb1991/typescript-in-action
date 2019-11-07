import React, { useState, useEffect } from 'react'
import { Form, Input, Button, Select } from 'antd'
import { FormComponentProps } from 'antd/lib/form'

import axios from '@assets/js/axios'

import { EmployeeRequest, EmployeeResponse, EmployeeInfo } from '../../interface/employee'

interface Props extends FormComponentProps {
  onDataChange(data: EmployeeResponse): void
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
    axios.get('/api/employee/getEmployee.json', { name, departmentId }).then(res => {
      let data = res.data
      if (name) {
        data = data.filter((item: EmployeeInfo) => item.name === name)
      }
      if (departmentId) {
        data = data.filter((item: EmployeeInfo) => item.key === departmentId)
      }
      props.onDataChange(data)
    })
  }

  useEffect(() => {
    handleSubmit()
    return () => {
      console.log('Hooks destory')
    }
  })

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

// Class
// class QueryForm extends React.Component<Props, EmployeeRequest> {
//   state: EmployeeRequest = {
//     name: '',
//     departmentId: undefined
//   }
//   handleNameChange = (e: React.FormEvent<HTMLInputElement>) => {
//     this.setState({
//       name: e.currentTarget.value
//     })
//   }
//   handleDepartmentChange = (value: number) => {
//     this.setState({
//       departmentId: value
//     })
//   }
//   handleSubmit = () => {
//     axios.get('/api/employee/getEmployee.json', this.state).then(res => {
//       let data = res.data
//       if (this.state.name) {
//         data = data.filter((item: EmployeeInfo) => item.name === this.state.name)
//       }
//       if (this.state.departmentId) {
//         data = data.filter((item: EmployeeInfo) => item.key === this.state.departmentId)
//       }
//       this.props.onDataChange(data)
//     })
//   }
//   render () {
//     return (
//       <Form layout="inline">
//         <Form.Item>
//           <Input placeholder="姓名"
//                  style={ { width: 120 } }
//                  allowClear
//                  value={ this.state.name }
//                  onChange={ this.handleNameChange }
//           />
//         </Form.Item>
//         <Form.Item>
//           <Select placeholder="部门"
//                   style={ { width: 120 } }
//                   allowClear
//                   value={ this.state.departmentId }
//                   onChange={ this.handleDepartmentChange }
//           >
//             <Select.Option value={1}>技术部</Select.Option>
//             <Select.Option value={2}>产品部</Select.Option>
//             <Select.Option value={3}>市场部</Select.Option>
//             <Select.Option value={4}>运营部</Select.Option>
//           </Select>
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" onClick={ this.handleSubmit }>查询</Button>
//         </Form.Item>
//       </Form>
//     )
//   }
// }

const WrapQueryForm = Form.create<Props>({
  name: 'employee_query'
})(QueryFormHooks)

export default WrapQueryForm