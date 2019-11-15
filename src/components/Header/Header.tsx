import React from 'react'
import HeaderInterface from './HeaderInterface'
import './Header.css'


const Header: React.FC<HeaderInterface> = props => {
  const { numberOfProtectedPeople, setAddToListPopup } = props

  return (
    <header className='page-header'>
      <img src="https://miro.medium.com/max/2013/1*m0-Kip8vEuD52s_iT9y9hQ.jpeg" alt='Privitar' />
      <nav className='page-nav'>
        <ul> <a>{numberOfProtectedPeople} People Protected </a></ul>
        <ul> <button onClick={() => { setAddToListPopup() }}> Protect More People </button></ul>
      </nav>
    </header>
  )
}

export default Header
