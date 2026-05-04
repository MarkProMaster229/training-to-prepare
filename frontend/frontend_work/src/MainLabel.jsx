import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './MainLabel.css'
import Communication from './Communication.jsx'
import Book from './Book.jsx'
import Developer from './Developer.jsx'
function MainLabel({nameUser}){
    const [topic, settopic] = useState('')
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


    if (topic === 'Communication')
    {
        Content  = <Communication nameUser={nameUser} />
    }
    else if(topic === 'book')
    {
        Content = <Book  nameUser={nameUser}/>
    }
    else if (topic === 'developer')
    {
        Content = <Developer nameUser={nameUser}/>
    }


    
    return (
    <>
    <div>
        <div className='select_topic'>
            <button onClick={communicationFun}> общение </button>
            <button onClick={BookFun}> книги </button>
            <button onClick={developerFun}> разработка </button>
        </div>
        <div>
            {Content}
        </div>


    </div>

    </>

    )

}
export default MainLabel

