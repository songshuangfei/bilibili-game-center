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

    public onLoadHandler(){
        this.setState({opacity:1})
    }
    
    public render() {
        return <img  
            style={{
                ...this.props.style,
                transitionDuration:"0.2s",
                transitionTimingFunction:"ease-in-out",
                opacity:this.state.opacity,
            }}
            className={this.props.className} 
            src={this.props.src} 
            alt={this.props.alt}

            onLoad={()=>this.onLoadHandler()}
        />
    }
}

export default ImgOnlineSrc;