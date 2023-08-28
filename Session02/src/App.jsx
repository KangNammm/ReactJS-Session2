import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent_Comp from './components/Parent_Comp'
import Class_Comp from './Class_Comp'
import List_User from './components/List_User'
import ShowStudents from './components/Manager-Students/ShowStudents'

function App() {
  return (
    <>
      {/* <Parent_Comp/> */}
      {/* <Class_Comp/> */}
      {/* <List_User/> */}
      <ShowStudents /> 
    </>
  )
}

export default App
