const  scrollMonitor = {
    start(arrivedBottomAction:()=>any):void {
        function monitor(){
            const viewPortHeight = document.documentElement.clientHeight;
            const contentHeight = document.documentElement.scrollHeight;
            const scrollerTop = document.documentElement.scrollTop || document.body.scrollTop;
            if(viewPortHeight + scrollerTop >= contentHeight - 100){
                // 接近总长度的80%触发
                // 移动端的上下拖动页面高度会变化，所以阈值设置较小为0.8
                arrivedBottomAction();
            }   
        }
        document.onscroll = monitor;
    },
    stop():void{
        document.onscroll = null;
    }
}


export default scrollMonitor;