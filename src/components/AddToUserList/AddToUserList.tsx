import React, { FormEvent, useState } from 'react'
import { UserListInterface, User } from './AddToUserListInterface'
import './AddToUserList.css'

const AddToUserList: React.FC<UserListInterface> = props => {
  const { renderPopup, updateUsers, totalOfPeople } = props
  const [textField, setTextField] = useState<string>('')

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const dataArray: string[] = [...textField.split('\n')]
    const addedPeople: User[] = dataArray.reduce((array: User[], user: string, index: number) => {
      const userSplit = user.split(' ')
      let userData: User = {
        first_name: userSplit[0],
        last_name: userSplit[1],
        nationality: userSplit[2],
        age: Number(userSplit[3]),
        risk_percentage: Number(userSplit[4]),
        id: totalOfPeople + (index + 1)
      }
      array.push(userData)
      return array
    }, [])
    updateUsers(addedPeople)
  }

  return (
    <div className='add-user-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <h3> Add more People to Protect </h3>
          <button onClick={() => renderPopup()}>X</button>
        </div>
        <div className='modal-content'>
          <form onSubmit={handleSubmit}>
            <label>
              <div> Enter a list of people in this format: </div>
              <span> Firstname Lastname Country Age ProtectPercent </span>
              <div>Please Seperate By hitting enter </div>
              <textarea value={textField} onChange={event => setTextField(event.target.value)} />
            </label>
            <input type='submit' value='Submit' />
          </form>
        </div>
      </div>
    </div>
  )
}

export default AddToUserList
