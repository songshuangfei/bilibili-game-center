import React, { useEffect } from 'react';
import pageScroll from "root/components/commonFunc/scroll"

const Strategy = () => {
	useEffect(()=>{
		pageScroll.setScrollTopToPage("strategy");
		return ()=>{
			pageScroll.saveScrollTop("strategy");
		}
	})
	return (
		<div>
			str
		</div>
	)
}

export default Strategy;