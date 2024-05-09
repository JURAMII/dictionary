import DicInput from "../hook/dicinput"
import { useContext } from "react"
import { editContext } from "../App"

import '../App.css'

const Write = () =>{
    
    const [{wordName, wordText, wordType}, onchange, reset] = DicInput({ //커스텀훅
        wordName: '',
        wordText: '',
        wordType:''
    })

    const {createWord} = useContext(editContext)

    const createBtn = () =>{
        // const cate = wordType === undefined ? 'html' :  wordType
        // console.log(cate)

        if(wordName===''){
            alert('단어를 입력하세요')
        }else if(wordText===''|| wordText.length<10){
            alert('내용을 10자 이상으로 입력하세요')
        }else{
            let cate 
            if(wordType === undefined || wordType === ''){
                cate = 'html'
            }else{
                cate = wordType
            }
            createWord(wordName, wordText, cate)
            reset()
        }
    
        // let cate 
        // if(wordType === undefined || wordType === ''){
        //     cate = 'html'
        // }else{
        //     cate = wordType
        // }

        // createWord(wordName, wordText, cate)
        // reset()
    }

    

    return(
     <div className="write_wrap">
        <div className="write_form">
            <div className="group">
            <label>분류</label>
            <select name="wordType" value={wordType} onChange={onchange}>
                <option value={'HTML'}>HTML</option>
                <option value={'CSS'}>CSS</option>
                <option value={'JS'}>JS</option>
                <option value={'REACT'}>React</option>
                <option value={'NODE'}>Node</option>
            </select>
          </div>
          <div className="group">
            <label>단어</label>
            <input type="text" name="wordName" value={wordName} onChange={onchange}/>
          </div>
          <div className="group">
          <label>설명</label>
          <textarea name="wordText" value={wordText} onChange={onchange}></textarea>
          </div>
          <div className="writeBtn_wrap">
          <button onClick={createBtn}>저장</button>
          </div>
        </div>
    </div>

    )
}

export default Write