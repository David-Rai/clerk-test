import React from 'react'
import Nav from '@/components/Nav'
import { SignedIn,SignedOut,useUser } from '@clerk/clerk-react'

const Dashboard = () => {
  const data=useUser()
  console.log("user clerk auth data",data)

  return (
    <main className='h-screen flex w-full flex-col'>
      <Nav />
      <h1>Dashboard</h1>
    </main>
  )
}

export default Dashboard