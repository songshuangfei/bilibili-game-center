import * as React from 'react';
import "./h_scroll.css";
class HorizontalScroll extends React.Component {
    public state:any;
    public props:{style:{background:string},children:any};
    private container:any;// 容器，ref引用
    private content:any;// 内容，ref引用
    private startX:number;// 滑到边界，记录当前手指x坐标为起始位置
    
    constructor(props:any){
        super(props);
        this.state = {
            duration:"0s",
            x:0,
        };
        this.container = null;
        this.content = null;
        this.startX = NaN;
        
        this.touchStart = this.touchStart.bind(this)
        this.touchMove = this.touchMove.bind(this);
        this.touchEnd = this.touchEnd.bind(this)
    }

    public render(){
        return(
            <div    
                className="h-scroll-out"
                style={{background:this.props.style.background}}
            >
                <div 
                    className="h-scroll-container"
                    ref={(node)=>{this.container = node}}
                    onTouchStart={this.touchStart}
                    onTouchMove={this.touchMove}
                    onTouchEnd={this.touchEnd}
                    style={{transform: `translateX(${this.state.x}px)`,transitionDuration:this.state.duration}}
                >
                    <ul ref={(node)=>{this.content = node}} >
                        {this.props.children}
                    </ul>
                </div>
            </div>
        )
    }

    private touchStart(){
        this.setState({duration:"0s"})// 清除css变换过渡，防止拖动到边界出错
        // 不能设置为0，否则setState并不会引起更新，估计是与react更新时对新的state判断造成的。所以我们设置成“0s”
    }
    private touchMove(e:any){
        if( this.container.scrollLeft !== 0 &&
            this.container.scrollLeft + this.container.offsetWidth !== this.content.offsetWidth){
            return;// 滚动条未滑到两边，不作任何处理
        }
        if(!this.startX){// 滚动条到了两边，记录当前touch的x为起始位置
            this.startX = e.touches[0].clientX
        }
        const offset = e.touches[0].clientX - this.startX;// 计算手指滑动的位置

        this.setState({x:offset*0.2});// 滚动条尽头，移动滚动条容器，限制距离为手指滑动的0.2倍
    }

    private touchEnd(){
        this.startX = NaN;// 清除起始位置，以防下次touchMove出错
        this.setState({// 滚动条容器位置回弹，回弹过渡为0.4s。
            duration:"0.2s",
            x:0,
        })
    }
}

export default HorizontalScroll;