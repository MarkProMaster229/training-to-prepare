import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Reg from './reg.jsx'

function App() {
  const [count, setCount] = useState(0)

  let pageContent
  if (page === 'register')
  {
    pageContent = <Reg setPage={setPage} />
  }
  else if (page === 'mainLabel')
  {
    pageContent = <Main setPage={setPage} />
  }

  else
  {
    pageContent = <div>This YOUR mistake</div>
  }
  return (
    <>
<<<<<<< Updated upstream
      <Reg />
=======
<div>
  {pageContent}
</div>
>>>>>>> Stashed changes
    </>
  )
}

export default App
