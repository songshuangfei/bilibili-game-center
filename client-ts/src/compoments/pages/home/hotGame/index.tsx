import * as React from 'react';
import HorizontalScroll from "src/compoments/commonComponent/horizontal-scroll"

const Item = (props:{id:any})=>{
    const style:any = {
            background:"#1d87b1",
            borderRadius:"6px",
            color:"#fff",
            height:"100px",
            lineHeight:"100px",
            margin:"10px",
            textAlign:"center",
            width:"80px",
        }
        
    return(
        <li style={style} >
            {props.id}
        </li>
    )
}

const HotGame = ()=> {
    const data = [
        {id:"001"},
        {id:"002"},
        {id:"003"},
        {id:"004"},
        {id:"005"},
        {id:"006"},
        {id:"007"},
        {id:"008"},
    ]
    return(
        <HorizontalScroll style={{background:"#fff"}}>
            {data.map( (v) => (
                <Item 
                    key={ v.id }
                    id={v.id}
                />
            ))}
        </HorizontalScroll>
    )
}
export default HotGame;
