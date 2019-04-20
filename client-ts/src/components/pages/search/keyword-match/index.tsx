import * as React from "react";
import "./keyword-match.css"
class  KeywordMatch extends React.Component {
	public props:{keyword:string, clickGetKey:(key:string)=>void};
	public state:{matchedKeys:string[]}={
		matchedKeys:[]
	}

	
	// public componentWillReceiveProps(nextprops:any){
	// 	console.log(nextprops)
	// 	this.websocketGetMatchedKeys()
	// }
	
	// public componentDidMount(){
	// 	this.setState({
	// 		matchedKeys:["21",'123']
	// 	})
	// }

	public render () {
		const inputkey = this.props.keyword;
		return(
            <div className="keyword-match">
				<ul className="keys">
					<li className="key-item" onClick={()=>this.props.clickGetKey(inputkey)}>
						搜索 <span className="matched">{inputkey}</span>
					</li>
					{
						this.state.matchedKeys.map(v => {
							const result:string[] = v.split(this.props.keyword);
							return (
								<li key={v} className="key-item" onClick={()=>this.props.clickGetKey(v)}>
									<span>{result[0]}</span>
									<span className="matched">{this.props.keyword}</span>
									<span>{result[1]}</span>
								</li>	
							)
						})
					}
				</ul>
            </div>
		)
	}
	
	// private websocketGetMatchedKeys () {
	// 	this.setState({
	// 		matchedKeys:["21",'123']
	// 	})
	// }
}
export default KeywordMatch;