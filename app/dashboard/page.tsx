"use client"
import React,{useState} from 'react'
import SearchSection from './_components/SearchSection'
import TemplatesListSection from './_components/TemplatesListSection'

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>()

  return (
    <div>
      {/* Search Section  */}
      <SearchSection onSearchInput={(value:string)=>setUserSearchInput(value)}/>
      {/* Template List Section  */}
      <TemplatesListSection userSearchInput={userSearchInput}/>
    </div>
  )
}

export default Dashboard