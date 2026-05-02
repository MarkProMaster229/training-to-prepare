import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './MainLabel.css'

function MainLabel({setPage}){
    const [topic, settopic] = useState('')

    const communication = () =>{
        settopic('communication')
    }
    const Book = () => {
        settopic('book')
    }
    const developer = () => {
        settopic('developer')
    }
    
    return (
    <>
    <div>
        <div className='select_topic'>
            <button onClick={communication}> общение </button>
            <button onClick={Book}> книги </button>
            <button onClick={developer}> разработка </button>
        </div>


    </div>

    </>

    )

}
export default MainLabel