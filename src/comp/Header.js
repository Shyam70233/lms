import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const state = useSelector(s=>s)
  const {menu, loggedin, role, user} = state;
  console.log(menu)
  return (
    <header>
      <h1>{role || "Guest"} - Panel</h1>
      <div>
      {loggedin &&<Link to="/">Home</Link>}
      {loggedin && menu.map(x=>  <Link key={x.lable} to={`/${role}/${x.lable}`}>{x.lable}</Link>
        )}
       
        {loggedin && <Link to={`/${role}/logout`}>Logout</Link> }
      </div>
    </header>
  )
}

export default Header
