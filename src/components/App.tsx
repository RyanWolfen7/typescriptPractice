import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import UserListContainer from './ListOfUsers/UserListContainer'
import AddToUserList from './AddToUserList/AddToUserList'
import './App.css'
import { User } from './ListOfUsers/UserListInterface'
import axios from 'axios'

const App: React.FC = () => {
  const [listOfPeople, setListOfPeople] = useState<Array<User>>([])
  const [totalOfPeople, setTotalOfPeople] = useState<number>(0)
  const [addToListPopup, setAddToListPopup] = useState<boolean>(false)

  useEffect(() => {
    const fetchData = async () => {
      const { data: { body: { people: data } } } = await axios.get(url, { params: {}, headers: { 'x-api-key': process.env.REACT_APP_API_KEY } })
      if (data) {
        setListOfPeople(data);
        setTotalOfPeople([...data].length)
      }
    }
    fetchData();
  }, []);

  const renderPopup = () => {
    setAddToListPopup(!addToListPopup)
  }

  return (
    <div className="App">
      <Header numberOfProtectedPeople={totalOfPeople} setAddToListPopup={renderPopup} />
      <div className='ContentWrapper'>
        <UserListContainer listOfUsers={listOfPeople} />
      </div>
      {addToListPopup && <AddToUserList renderPopup={renderPopup} updateUsers={setListOfPeople} />}
      <a> © Privitar 2019 </a>
    </div>
  )
}

const url = 'https://m37ov7xhd3.execute-api.eu-west-1.amazonaws.com/default/ui_example_data_endpoint'
export default App
