import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import titleIcon from "src/components/icons/title-icons";
import HotSearch from "./hot-search";
import AutoSearchBoard from "./search-result";
import KeywordMatch from "./keyword-match"
import "./search-page.css"

class  Search extends React.Component {
	public props:RouteComponentProps;
	public state:{
		keyword:string,
		hotSearchKeys:string[],
		isSearched:boolean
	} = {
		keyword:"",
		hotSearchKeys:[],
		isSearched:false
	}

	public componentDidMount(){
			this.getHotSearch();
	}

	public render () {
		return(
			<div className="search-page">
				{/* search input title*/}
				<div className="search-title">
					<div className="back-btn" onClick={this.props.history.goBack}>
						<img src={titleIcon.back} alt=""/>
					</div>
					<div className="search-input">
						<form onSubmit={this.submitHandler}>
							<input 
								type="text" 
								placeholder="搜索游戏..." 
								onChange={this.keywordChangeHandler}
								value={this.state.keyword}
							/>
						</form>
					</div>
					<div className="clear-btn">
						<div style={{display:this.state.keyword===""?"none":"block"}} onClick={this.inputClean}>
							×
						</div>
					</div>
					<div className="search-btn" onClick={this.clickToSubmit}>
						<img src={titleIcon.search} alt=""/>
					</div>
				</div>
				{/* auto search with a key*/}
				<div className="search-content">
					{
						this.state.isSearched && this.state.keyword !== ""?
						<AutoSearchBoard keyword={this.state.keyword} />:
						(
							this.state.keyword === ""?
							<HotSearch 
								clickGetKey={this.getClickedKeyword} 
								hotSearchKeys={this.state.hotSearchKeys}
							/>:
							<KeywordMatch 
								keyword={this.state.keyword}
								clickGetKey={this.getClickedKeyword} 
							/>
						)
					}
				</div>
			</div>
		)
	}

	private getHotSearch = ()=>{
		setTimeout(() => {
			this.setState({
				hotSearchKeys:["Fate","约会大作战","崩坏3rd","第五人格","妈妈把我的游戏藏起来了"]
			})
		}, 2000);
	}

	private keywordChangeHandler = (e:React.ChangeEvent<HTMLInputElement>)=>{
		this.setState({
			keyword:e.target.value,
			isSearched:false,
		})
	}

	private submitHandler = (e:React.FormEvent<HTMLFormElement>)=>{
		e.preventDefault();
		this.setState({
			isSearched:true
		})
	}

	private clickToSubmit =()=>{
		this.setState({
			isSearched:true
		})
	}

	private inputClean = ()=>{
		this.setState({
			keyword:"",
			isSearched:false
		})
	}

	private getClickedKeyword = (key:string)=>{
		this.setState({
			keyword:key,
			isSearched:true
		})
	}
}

export default Search;