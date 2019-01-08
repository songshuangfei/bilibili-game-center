import * as React from 'react';
import { Link } from 'react-router-dom';
function Home() {
	return <div>
		{[1,2,3].map(v=><li key={v}>v</li>)}
		<Link to="/search">ssss</Link>
	</div>
}


export default Home;