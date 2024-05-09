import removeImg from '../assets/free-icon-delete-7945112.png';
import editImg from '../assets/free-icon-pencil-7175385.png';
import backImg from '../assets/free-icon-font-undo-3917161.svg';
import saveImg from '../assets/free-icon-font-check-3917749.svg';


import '../App.css';

import { useContext, useState } from "react"
import { editContext } from "../App"
import { getLogo } from '../util';

const Detail = ({id,wordName,wordType,wordText,createDate}) =>{
    const {removeWord, editWord} = useContext(editContext)
    const [onUpdate, setOnUpdate] = useState(true)
    const [editText, setEditText] = useState(wordText)
    
    function removeBtn(){
        if(window.confirm(`${wordName} 을/를 삭제하시겠습니까?`)){
            removeWord(id)
        }
    }

    function editBtn(){
        setOnUpdate(!onUpdate)
    }

    function editChange(e){
        setEditText(e.target.value)
    }

    function saveBtn(){
        if(window.confirm(`${wordName} 을/를 수정 하시겠습니까?`)){
          editWord(id, editText)
          editBtn() //다시 리스트로 돌아가라
        }
    }
    function cancleBtn(){
        if(window.confirm(`${wordName} 을/를 수정을 취소 하시겠습니까?`)){
            setOnUpdate(!onUpdate)
        }
    } //editBtn 같으니까 재사용 가능


    return(
        <>
        <dl key={id} className='word_wrap'>
            <dt>{wordName} 
            <span>
               <img src={getLogo(wordType)} alt={`${wordType}아이콘`} className={`icon_${wordType}`}/>
            </span>
            </dt>
            <dd className='dd_wrap'>
            {onUpdate ? 
            <span>{wordText}</span>
            : 
            <div>
            <textarea type='text' name='wordText' value={editText} onChange={editChange}>
             </textarea>
            </div>
            }
            {onUpdate ?
             <div className='ddBtn_wrap'>
                <span>{createDate}</span>
            <div>
                <button onClick={editBtn}><img src={editImg} alt="수정" /></button>
                <button onClick={removeBtn}><img src={removeImg} alt="삭제" /></button> 
            </div>
             </div> 
            :
             <div className='editBtn_wrap'>
                <span>{createDate}</span>
                <div>
                <button onClick={saveBtn}><img src={saveImg} alt="수정완료" /></button>
                <button onClick={cancleBtn}><img src={backImg} alt="수정취소" /></button>
                </div>
             </div>
            }
            </dd>
        </dl>
      </>
    )
}

export default Detail