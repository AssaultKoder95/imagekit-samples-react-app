import React, { Component } from 'react';
import { IKImage } from 'imagekitio-react';

const ListItem = ({ img }) => {
	return (
		<li className="active">
			<IKImage
				path={img.imgThumbnailURL}
				alt="this is alt text"
				data-image={img.imgURL}
			/>
		</li>
	);
};

const imageList = ['single_1', 'single_2', 'single_3'].map(img => {
	const imageDetailObj = {
		imgURL: `${img}.jpg`,
		imgThumbnailURL: `${img}_thumb.jpg`
	};

	return imageDetailObj;
});

class ProductDisplay extends Component {
	render() {
		return (
			<div className="container single_product_container">
				<div className="row">
					<div className="col">
						<div className="breadcrumbs d-flex flex-row align-items-center">
							<ul>
								<li>
									<a href="/">Home</a>
								</li>
								<li>
									<a href="/category">
										<i className="fa fa-angle-right" aria-hidden="true"></i>
										Men's
									</a>
								</li>
								<li className="active">
									<a href="#no-link">
										<i className="fa fa-angle-right" aria-hidden="true"></i>
										Single Product
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-lg-7">
						<div className="single_product_pics">
							<div className="row">
								<div className="col-lg-3 thumbnails_col order-lg-1 order-2">
									<div className="single_product_thumbnails">
										<ul>
											{imageList.map((img, index) => (
												<ListItem img={img} key={index} />
											))}
										</ul>
									</div>
								</div>
								<div className="col-lg-9 image_col order-lg-2 order-1">
									<div className="single_product_image">
										<div
											className="single_product_image_background"
											style={{ backgroundImage: 'url(images/single_2.jpg)' }}
										></div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-lg-5">
						<div className="product_details">
							<div className="product_details_title">
								<h2>Pocket cotton sweatshirt</h2>
								<p>
									Nam tempus turpis at metus scelerisque placerat nulla
									deumantos solicitud felis. Pellentesque diam dolor, elementum
									etos lobortis des mollis ut...
								</p>
							</div>
							<div className="free_delivery d-flex flex-row align-items-center justify-content-center">
								<span className="ti-truck"></span>
								<span>free delivery</span>
							</div>
							<div className="original_price">$629.99</div>
							<div className="product_price">$495.00</div>
							<ul className="star_rating">
								<li>
									<i className="fa fa-star" aria-hidden="true"></i>
								</li>
								<li>
									<i className="fa fa-star" aria-hidden="true"></i>
								</li>
								<li>
									<i className="fa fa-star" aria-hidden="true"></i>
								</li>
								<li>
									<i className="fa fa-star" aria-hidden="true"></i>
								</li>
								<li>
									<i className="fa fa-star-o" aria-hidden="true"></i>
								</li>
							</ul>
							<div className="product_color">
								<span>Select Color:</span>
								<ul>
									<li style={{ background: '#e54e5d' }}></li>
									<li style={{ background: '#252525' }}></li>
									<li style={{ background: '#60b3f3' }}></li>
								</ul>
							</div>
							<div className="quantity d-flex flex-column flex-sm-row align-items-sm-center">
								<span>Quantity:</span>
								<div className="quantity_selector">
									<span className="minus">
										<i className="fa fa-minus" aria-hidden="true"></i>
									</span>
									<span id="quantity_value">1</span>
									<span className="plus">
										<i className="fa fa-plus" aria-hidden="true"></i>
									</span>
								</div>
								<div className="red_button add_to_cart_button">
									<a href="#no-link">add to cart</a>
								</div>
								<div className="product_favorite d-flex flex-column align-items-center justify-content-center"></div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default ProductDisplay;
