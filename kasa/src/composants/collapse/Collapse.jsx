import './collapse.scss'
import { useState } from 'react'
import Arrow from '../../images/arrow.png'

export default function Collapse({title, content}){
    const [turn, reTurn] = useState(false)

    return(
        <div className='collapse'>
            <h3 className='collapse_title' onClick={() => reTurn(!turn)}>{title}
            <img src={Arrow} alt='Fleche collapse' className={turn ? 'arrow' : 'arrow_turn'}/>
            </h3>
            <div className={turn ? 'collapse_content' : 'collapse_hiden_content'} >
            {Array.isArray(content) ? content.map((item, index) => {
                        return (
                            <p key={index}>{item}</p>
                        )
                    }) :content
                    }
            </div>
        </div>
    )
}