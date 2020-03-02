import React from 'react';
import ProductDisplay from './Display';
import ProductDetails from './Details';
import './Styles.css';
import './Responsive.css';

const Product = () => {
	return (
		<div>
			<ProductDisplay />
			<ProductDetails />
		</div>
	);
};

export default Product;
