import React, { useState } from 'react'
import { Modal, Form, Input, Select, DatePicker } from 'antd'
import { FormComponentProps } from 'antd/lib/form'
import moment from 'moment'

import { EmployeeInfo, CreateRequest, UpdateRequest } from '../interface/employee'

interface Props extends FormComponentProps {
  visible: boolean
  edit: boolean
  rowData: Partial<EmployeeInfo>
  hide (): void
  createData (params: CreateRequest, callback: () => void): void
  updateData (params: UpdateRequest, callback: () => void): void
}

interface State {
  confirmLoading: boolean
}

const InfoModalHooks = (props: Props) => {
  const [confirmLoading, setConfirmLoading] = useState(false)

  const handleOk = () => {
    props.form.validateFields(err => {
      if (!err) {
        setConfirmLoading(true)
      }
      let params = props.form.getFieldsValue()
      params.hiredate = params.hiredate.format('YYYY-MM-DD')

      if (!props.edit) {
        props.createData(params as CreateRequest, close)
      } else {
        params.id = props.rowData.id
        props.updateData(params as UpdateRequest, close)
      }
    })
  }
  const handleCancel = () => close()

  const close = () => {
    props.hide()
    setConfirmLoading(false)
  }

  const title = props.edit ? '编辑' : '添加新员工'
  let { name, departmentId, hiredate, levelId } = props.rowData
  const { getFieldDecorator } = props.form
  return (
    <Modal title={ title }
           visible= { props.visible }
           onOk={ handleOk }
           onCancel={ handleCancel }
           confirmLoading= { confirmLoading }
           destroyOnClose={ true }
    >
      <Form>
        <Form.Item>
          {
            getFieldDecorator('name', {
              initialValue: name,
              rules: [{ required: true, whitespace: true, message: '请输入姓名' }]
            })(
              <Input placeholder='姓名'
                     style={{ width: 200 }}
                     maxLength={ 20 }
                     allowClear
              />
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('departmentId', {
              initialValue: departmentId,
              rules: [{ required: true, message: '请选择部门' }]
            })(
              <Select placeholder='部门'
                      style={{ width: 200 }}
                      allowClear
              >
                <Select.Option value={ 1 }>技术部</Select.Option>
                <Select.Option value={ 2 }>产品部</Select.Option>
                <Select.Option value={ 3 }>市场部</Select.Option>
                <Select.Option value={ 4 }>运营部</Select.Option>
              </Select>
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('hiredate', {
              initialValue: hiredate ? moment(hiredate) : undefined,
              rules: [{ required: true, message: '请选择入职日期' }]
            })(
              <DatePicker placeholder='入职日期'
                          style={{ width: 200 }}>
              </DatePicker>
            )
          }
        </Form.Item>
        <Form.Item>
          {
            getFieldDecorator('levelId', {
              initialValue: levelId,
              rules: [{ required: true, message: '请选择职级' }]
            })(
              <Select placeholder='职级'
                      style={{ width: 200 }}
                      allowClear>
                <Select.Option value={ 1 }>入门</Select.Option>
                <Select.Option value={ 2 }>初级</Select.Option>
                <Select.Option value={ 3 }>中级</Select.Option>
                <Select.Option value={ 4 }>高级</Select.Option>
                <Select.Option value={ 5 }>专家</Select.Option>
              </Select>
            )
          }
        </Form.Item>
      </Form>
    </Modal>
  )
}

const WrapInfoModal = Form.create<Props>({
  name: 'employee_info'
})(InfoModalHooks)

export default WrapInfoModal