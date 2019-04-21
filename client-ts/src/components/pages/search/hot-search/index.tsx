import * as React from "react";
import NoLinkTitle from "src/components/commonComponent/no-link-title"
import "./hot-search.css";
import { connect } from "react-redux";
import { setSearchHotKeys } from "src/action/actions";
import { searchHotKeysApi } from "src/api-request/search"

class HotSearch extends React.Component{
    public props:{
        items:string[], 
        setSearchHotKeys:(items:string[]) =>void,
        clickGetKey:(key:string)=>void
    }
    public render(){
        return(
            <div className="search-hot-keys">
                <NoLinkTitle title="热搜游戏" backgroundColor="none" showBlueMark={false}/>
                <div className="keys">
                    {
                        this.props.items.map(v=>(
                            <div className="key-item" 
                                key={v}
                                onClick={()=>{this.props.clickGetKey(v)}}
                            >
                                {v}
                            </div>
                        ))
                    }
                </div>
            </div>
        )
    }
    public componentDidMount(){
        if(this.props.items.length!==0){
            return;
        }

        const that = this;
        searchHotKeysApi(data=>{
            that.props.setSearchHotKeys(data)
        })
    }
}

export default function (props:{clickGetKey:(key:string)=>void}){
    const DecoratedHotSearch = connect(
        (state:any) => ({
            items: state.searchHotKeys,
        }),(dispatch:any) => ({
            setSearchHotKeys: (items:string[]) => dispatch(setSearchHotKeys(items)),
            clickGetKey:props.clickGetKey
        })
    )(HotSearch)
    return <DecoratedHotSearch/>
}
