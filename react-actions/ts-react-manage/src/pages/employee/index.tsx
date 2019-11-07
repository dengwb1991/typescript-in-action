import React, { useState } from 'react'
import { Table } from 'antd'

import { employeeColumns } from './colums'
import { EmployeeResponse } from '../../interface/employee'

import QueryForm from './query-form'

import './index.less'

interface State {
  employee: EmployeeResponse
}

// Hooks
const EmployeeHooks = () => {
  const [employee, setEmployee] = useState()

  return (
    <>
      <QueryForm onDataChange={ setEmployee }></QueryForm>
      <Table columns={ employeeColumns } dataSource={ employee }></Table>
    </>
  )
}

// // Class
// class Employee extends React.Component<{}, State> {
//   state: State = {
//     employee: undefined
//   }
//   setEmployee = (employee: EmployeeResponse) => {
//     this.setState({
//       employee
//     })
//   }
//   render () {
//     return (
//       <>
//         <QueryForm onDataChange={ this.setEmployee }></QueryForm>
//         <Table columns={ employeeColumns } dataSource={ this.state.employee }></Table>
//       </>
//     )
//   }
// }

export default EmployeeHooks