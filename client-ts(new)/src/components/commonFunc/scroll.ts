// export default pageScroll;
export default (function(){
    const value:{[index:string]:number} = {
        find:0,
        home:0,
        my:0,
        rank:0,
    };

    const pageScroll = {
        _resetPageScroll():void{
            document.documentElement.scrollTop = document.body.scrollTop = 0;
        },
    
        saveScrollTop(pageName:string):void{
            const scrollTop:number = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop;
            value[pageName] = scrollTop;
            this._resetPageScroll();
        },
       
        setScrollTopToPage(pageName:string):void{
            document.documentElement.scrollTop = document.body.scrollTop = value[pageName];
        }
    };
    return pageScroll;
})();
