import * as React from 'react';
import "./h_scroll.css";

class HorizontalScroll extends React.Component {
    public props:{backgroundColor:string,children:any};
    public state:any;
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
                style={{background:this.props.backgroundColor}}
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

    public componentDidMount(){
        this.isArrivedRight();
    }

    private isArrivedRight():boolean{
        const containerWidth = this.container.getBoundingClientRect().width;
        const contentWidth = this.content.getBoundingClientRect().width;
        const d = this.container.scrollLeft + containerWidth - contentWidth;
        return Math.abs(d)<= 1;// 靠近右边1内就算到达
    }

    private isArrivedLeft():boolean{
        return this.container.scrollLeft === 0
    }

    private touchStart(){
        this.setState({duration:"0s"})// 清除css变换过渡，防止拖动到边界出错
        // 不能设置为0，否则setState并不会引起更新，估计是与react更新时对新的state判断造成的。所以我们设置成“0s”
    }
    
    private touchMove(e:any){
        if( !this.isArrivedLeft() && !this.isArrivedRight()){
            return;// 滚动条未滑到两边，不作任何处理
        }

        // 下面是滚动到了两边的逻辑（开始位移container），
        if(!this.startX){
            // touchMove第一次触发时记录当前touch的x为起始位置
            this.startX = e.touches[0].clientX;
            return;
        }

        // 下面是第二次touchMove第二次及以后的逻辑
        
        let offset = e.touches[0].clientX - this.startX;// 计算手指滑动的位置

        if(this.isArrivedLeft() && offset < 0){
            // 滑倒最左时,接下来往右滑动不松开再往左滑动至起始位置左侧时
            offset = 0;
        }

        if( this.isArrivedRight() && offset > 0){
            offset = 0
        }
        
        this.setState({x:offset*0.1});// 滚动条尽头，移动滚动条容器，限制距离为手指滑动的0.2倍
    }

    private touchEnd(){
        this.startX = NaN;// 清除起始位置，以防下次touchMove出错
        this.setState({// 滚动条容器位置回弹，回弹过渡为0.4s。
            duration:"0.2s",
            x:0,
        })
        console.log(this.container.scrollLeft)
    }
}

export default HorizontalScroll;