import React from 'react'
import Children_Comp from './Children_Comp'

export default function Parent_Comp() {
    const userName = " Nguyen Van A";
    const age = 31;
  return (
    <>
    <h1>UserName của ParentComponent: {userName}</h1>
    <Children_Comp userName={userName} age={age}/>
    </>
  )
}
