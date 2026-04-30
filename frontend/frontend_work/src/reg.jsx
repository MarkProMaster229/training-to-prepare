import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './reg.css'

function Reg() {
  const [count, setCount] = useState(0)
  
  const [nameUser, setNameUser] = useState('')
  const [passUser, setpassUser] = useState('')

  const Up_for_regist = () => {
    fetch('http://localhost:5000/regist',{
        method: 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            "user_name" : nameUser,
            "user_password" : passUser 
        })
    }).then(response => {
        if(response.ok)
        {
            //перенаправить на ресурс x
            window.location.href = '/mainLabel' 
        }
        else
        {
            //тут надо с бека что бы пришла ошибка
        }

    })
  }


  return (
    <>
<div className='main'>
    <div className='labelForNameUser'>
        <h2>введи имя для регистрации</h2>
        <input type ='text' value={nameUser} onChange={(e) => setNameUser(e.target.value)}/>
        <h2>введи пароль от аккаунта</h2>
        <input type='text' value={passUser} onChange={(e) => setpassUser(e.target.value)}/>
        <button onClick={Up_for_regist}> подтвержадаю </button>
    </div>
</div>
    
    </>
  )
}

export default Reg
