//每次翻到页面底都会自动停止监听，此时在action里做完你的事情后，调用StartMonitor（）再次开启监听
function ScrollMonitor(action){
    // this.action = action;
    this._monitor = function (){
        var clientHeight = document.documentElement.clientHeight||document.body.clientHeight;//可视区域（容器）的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//可滑动的高度，内容即被容器影藏的高度；滑倒底部时的值最大
        var scrollHeight = document.documentElement.scrollHeight;//内容高度
        if(scrollTop/(scrollHeight-clientHeight) >= 0.8){//
            console.log("滑倒了底部");
            action();//
            window.onscroll = null;//>=0.9是个范围，在这个范围会一直执行seOnonscroll，所以达到这个范围应该马上取消监听
        }
    }
}

ScrollMonitor.prototype.StopMonitor=function(){
    window.onscroll = null;

}

ScrollMonitor.prototype.StartMonitor=function(){
    window.onscroll = this._monitor
}
export default ScrollMonitor;
