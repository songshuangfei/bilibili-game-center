import * as React from "react";
import SearchGameList from "./search-game-list";
import SearchStrategyList from "./search-strategy-list";
class  AutoSearchBoard extends React.Component {
	public props:{keyword:string};
	public state={}

	public render () {
		return(
            <div>
			search the key {this.props.keyword}
			<SearchGameList/>
			<SearchStrategyList/>
            </div>
		)
	}
}
export default AutoSearchBoard;