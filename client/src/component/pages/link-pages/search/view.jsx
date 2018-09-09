import React,{Component} from "react";
import "./style.less"


const SugItem = (props)=>{
    return(
        <div className="sug-item">
            {props.name}
        </div>
    )
}

class Suggest extends Component {
    constructor(){
        super();
        this.state = {
            data:[]
        }
    }

    componentDidMount(){
        this.setState({
            data:[
                {name:"fgo"},
                {name:"魔法少女小圆外传"},
                {name:"公主连结Re：Dive"},
                {name:"崩坏三"},
                {name:"第五人格"},
                {name:"大王不高兴"},
                {name:"信任的进化"},
                
            ]
        })
    }
    render(){
        let data = this.state.data;
        return (
            <div className="suggest">
                <div className="suggest-title">热搜游戏</div>
                <div className="suggest-list">
                    {
                        data.map((v,i)=>(
                            <SugItem name={v.name} key={i}/>
                        ))
                    }
                </div>
            </div>
        )
    }
}



class SearchPage extends Component {
    render(){
        return(
            <div className="search-page">
                <Suggest/>
            </div>
        )
    }
}

export default SearchPage;