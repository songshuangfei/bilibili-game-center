const pageScroll = {
    _value:{
        find:0,
        home:0,
        my:0,
        rank:0,
    },

    _resetPageScroll():void{
        document.documentElement.scrollTop = 0;
    },

    saveScrollTop(pageName:string):void{
        const scrollTop:number = document.documentElement.scrollTop;
        this._value[pageName] = scrollTop;
        this._resetPageScroll();
    },
   
    setScrollTopToPage(pageName:string):void{
        document.documentElement.scrollTop = this._value[pageName];
    },

    setPageScrollWithValue(v:number){
        document.documentElement.scrollTop = 0;
    }
}

export default pageScroll;