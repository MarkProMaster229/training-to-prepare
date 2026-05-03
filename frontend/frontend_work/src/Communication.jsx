import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './Communication.css'
//↓↓↓↓↓↓обрати внимание сюда↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓
function Communication({settopic, nameUser}){// смотри как я передаю имя
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


    const [message, setMessage] = useState('')
    const upload_to_the_server = () =>{
        fetch('http://localhost:5000/server',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName" : nameUser,
                //предполагаю что дата формируется внутри самой бд у тебя как я видел есть поле date_create внутри ChatTalk для этого
                "topic" : "communication",
                "message" : message,
            })
        })
    }
//----------------------------------
function renderMessage(){
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
    <div className='promise'>
        <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={upload_to_the_server}>я готов нести ответственность за свои поступки</button>
    </div>


</div>
        
        </>
    )
}

export default Communication
