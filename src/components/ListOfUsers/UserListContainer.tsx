import React from 'react'
import { UserListInterface, User } from './UserListInterface'
import './UserList.css'

const UserListContainer: React.FC<UserListInterface> = props => {
  const listOfUsers = props.listOfUsers
  console.log(listOfUsers)

  const renderList = (user: User) => {
    return (
      <section className='user-list-section' key={user.id}>
        <div>
          {user.first_name} {user.last_name}
        </div>
        <button>
          +
        </button>
      </section>)
  }

  return (
    <div className='user-list-wrapper'>
      {listOfUsers.map(user => renderList(user))}
    </div>
  )
}

export default UserListContainer
