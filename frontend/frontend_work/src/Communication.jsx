import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Communication.css'
//↓↓↓↓↓↓обрати внимание сюда↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function Communication({nameUser}){// смотри как я передаю имя
//↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑
    const [user_server, set_user_server] = useState([])
    const [message_server, set_message] = useState([])
    const [data_server, set_data] = useState([])
    const [messages, setMessages] = useState([])
    useEffect (() => {
        fetch('http://localhost:5000/serverGET', {
            method : 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setMessages(data.mess)
            })
        }, [])


//----------------------------------
function renderMessage()
{
    return messages.map((msg, i) => (
    <p key={i}>{msg.data_ser} | {msg.user_name}: {msg.message}</p>
))
//----------------------------------
}


    return(
        <>
<div>
    <div className='laberFor' > 
        <h2>ты перестанешь чувствовать вкус еды. Но будешь жрать потому что так надо.</h2>
        <h2>ваш nickname привлекателен {nameUser}</h2>
        {renderMessage()}
    </div>


</div>
        
        </>
    )
}

export default Communication
