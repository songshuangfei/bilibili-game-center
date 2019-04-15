import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import titleIcon from "src/components/icons/title-icons";
import "./search-page.css"
function Search(props:RouteComponentProps) {
	return (
		<div className="search-page">
			<div className="search-title">
				<div className="back-btn" onClick={props.history.goBack}>
					<img src={titleIcon.back} alt=""/>
				</div>
				<div className="search-input">123</div>
				<div className="search-btn" >
					<img src={titleIcon.search} alt=""/>
				</div>
			</div>
			<p onClick={props.history.goBack}>
				back
			</p>
		</div>
	)
}

export default Search;