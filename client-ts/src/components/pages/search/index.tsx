import * as React from "react";
import { RouteComponentProps} from "react-router-dom";
import ImgOnlineSrc from "src/components/commonComponent/img-online-src"
function Search(props:RouteComponentProps) {
	console.log(props.history)
	return <div>
		<ImgOnlineSrc src="//file.suafe.cn/blgc/gamecover/4.jpg"/>
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