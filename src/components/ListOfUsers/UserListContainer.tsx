import React, { useState } from 'react'
import { UserListInterface, User } from './UserListInterface'
import './UserList.css'
import { bool } from 'prop-types'

const UserListContainer: React.FC<UserListInterface> = props => {
  const listOfUsers = props.listOfUsers
  const [openDetails, setOpenDetails] = useState<Array<boolean>>([])

  const renderList = (user: User, index: number) => {
    return (
      <section className='user-list-section' key={user.id}>
        <div className='user-list-section-top'>
          <div>
            {user.first_name} {user.last_name}
          </div>
          <button onClick={() => handleDetailsOpen(index)}>
            {openDetails[index] ? '-' : '+'}
          </button>
        </div>
        {openDetails[index] && <div className='hidden-text-container'>
          <div> Age: {user.age} </div>
          <div> Nationality: {user.nationality} </div>
          <div> Privacy Risk: {user.risk_percentage}%</div>

        </div>}
      </section>)
  }

  const handleDetailsOpen = (index: number) => {
    let updatedDetailOpen = [...openDetails]
    updatedDetailOpen[index] = !updatedDetailOpen[index]
    setOpenDetails([...updatedDetailOpen])
  }

  return (
    <div className='user-list-wrapper'>
      {listOfUsers.map((user, index) => renderList(user, index))}
    </div>
  )
}

export default UserListContainer
