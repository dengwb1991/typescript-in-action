export interface EmployeeRequest {
  name: string
  departmentId: number | undefined
}

export interface EmployeeInfo {
  id: number
  key: number
  name: string
  department: string
  hiredate: string
  level: string
}

export type EmployeeResponse = EmployeeInfo[] | undefined
