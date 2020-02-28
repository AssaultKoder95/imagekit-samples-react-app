import React from 'react';
import Slider from './Slider';
import Banner from './Banner';
import NewArrivals from './NewArrivals';
import DealOfWeek from './DealOfWeek';
import BestSellers from './BestSellers';
import Benefits from './Benefits';
import Newsletter from './Newsletter';
import Blogs from './Blogs';

const MainModule = () => {
	return <div>
		<Slider />	
		<Banner />	
		<NewArrivals />
		<DealOfWeek />
		<BestSellers />
		<Benefits />
		<Newsletter />
		<Blogs />
	</div>;
};

export default MainModule;
