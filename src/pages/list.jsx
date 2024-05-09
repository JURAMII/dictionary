import { useContext, useState } from "react"
import {dicContext} from '../App'
import Detail from "./detail";
import SortSelect from "./dicSort";

import '../App.css';


const List = () =>{

    const datas = useContext(dicContext)

    const [optList, setOptList] = useState('All')
    // console.log(datas)

    const getSortList = () =>{
        const sortItem = (item) => {
            // console.log(item.wordType)
            switch(optList){
                case 'HTML': 
                return item.wordType === 'HTML';
                case 'CSS': 
                return item.wordType === 'CSS';
                case 'JS': 
                return item.wordType === 'JS';
                case 'REACT': 
                return item.wordType === 'REACT';
                case 'NODE': 
                return item.wordType === 'NODE';
                default: 
                return null
            }
        }
        // const copyList = JSON.parse(JSON.stringify(datas))
        const sortingList = optList === 'All'? datas : datas.filter((item)=>sortItem(item))
        return sortingList
    }


    return(
       <>
        <div className="lists">
        <SortSelect value={optList} onChange={setOptList}/>
            {getSortList().map((data)=><Detail key={data.id} {...data}/>)}
        </div>
       </>
    )
}

export default List