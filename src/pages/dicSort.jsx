

const sortList = [
    {value: 'All', name : '전체'},
    {value: 'HTML', name : 'HTML'},
    {value: 'CSS', name : 'CSS'},
    {value: 'JS', name : 'JS'},
    {value: 'REACT', name : 'REACT'},
    {value: 'NODE', name : 'NODE'}
]


 const SortSelect = ({value, onChange}) =>{

    function optChange(e){
        onChange(e.target.value)
    }

    return(
        <select value={value} onChange={optChange} className="sorting">
            {sortList.map((sort)=><option key={sort.value} value={sort.value}>{sort.name}</option>)}
        </select>
        //key 고유값으로 받고있으려고 하는것
    )

}

export default SortSelect