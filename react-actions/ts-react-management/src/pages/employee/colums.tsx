
interface ColumnInfo {
  title: string
  dataIndex: string
  key: string
}

type Columns = ColumnInfo[]

export const employeeColumns: Columns = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name'
  },
  {
    title: '部门',
    dataIndex: 'department',
    key: 'department'
  },
  {
    title: '入职时间',
    dataIndex: 'hiredate',
    key: 'hiredate'
  },
  {
    title: '职级',
    dataIndex: 'level',
    key: 'level'
  }
]