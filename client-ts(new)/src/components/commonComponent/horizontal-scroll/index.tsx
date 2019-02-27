import React,{useState, useEffect} from 'react';
import "./h_scroll.css";

let container:any = null,// 容器，ref引用
    content:any = null,// 内容，ref引用
    startX:number = NaN;// 滑到边界，记录当前手指x坐标为起始位置


function HorizontalScroll( props:{backgroundColor:string,children: any}){
    let [duration,setDuration] = useState("0s"),
    [x,setX] = useState(0);

    let touchStart = ()=>{
        setDuration('0s');
    },
    touchMove = (e:any)=>{
        if( container.scrollLeft !== 0 &&
            container.scrollLeft + container.offsetWidth !== content.offsetWidth){
            return;// 滚动条未滑到两边，不作任何处理
        }
        if(!startX){// 滚动条到了两边，记录当前touch的x为起始位置
            startX = e.touches[0].clientX;
            return;
        }
        let offset = e.touches[0].clientX - startX;// 计算手指滑动的位置

        if(container.scrollLeft === 0 && offset < 0){
            offset = 0;
        }

        if(container.scrollLeft + container.offsetWidth === content.offsetWidth && offset > 0){
            offset = 0
        }
        setX(offset*0.1);
    },
    touchEnd = ()=>{
        startX = NaN;
        setX(0);
        setDuration("0.2s");
    }
    return(
        <div    
            className="h-scroll-out"
            style={{background:props.backgroundColor}}
        >
            <div 
                className="h-scroll-container"
                ref={(node)=>{container = node}}
                onTouchStart={touchStart}
                onTouchMove={touchMove}
                onTouchEnd={touchEnd}
                style={{transform: `translateX(${x}px)`,transitionDuration:duration}}
            >
                <ul ref={(node)=>{content = node}} >
                    {props.children}
                </ul>
            </div>
        </div>
    )
}

export default HorizontalScroll;
