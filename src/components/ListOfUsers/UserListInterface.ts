export interface User {
  age: number
  first_name: string
  id: number
  last_name: string
  risk_percentage: number
  nationality: string
}

export interface UserListInterface {
  listOfUsers: User[]
}
