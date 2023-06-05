import React from 'react'
import { Link } from 'react-router-dom'

const CategoryBox = ({ item }) => {
  const { label, icon: Icon, description: desc } = item || {}
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
      <Link>
        <Icon size={26} />
        <div className='text-sm font-medium'>{label}</div>
      </Link>
    </div>
  )
}

export default CategoryBox