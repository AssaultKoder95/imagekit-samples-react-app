import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Common Modules
import Benefits from './common/Benefits';
import Newsletter from './common/Newsletter';
import Blogs from './common/Blogs';

// Page Specific Modules
import {
	Banner,
	BestSellers,
	DealOfWeek,
	NewArrivals,
	Slider
} from './LandingPage';

import Product from './Product';

import Category from './Category';

export default function RouterModule() {
	return (
		<Router>
			<Switch>
				<Route exact path="/" component={LandingPageModule}></Route>
				<Route path="/categories" component={CategoryModule}></Route>
				<Route path="/single-product" component={SingleProductModule}></Route>
			</Switch>

			<Benefits />
			<Newsletter />
		</Router>
	);
}

const SingleProductModule = () => {
	return <Product />;
};

const LandingPageModule = () => {
	return (
		<div>
			<Slider />
			<Banner />
			<NewArrivals />
			<DealOfWeek />
			<BestSellers />
			<Blogs />
		</div>
	);
};

const CategoryModule = () => {
	return <Category />;
};
