export interface UserListInterface {
  renderPopup: CallableFunction
  updateUsers: CallableFunction
  totalOfPeople: number
}

export interface User {
  age: number
  first_name: string
  id: number
  last_name: string
  risk_percentage: number
  nationality: string
}
