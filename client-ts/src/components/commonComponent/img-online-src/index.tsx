import * as React from 'react';
/**
 * 本组建和普通img标签使用没有不同
 * 但能在图片加载完成后才渐变显示
 */
class ImgOnlineSrc extends React.Component {
    public props:{
        src:string,
        alt?:string,
        style?:React.CSSProperties,
        className?:string,
    }

    public state = {
        opacity:0
    }

    public duration = "0.2s";
    public opacity = 0;

    public onLoadHandler(){
        if(this.props.src === ""){
            return
        }
        this.opacity = 1;
        this.forceUpdate()
    }

    public componentWillMount(){
        if(this.isImdComplete()){
            this.duration = "0";
            this.opacity = 1;
        }else{
            this.duration = "0.2s";
            this.opacity = 0;
        }
    }
    
    public render() {
        return <img  
            style={{
                ...this.props.style,
                transitionDuration:this.duration,
                transitionTimingFunction:"ease-in-out",
                opacity:this.opacity,
            }}
            className={this.props.className} 
            src={this.props.src} 
            alt={this.props.alt}
            onLoad={()=>this.onLoadHandler()}
        />
    }

    private isImdComplete:()=>boolean = ()=> {
        if(this.props.src === ""){
            return false;
        }

        const myImg = new Image();    
        myImg.src = this.props.src;    
        const isComplete = myImg.complete
        if(isComplete) {    
            return true;  
        }else{    
            return false;  
        } 
    }
}

export default ImgOnlineSrc;