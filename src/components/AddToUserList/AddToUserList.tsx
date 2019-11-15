import React, { FormEvent, useState } from 'react'
import { UserListInterface } from './AddToUserListInterface'
import './AddToUserList.css'

const AddToUserList: React.FC<UserListInterface> = props => {
  const { renderPopup, updateUsers } = props
  const [textField, setTextField] = useState<string>('')

  const chunkArray = (array: string[], length: number) => {
    let chunks = [], i = 0, n = array.length;
    while (i < n) {
      chunks.push(array.slice(i, i += length));
    }

    return chunks;
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault()
    const dataArray = [...textField.split(' ')]
    const sortedData = chunkArray(dataArray, 5)
    console.log(sortedData)
  }

  return (
    <div className='add-user-overlay'>
      <div className='modal'>
        <div className='modal-header'>
          <h3> Add more Patients to Protect </h3>
          <button onClick={() => renderPopup()}>X</button>
        </div>
        <div className='modal-content'>
          <form onSubmit={handleSubmit}>
            <label>
              <div> Enter a list of people in this format: </div>
              <span> Firstname Lastname Country BirthDay ProtectPercent </span>
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
