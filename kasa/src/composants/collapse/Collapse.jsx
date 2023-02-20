import './collapse.scss'
import { useState } from 'react'
import Arrow from '../../images/arrow.png'

export default function Collapse({title, content}){
    const [turn, updateTurn] = useState(false)

    return(
        <div className='collapse'>
            <h2 className='collapse_title' onClick={() => updateTurn(turn)}>{title}
            <img src={Arrow} alt='Fleche collapse' className={turn ? 'arrow' : 'arrow_turn'}/>
            </h2>
            <div className={turn ? 'collapse_content' : 'collapse_hiden_content'} >
               
            </div>
        </div>
    )
}