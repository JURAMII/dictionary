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
    },{
        id:11,
        wordType:'NODE',
        wordName:'ejs',
        wordText:'JavaScript를 이용하여 HTML 마크업 간의 동적인 데이터 표현할 수 있는 템플릿 엔진.',
        createDate:'2024-05-07'
    },{
        id:12,
        wordType:'NODE',
        wordName:'비동기',
        wordText:'어떤 작업을 실행할 때 그 작업이 완료되지 않더라도 다음 코드를 실행하는 방식.',
        createDate:'2024-05-07'
    },{
        id:13,
        wordType:'NODE',
        wordName:'동기',
        wordText:'먼저 시작된 작업이 다 끝나면 새로운 작업을 시작하는 방식.',
        createDate:'2024-05-07'
    },{
        id:14,
        wordType:'REACT',
        wordName:'props',
        wordText:'부모 컴포넌트가 자식 컴포넌트에게 전달하는 값.',
        createDate:'2024-05-07'
    },{
        id:15,
        wordType:'REACT',
        wordName:'state',
        wordText:'컴포넌트 내부에서 관리되는 데이터로 컴포넌트의 상태를 변경하거나 업데이트할 때 사용.',
        createDate:'2024-05-07'
    },{
        id:16,
        wordType:'REACT',
        wordName:'jsx',
        wordText:'JavaScript를 확장한 문법으로 JavaScript 파일을 HTML과 비슷하게 마크업을 작성할 수 있도록 함.',
        createDate:'2024-05-07'
    },{
        id:17,
        wordType:'JS',
        wordName:'삼항연산자',
        wordText:'조건문에 기반하여 다른 두 개의 값 중 하나를 선택하는 연산자.',
        createDate:'2024-05-07'
    },{
        id:18,
        wordType:'REACT',
        wordName:'컴포넌트',
        wordText:'재사용이 가능한 각각의 독립된 모듈.',
        createDate:'2024-05-07'
    },{
        id:19,
        wordType:'NODE',
        wordName:'모듈',
        wordText:'프로그램을 구성하는 구성 요소로, 관련된 데이터와 함수를 하나로 묶은 단위.',
        createDate:'2024-05-07'
    },{
        id:20,
        wordType:'NODE',
        wordName:'CRUD',
        wordText:'Create(생성), Read(읽기), Update(갱신), Delete(삭제)를 묶어서 일컫는 말.',
        createDate:'2024-05-07'
    },{
        id:21,
        wordType:'HTML',
        wordName:'input',
        wordText:'사용자로부터 데이터를 입력 받을 때 사용하는 태그.',
        createDate:'2024-05-07'
    },{
        id:22,
        wordType:'HTML',
        wordName:'시맨틱 태그',
        wordText:'포함된 콘텐츠의 특정 의미를 정의하고 목적을 갖는 태그.',
        createDate:'2024-05-07'
    },{
        id:23,
        wordType:'HTML',
        wordName:'figure',
        wordText:'삽화나 사진 등과 같이 문서의 주요 흐름과는 독립적인 콘텐츠를 정의할 때 사용.',
        createDate:'2024-05-07'
    },{
        id:24,
        wordType:'HTML',
        wordName:'figcaption',
        wordText:'부모 요소인 figure 태그가 포함하는 콘텐츠에 대한 설명을 나타내기 위한 태그.',
        createDate:'2024-05-07'
    },{
        id:25,
        wordType:'HTML',
        wordName:'dl',
        wordText:'용어와 그에 대한 설명을 리스트 형식으로 정의할 때 사용하는 태그.',
        createDate:'2024-05-07'
    },{
        id:26,
        wordType:'CSS',
        wordName:'vw',
        wordText:'뷰포트 너비의 1% 길이와 동일.',
        createDate:'2024-05-07'
    },{
        id:27,
        wordType:'CSS',
        wordName:'deg',
        wordText:'각도를 도 단위로 나타냄.',
        createDate:'2024-05-07'
    },{
        id:28,
        wordType:'CSS',
        wordName:'hover',
        wordText:'마우스를 요소 위에 올렸을 때 적용되는 스타일을 정의.',
        createDate:'2024-05-07'
    },{
        id:29,
        wordType:'JS',
        wordName:'구조분해할당',
        wordText:'배열이나 객체의 속성을 해체하여 그 값을 개별 변수에 담을 수 있게 하는 JavaScript 표현식.',
        createDate:'2024-05-07'
    },{
        id:30,
        wordType:'CSS',
        wordName:'border-radius',
        wordText:'테두리를 둥글게 만드는 속성.',
        createDate:'2024-05-07'
    },].reverse()
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