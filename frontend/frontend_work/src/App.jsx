import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Reg from './reg.jsx'
import MainLabel from './MainLabel.jsx'

function App() {
  const [count, setCount] = useState(0)
  const [page, setPage] = useState('register')
  const [nameUser, setNameUser] = useState('')
  let pageContent
  if (page === 'register')
  {
    pageContent = <Reg setPage={setPage} nameUser={nameUser} setNameUser={setNameUser} />
  }
  else if (page === 'MainLabel')
  {
    pageContent = <MainLabel setPage={setPage} nameUser={nameUser} />
  }
  else
  {
    pageContent = <div>This YOUR mistake</div>
  }
  return (
    <>
<div>
  {pageContent}
</div>
    </>
  )
}

export default App
