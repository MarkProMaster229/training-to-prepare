import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './MainLabel.css'
import Communication from './Communication.jsx'

function MainLabel({nameUser}){
    const [topic, settopic] = useState('')
    let Content

    const communication = () =>{
        settopic('Communication')
    }
    const Book = () => {
        settopic('book')
    }
    const developer = () => {
        settopic('developer')
    }


    if (topic === 'Communication')
    {
        Content  = <Communication settopic={settopic} nameUser={nameUser} />
    }


    
    return (
    <>
    <div>
        <div className='select_topic'>
            <button onClick={communication}> общение </button>
            <button onClick={Book}> книги </button>
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

