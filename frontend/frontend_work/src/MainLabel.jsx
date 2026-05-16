import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './MainLabel.css'
import Communication from './Communication.jsx'
function MainLabel({nameUser}){
    const [topic, settopic] = useState([])
    const give_gata_server = () =>{
        fetch('http://localhost:5000//topic'),{
            method: "GET",
            headers:{
                'Content-Type':'application/json'
            }
        }.then(respounse => respounse.json())
        .then(data => {
            settopic(data.topic_server)
        })
    }

function handleClick(topic)
{
    
}

function button_gen() 
{
    return topic.map((item, index) => (
        <button key={index} onClick={() => handleClick(item.topic_server)}>
            {item.topic_server}
        </button>
    ));
}
    let Content

    const communicationFun = () =>{
        settopic('Communication')
    }
    const BookFun = () => {
        settopic('book')
    }
    const developerFun = () => {
        settopic('developer')
    }

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
                "topic" : topic,
                "message" : message,
            })
        })
    }


    if (topic === 'Communication')
    {
        Content  = <Communication nameUser={nameUser} />
    }  


    
    return (
    <>
    <div>
        <div className='select_topic'>
            {button_gen()}
        </div>
        <div>
            {Content}
        </div>

        <div className='promise'>
            <input type='text' value={message} onChange={(e) => setMessage(e.target.value)}/>
            <button onClick={upload_to_the_server}>я готов нести ответственность за свои поступки</button>
        </div>

    </div>

    </>

    )

}
export default MainLabel

