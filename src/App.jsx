import { useState } from 'react'
import './App.css'
import logo from "./images/logo.svg"


function Header()
{
  return (
    <header className='navbar'>
        <a href="#" className="logo"></a>
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
  return(

    <main>
      <div className='container'>
          <div className='smallContainer'>
            <div className='boxes'></div>
            <div className='boxes'></div>
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

  let list = []

}


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
          <Header />
          <Main   />
     </>
  )
}


export default App