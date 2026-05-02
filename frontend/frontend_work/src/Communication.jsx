import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Communication.css'
//↓↓↓↓↓↓обрати внимание сюда↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function Communication({settopic, nameUser}){// смотри как я передаю имя
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



    return(
        <>
<div>
    <div className='laberFor' > 
        <h1>{nameUser}</h1>
    </div>


</div>
        
        </>
    )
}

export default Communication
