import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { IKContext } from 'imagekitio-react';

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

import ProductUpload from './ProductUpload';

export default function RouterModule() {
	return (
		<IKContext
			publicKey="public_wl8pd3tjDmxldkdjlzVAKETHZ24="
			urlEndpoint="https://ik.imagekit.io/tutorials/frontend_sdk_demo_files"
			authenticationEndpoint="http://localhost:5500/api/auth"
		>
			<Router>
				<Switch>
					<Route exact path="/" component={LandingPageModule}></Route>
					<Route path="/categories" component={CategoryModule}></Route>
					<Route path="/single-product" component={SingleProductModule}></Route>
					<Route path="/product-upload" component={ProductUploadModule}></Route>
					<Redirect from="*" to="/" />
				</Switch>

				<Benefits />
				<Newsletter />
			</Router>
		</IKContext>
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

const ProductUploadModule = () => {
	return <ProductUpload />;
}