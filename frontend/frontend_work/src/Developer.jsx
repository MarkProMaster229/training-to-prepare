import { useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'

function Developer({nameUser}){
    const [messages, setMessages] = useState([])

    useEffect (() => {
        fetch('http://localhost:5000/serverGETDeveloper', {
            method : 'GET'
        })
            .then(response => response.json())
            .then(data => {
                setMessages(data.mess)
            })
    }, [])
    
    const [message, setMessage] = useState('')
    const upload_to_the_server = () =>{
        fetch('http://localhost:5000/serverDeveloper',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                "userName" : nameUser,
                //предполагаю что дата формируется внутри самой бд у тебя как я видел есть поле date_create внутри ChatTalk для этого
                "topic" : "book",
                "message" : message,
            })
        })
    }

        //----------------------------------
function renderMessageBook(){
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
        {renderMessageBook()}
    </div>
    <div className='promise'>
        <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
        <button onClick={upload_to_the_server}>я готов нести ответственность за свои поступки</button>
    </div>


</div>
        
        </>
    )
}

export default Developer
