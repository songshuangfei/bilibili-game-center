import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
function Search(props:RouteComponentProps) {
	console.log(props.history)
	return <div>
		<li onClick={props.history.goBack}>
			1123123
			<br/>
			1123123123<br/>
			1123123<br/>
			1
		</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
		<li>1</li>
	</div>
}

export default Search;