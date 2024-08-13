/* eslint-disable */

import {useState, useReducer, createContext, useRef, useMemo, useCallback, useEffect} from 'react';
import {Contents, Reducer} from './data'
import { Route, Routes, Link } from 'react-router-dom';

import Main from './pages/main';
import Dicsearch from './pages/dicSearch';
import Write from './pages/write';
import Tap from './pages/tap';

import './App.css'
import notionIcon from './assets/png-transparent-notion-logo.png'

export const dicContext = createContext(); //데이터
export const editContext = createContext(); //함수

function App() {
 
  const [state, dispatch] =useReducer(Reducer, Contents)
  const {dics} = state;
  const {wordName, wordText, wordType} = state.inputs;
  const userId = useRef(31)

  const createWord = useCallback((wordName, wordText, wordType) =>{
    const today = new Date();
    const year = today.getFullYear();
    const month = (today.getMonth() + 1).toString().padStart(2, '0');
    const day = today.getDate().toString().padStart(2, '0');
    const createDate = `${year}-${month}-${day}`;
    // const createDate = new Date().toLocaleDateString();
    dispatch({
      type: 'create',
      dic:{
        wordName, wordText, wordType,
        id: userId.current,
        createDate
      }
    })
    userId.current ++
  },[wordName, wordText, wordType])

  const editWord = (id, wordText) =>{
    dispatch({
      type: 'edit',
      id, wordText
    })
  }

  const removeWord = (id) =>{
    dispatch({
      type: 'remove',
      id
    })
  }

  const searchWord = (text) =>{
    dispatch({
      type: 'search',
      text
    })
  }

  const memoWord = useMemo(()=>{ //필요한것만 저장
    return{createWord, editWord, removeWord, searchWord}
  },[])

  const [onTap, SetOnTap] =useState(true)

  function toMain(){
    SetOnTap(true)
  }


  return (
    <>
    <div className='notinonIcon'>
      <a href="https://www.notion.so/a3593c4a86bf406a80a4215bf9dd7651" target='_blank'><img src={notionIcon} alt="노션" /></a>
    </div>
    <dicContext.Provider value={dics}>
     <editContext.Provider value={memoWord}>
     <header>
      <Link to='/'>
      <h1 onClick={toMain}>프론트엔드 사전</h1>
      <Dicsearch />
      </Link>
     </header>
     <Tap onTap={onTap} SetOnTap={SetOnTap}/>
       <main>
        <Routes>
          <Route path='/' element={<Main/>}/>
          <Route path='/write' element={<Write SetOnTap={SetOnTap}/>}/>
        </Routes>
       </main>
     </editContext.Provider>
    </dicContext.Provider>
    </>
  )
}

export default App


//메롱메롱오오오옹
