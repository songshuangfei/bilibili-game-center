import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
function Search(props:RouteComponentProps) {
	console.log(props.history)
	return <div>
		<p onClick={props.history.goBack}>
			back
		</p>
	</div>
}

export default Search;