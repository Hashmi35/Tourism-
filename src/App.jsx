import { useState } from 'react'
import './App.css'

function Header()
{
  return (
    <header className='navbar'>
        <a href="#" className="logo"><img src="./logo.svg" alt="mainLogo" width="100px" /></a>
        <nav>
            <ul className="list">
                <li><a href="#homeId" className="left homeBtn" >Home</a></li>
                <li><a href="#aboutId" className="left aboutBtn">About</a></li>
                <li><a href="#contactId" className="left contactBtn">Contact</a></li>
            </ul>
        </nav>
    </header>
  )
}

function Main()
{
 const number = 10
 console.log()
  
  
  return(

    <main>
      <div className='container'>
          <div className='smallContainer'>
            <div className='boxes'><h1 className='pName'>Battambang</h1><img src="./battambang.png" alt="" className='rep'/></div>
            <div className='boxes'><h1 className='pName'>Siem Reap</h1><img src="./sr.png" alt="" className='rep'/></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
            <div className='boxes'></div>
          </div>
      </div>
    </main>

  )
}


function App() {

  return (
    <>
          <Header />
          <Main   />
     </>
  )
}


export default App


// battambang
// siem reap
// kompot
// kep mondolkiri
// posat