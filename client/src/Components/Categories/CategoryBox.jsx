import React from 'react'
import { Link, Navigate, useNavigate, useSearchParams } from 'react-router-dom'
import qs from "query-string";
const CategoryBox = ({ item }) => {
  const { label, icon: Icon, description: desc } = item || {}
  const navigate = useNavigate()
  const [params, setParams] = useSearchParams()
  // const value = params.get('category')

  const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery=qs.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery,category:label
    }
    const url = qs.stringifyUrl({
      url: '/',
      query:updatedQuery
    }, { skipNull: true })
    navigate(url)
  }
  return (
    <div className='flex flex-col items-center justify-center gap-2 p-3 border-b-2 hover:text-neutral-800 border-transparent text-neutral-500'>
      <Link onClick={handleClick}>
        <Icon size={26} />
        <div className='text-sm font-medium'>{label}</div>
      </Link>
    </div>
  )
}

export default CategoryBox