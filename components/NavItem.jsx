import React from 'react'

function NavItem({title, link}) {
  return (
    <div className='flex mx-4'>
      <a className='text-lg hover:text-green-500' href={link}>{title}</a>
    </div>
  )
}

export default NavItem
