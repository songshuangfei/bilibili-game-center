import React, { useEffect } from 'react';
import pageScroll from "root/components/commonFunc/scroll";

const Rank = () => {
	useEffect(()=>{
		pageScroll.setScrollTopToPage("rank");
		return ()=>{
			pageScroll.saveScrollTop("rank");
		}
	})
	return (
		<div>
			rank
		</div>
	)
}

export default Rank;