import searchIcon from'../assets/free-icon-search-4347487.png'
import notion from'../assets/png-transparent-notion-logo.png'

import { useState, useContext } from "react"
import { editContext } from "../App"

const Dicsearch = () =>{
    const {searchWord} = useContext(editContext)
    const[searchDic, setSearchDic] = useState('') //오류안뜨게

    function searchChange(e){
        setSearchDic(e.target.value)
    }

    function searchBtn(){
        searchWord(searchDic)
    }

    return(
        <>
        <div className="search">
        <input type="text" value={searchDic} onChange={searchChange}/>
        <button onClick={searchBtn}><img src={searchIcon} alt="검색"/></button>
        </div>
        </>
    )
}

export default Dicsearch
