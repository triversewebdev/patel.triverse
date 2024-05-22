import React from 'react'
import { Link } from 'react-router-dom'
import '../BreadCrumb/BreadCrumb.css'


const Index = () => {
  return (
    <div className='pagebreadcumb mt-2'>
      <ul className='d-flex'>        
        <li><Link to='/'>Home</Link></li>
        <li>About Us</li>
      </ul>
    </div>
  )
}

export default Index