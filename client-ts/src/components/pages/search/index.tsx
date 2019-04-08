import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
function Search(props:RouteComponentProps) {
	return <div>
		<p onClick={props.history.goBack}>
			back
		</p>
	</div>
}

export default Search;