interface User {
  age: number
  first_name: string
  id: number
  last_name: string
  risk_percentage: number
}

export default interface UserListInterface {
  props: User[]
}
