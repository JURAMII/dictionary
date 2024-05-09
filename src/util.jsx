import html from './assets/html.png'
import css from './assets/css.png'
import js from './assets/js.png'
import react from './assets/react.png'
import node from './assets/node.png'

export const getLogo = (wordType) =>{
    // console.log(wordType)
    switch(wordType.toUpperCase()){
        case 'HTML': return html; //앞=write value
        case 'CSS': return css;
        case 'JS': return js;
        case 'REACT': return react;
        case 'NODE': return node;
    }
}
