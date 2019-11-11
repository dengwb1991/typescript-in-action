// Actions standard: https://github.com/redux-utilities/flux-standard-action

import { Dispatch } from 'redux'

import axios from '@assets/js/axios'

import {
  GET_EMPLOYEE_URL,
  CREATE_EMPLOYEE_URL,
  DELETE_EMPLOYEE_URL,
  UPDATE_EMPLOYEE_URL
} from '@constants/urls'

import {
  GET_EMPLOYEE,
  CREATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  UPDATE_EMPLOYEE
} from '@constants/actions'

import {
  DEPARTMENTS,
  LEVELS
} from '@constants/options'

import {
  EmployeeInfo,
  EmployeeRequest,
  EmployeeResponse,
  CreateRequest,
  DeleteRequest,
  UpdateRequest
} from '@interface/employee'

type State = Readonly<{
  employeeList: EmployeeResponse
}>

// Specification at the top
type Action = {
  type: string
  payload: any
}

// Options
type Options = {
  name: string
  value: any
}

const initialState: State = {
  employeeList: undefined
}

export function getEmployee (params: EmployeeRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    axios.get(GET_EMPLOYEE_URL, params).then(data => {
      console.log(data)
      dispatch({
        type: GET_EMPLOYEE,
        payload: data
      })
      callback()
    })
  }
}

export function createEmployee (params: CreateRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    axios.get(CREATE_EMPLOYEE_URL, params).then(data => {
      const key = Math.floor(Math.random() * 100)
      dispatch({
        type: CREATE_EMPLOYEE,
        payload: {
          name: params.name,
          department: (DEPARTMENTS.find((item: Options) => item.value === +params.departmentId) as Options).name,
          departmentId: params.departmentId,
          hiredate: params.hiredate,
          level: (LEVELS.find((item: Options) => item.value === +params.levelId) as Options).name,
          levelId: params.levelId,
          id: key,
          key: key
        }
      })
      callback()
    })
  }
}

export function deleteEmployee (params: DeleteRequest) {
  return (dispatch: Dispatch) => {
    axios.get(DELETE_EMPLOYEE_URL, params).then(data => {
      dispatch({
        type: DELETE_EMPLOYEE,
        payload: params.id
      })
    })
  }
}

export function updateEmployee (params: UpdateRequest, callback: () => void) {
  return (dispatch: Dispatch) => {
    axios.get(UPDATE_EMPLOYEE_URL, params).then(data => {
      dispatch({
        type: UPDATE_EMPLOYEE,
        payload: params
      })
      callback()
    })
  }
}

export default function (state = initialState, action: Action) {
  let newList: any[]
  switch (action.type) {
    case GET_EMPLOYEE:
      return {
        ...state,
        employeeList: action.payload
      }
    case CREATE_EMPLOYEE:
      newList = [action.payload, ...state.employeeList as EmployeeInfo[]]
      return {
        ...state,
        employeeList: newList
      }
    case DELETE_EMPLOYEE:
      let list = [...state.employeeList as EmployeeInfo[]]
      newList = list.filter(item => item.id !== +action.payload )
      return {
        ...state,
        employeeList: newList
      }
    case UPDATE_EMPLOYEE:
      let updateList = [...state.employeeList as EmployeeInfo[]]
      let ap: UpdateRequest = action.payload
      let index = updateList.findIndex(item => item.id === ap.id)
      updateList[index] = {
        name: ap.name,
        department: (DEPARTMENTS.find((item: Options) => item.value === +ap.departmentId) as Options).name,
        departmentId: ap.departmentId,
        hiredate: ap.hiredate,
        level: (LEVELS.find((item: Options) => item.value === +ap.levelId) as Options).name,
        levelId: ap.levelId,
        id: ap.id,
        key: ap.id
      }
      return {
        ...state,
        employeeList: updateList
      }
    default:
      return state
  }
}