// import { useRef } from 'react';
import { Link } from 'react-router-dom';
// import { useState } from "react"

const Tap = ({onTap, SetOnTap}) =>{
    
    // const [onTap, SetOnTap] =useState(true)

    function tapping(){
        SetOnTap(true)
    }
    function tapping2(){
        SetOnTap(false)
    }

    
    return(
        <ul className='navs'>
            <li onClick={tapping} style={{borderBottom:onTap? '3px solid #BF3131' : 'none'}}><Link to='/'>단어 리스트</Link></li>
            <li onClick={tapping2} style={{borderBottom:!onTap? '3px solid #BF3131' : 'none'}}><Link to ='/write'>신규 단어 등록</Link></li>
        </ul>
    )

}

export default Tap