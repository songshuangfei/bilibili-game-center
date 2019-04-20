import * as React from "react";
import NoLinkTitle from "src/components/commonComponent/no-link-title"
import "./hot-search.css";

function HotSearch (props:{hotSearchKeys:string[],clickGetKey:(key:string)=>void}){
    return(
        <div className="search-hot-keys">
            <NoLinkTitle title="热搜游戏" backgroundColor="none" showBlueMark={false}/>
            <div className="keys">
                {
                    props.hotSearchKeys.map(v=>(
                        <div className="key-item" 
                            key={v}
                            onClick={()=>{props.clickGetKey(v)}}
                        >
                            {v}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default HotSearch;