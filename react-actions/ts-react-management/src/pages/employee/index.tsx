import React from 'react'
import { Table } from 'antd'

import { employeeColumns } from './colums'
import { EmployeeResponse } from '../../interface/employee'

import QueryForm from './query-form'

import './index.css'

interface State {
  employee: EmployeeResponse
}

class Employee extends React.Component<{}, State> {
  state: State = {
    employee: undefined
  }
  setEmployee = (employee: EmployeeResponse) => {
    this.setState({
      employee
    })
  }
  render () {
    return (
      <>
        <QueryForm onDataChange={ this.setEmployee }></QueryForm>
        <Table columns={ employeeColumns } dataSource={ this.state.employee }></Table>
      </>
    )
  }
}

export default Employee