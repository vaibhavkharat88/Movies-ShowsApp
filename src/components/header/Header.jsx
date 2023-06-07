import React from 'react'
import { Link } from 'react-router-dom'
import user from '../../images/user.png'
import './Header.scss'

const Header = () => {
  return (
    <>
    <div className="header">
      <Link to=''></Link>
      <div className="logo">MOVIES & SHOWS</div>
      <div className="user-image">
        <img src={user} alt="user" />
      </div>
    </div>
    </>
  )
}

export default Header