import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './MainLabel.css'
import Communication from './Communication.jsx'
import Book from './Book.jsx'
function MainLabel({nameUser}){
    const [topic, settopic] = useState('')
    let Content

    const communication = () =>{
        settopic('Communication')
    }
    const Book5 = () => {
        settopic('book')
    }
    const developer = () => {
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


    
    return (
    <>
    <div>
        <div className='select_topic'>
            <button onClick={communication}> общение </button>
            <button onClick={Book5}> книги </button>
            <button onClick={developer}> разработка </button>
        </div>
        <div>
            {Content}
        </div>


    </div>

    </>

    )

}
export default MainLabel

