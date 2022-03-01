import React from 'react'
import { Link, Outlet } from 'react-router-dom'
export const Products = () => {
  return (
      <>
        <div>
            <input type='text' placeholder='search product' />
        </div>
        <nav>
            <Link to='featured'>Featured</Link>
            <Link to='new'>New</Link>
        </nav>
        <Outlet />
    </>
  )
}
