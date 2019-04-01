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

    // public duration = "0.2s";
    public opacity = 0;

    /**
     * 图片加载完成，强制执行render
     */
    public onLoadHandler(){
        if(this.opacity === 1){
            return
        }
        this.forceUpdate()
    }

    public render() {
        // 空src返回空img
        if(this.props.src === ""){
            return <img src="" 
                style={this.props.style} 
                className={this.props.className} 
                alt={this.props.alt}
            />
        }

        // 根据图片加载状况设置透明度
        if(this.isImdComplete()){
            this.opacity = 1;
        }else{
            this.opacity = 0;
        }

        return <img  
            style={{
                ...this.props.style,
                transitionDuration:"0.2s",
                transitionTimingFunction:"ease-in-out",
                opacity:this.opacity,
            }}
            className={this.props.className} 
            src={this.props.src} 
            alt={this.props.alt}
            onLoad={()=>this.onLoadHandler()}
        />
    }

    /**
     * 判断图片是否加载完成
     */
    private isImdComplete:()=>boolean = ()=> {
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