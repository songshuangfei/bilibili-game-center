import * as React from "react";
import {loadingIcon} from "src/components/icons"
import "./list-auto-loading.css";
import BlueBtn from '../blue-btn';

const Loading =()=>{
    return(
        <div className="common-list-auto-loading">
            <div className="loading-icon">
                <img src={loadingIcon} alt=""/>
            </div>
        </div>
    )
}

const Failed =(props:{retry:()=>void})=>{
    return(
        <div className="common-list-auto-loading">
            <div className="failed">
                服务器离家出走中("▔□▔)/
            </div>
            <div className="retry-btn" onClick={props.retry}>
                <BlueBtn width="4rem" height="2rem" link="#" name="重试"/>
            </div>
        </div>
    )
}

const Wait =()=>{
    return(
        <div className="common-list-auto-loading"/>
    )
}

const NoMore = ()=>(
    <div className="common-list-auto-loading">
        <div className="nomore">(〜￣△￣)〜没有更多了</div>
    </div>
)

enum loadingState {
    ready,
    loading,
    failed,
    nomore,
}

/**
 * @param props 
 */
function ListAutoLoading (props:{now:loadingState, failedRetry:()=>void}) {
    switch (props.now){
    case loadingState.loading:
        return <Loading/>
    case loadingState.failed:
        return <Failed retry={props.failedRetry}/>
    case loadingState.nomore:
        return <NoMore/>
    case loadingState.ready:
        return <Wait/> 
    }
}

export {
    ListAutoLoading,
    loadingState
};