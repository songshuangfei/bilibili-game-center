const pageScroll = {
    _value:{
        find:0,
        home:10,
        my:0,
        rank:0,
    },

    _resetPageScroll():void{
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    },

    saveScrollTop(pageName:string):void{
        const scrollTop:number = document.documentElement.scrollTop || document.body.scrollTop;
        this._value[pageName] = scrollTop;
        this._resetPageScroll();
    },
   
    setScrollTopToPage(pageName:string):void{
        document.documentElement.scrollTop = this._value[pageName];
        document.body.scrollTop = this._value[pageName];
    },

    setPageScrollWithValue(v:number){
        document.documentElement.scrollTop = v;
        document.body.scrollTop  = v;
    }
}

export default pageScroll;