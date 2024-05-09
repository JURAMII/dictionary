const Contents = {

    inputs:{
        wordName:'',
        wordText:'',
        wordType:''
    },
    
    dics:[{
        id:1,
        wordType:'HTML',
        wordName:'html',
        wordText:'웹사이트의 모습을 기술하기 위한 마크업 언어.',
        createDate:'2024-05-07'
    },{
        id:2,
        wordType:'HTML',
        wordName:'p',
        wordText:'단락을 나타내는 블록 태그.',
        createDate:'2024-05-07'
    },{
        id:3,
        wordType:'HTML',
        wordName:'a',
        wordText:'현재 페이지에서 다른 페이지 및 특정 위치 등을 연결할 때 사용하는 인라인 태그.',
        createDate:'2024-05-07'
    },{
        id:4,
        wordType:'CSS',
        wordName:'css',
        wordText:'웹페이지를 꾸미려고 작성하는 코드.',
        createDate:'2024-05-07'
    },{
        id:5,
        wordType:'CSS',
        wordName:'background-color',
        wordText:'요소의 배경색을 설정.',
        createDate:'2024-05-07'
    },{
        id:7,
        wordType:'JS',
        wordName:'자바스크립트',
        wordText:'HTML과 CSS로 구성된 웹 페이지를 동적으로 만들어주는 언어.',
        createDate:'2024-05-07'
    },{
        id:8,
        wordType:'JS',
        wordName:'예약어',
        wordText:'기본 자바스크립트 용어로 식별자 이름에 사용할 수 없다.',
        createDate:'2024-05-07'
    },{
        id:9,
        wordType:'REACT',
        wordName:'React',
        wordText:'메타에서 개발한 오픈 소스 자바스크립트 라이브러리.',
        createDate:'2024-05-07'
    },{
        id:10,
        wordType:'NODE',
        wordName:'Node',
        wordText:'Chrome V8 Javascript 엔진으로 빌드 된 자바스크립트 런타임.',
        createDate:'2024-05-07'
    }]
}

const Reducer = (state, action) =>{
    switch(action.type){
        case 'create' : //추가
        return{
            inputs: Contents.inputs,
            dics: state.dics.concat(action.dic)
        }
        case 'edit': //수정
            return{
                ...state,
                dics: state.dics.map((item)=>item.id === action.id?{...item, wordText:action.wordText}:item)
            }
        case 'remove': //삭제
        return{
            ...state,
            dics: state.dics.filter((item)=>item.id !== action.id) //같지않은애들만 
        }
        case 'search': //검색
        return{
            ...state,
            dics:state.dics.filter((item)=>{return(
                item.wordName.toLowerCase().includes(action.text.toLowerCase()) || //or
                item.wordText.toLowerCase().includes(action.text.toLowerCase())
            )})
        }
    }
}
//Reducer dics랑 inputs 안의 이름만 맞추면 계속 사용가능

export{
    Contents, Reducer
}