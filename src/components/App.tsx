import React, { useState, useEffect } from 'react'
import Header from './Header/Header'
import UserListContainer from './ListOfUsers/UserListContainer'
import './App.css'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const App: React.FC = () => {
  const [listOfPeople, setListOfPeople] = useState([])
  const [totalOfPeople, setTotalOfPeople] = useState(0)
  useEffect(() => {
    const fetchData = async () => {
      const { data: { body: { people: data } } } = await axios.get(url, { params: {}, headers: { 'x-api-key': process.env.API_KEY } })
      if (data) {
        setListOfPeople(data);
        setTotalOfPeople([...data].length)
      }
    }
    fetchData();
  }, []);


  return (
    <div className="App">
      <Header numberOfProtectedPeople={totalOfPeople} />
      <div className='ContentWrapper'>
        <UserListContainer props={listOfPeople} />
      </div>
    </div>
  )
}

const url = 'https://m37ov7xhd3.execute-api.eu-west-1.amazonaws.com/default/ui_example_data_endpoint'
export default App
