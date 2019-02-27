import React,{useEffect} from 'react';
import HomeBanner from "./homeBanner";
import pageScroll from "root/components/commonFunc/scroll";
import HotGame from "./hotGame";
import HotStrategy from "./hotStrategy";

function Home(){
	useEffect(()=>{
		pageScroll.setScrollTopToPage("home");
		return ()=>{
			pageScroll.saveScrollTop("home");
		}
	})
	return(
		<div>
			<HomeBanner/>
			<HotGame/>
			<HotStrategy/>
		</div>
	)
}
export default Home;