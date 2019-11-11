import React, { useState } from 'react'
import { Table, Button } from 'antd'

import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import employeeColumns from './colums'
import {
  EmployeeInfo,
  EmployeeRequest,
  EmployeeResponse,
  CreateRequest,
  DeleteRequest,
  UpdateRequest
} from '@interface/employee'

import {
  getEmployee,
  createEmployee,
  deleteEmployee,
  updateEmployee
} from '@redux/employee'

import QueryForm from './query-form'
import InfoModal from '@components/info-modal'
import './index.less'

interface State {
  loading: boolean
  showModal: boolean
  edit: boolean
  rowData: Partial<EmployeeInfo>
}

interface Props {
  onGetEmployee (params: EmployeeRequest, callback: () => void): void
  onCreateEmployee (params: CreateRequest, callback: () => void): void
  onDeleteEmployee (params: DeleteRequest): void
  onUpdateEmployee (params: UpdateRequest, callback: () => void): void
  employeeList: EmployeeResponse
}

// Hooks
const EmployeeHooks = (props: Props) => {
  // Loading status of form data
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  // Add or Edit switch
  const [edit, setEdit] = useState(false)
  const [rowData, setRowData] = useState({})
  
  const handleCreate = () => {
    setShowModal(true)
    setEdit(false)
    setRowData({})
  }

  const handleUpdate = (record: EmployeeInfo) => {
    setShowModal(true)
    setEdit(true)
    setRowData(record)
  }

  const handleDelete = (params: DeleteRequest) => props.onDeleteEmployee(params)

  const hideModal = () => {
    setShowModal(false)
    setRowData({})
  }

  // redux actions
  const {
    employeeList,
    onGetEmployee,
    onCreateEmployee,
    onUpdateEmployee
  } = props

  return (
    <>
      <QueryForm onDataChange={ onGetEmployee }
                 setLoading={ setLoading }>
      </QueryForm>
      <div className="toolbar">
        <Button type="primary"
                icon="plus"
                onClick={ handleCreate}>
          添加
        </Button>
      </div>
      <InfoModal visible={ showModal }
                 edit={ edit }
                 rowData={ rowData }
                 hide={ hideModal }
                 createData={ onCreateEmployee }
                 updateData={ onUpdateEmployee }
      />
      <Table columns={ employeeColumns(handleUpdate, handleDelete) }
             dataSource={ employeeList }
             loading={ loading }
      />
    </>
  )
}

const mapStateToProps = (state: any) => ({
  employeeList: state.employee.employeeList
})

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onGetEmployee: getEmployee,
  onCreateEmployee: createEmployee,
  onDeleteEmployee: deleteEmployee,
  onUpdateEmployee: updateEmployee
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeHooks)