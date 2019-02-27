import React, { useEffect } from 'react';
import pageScroll from "root/components/commonFunc/scroll"


const My = () => {
	useEffect(()=>{
		pageScroll.setScrollTopToPage("my");
		return ()=>{
			pageScroll.saveScrollTop("my");
		}
	})
	return(
		<div>
			my
		</div>
	)
}

export default My;