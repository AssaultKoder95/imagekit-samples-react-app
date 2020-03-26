import React from 'react';
import { IKImage } from 'imagekitio-react';
const ProductDetails = () => {
	return (
		<div className="tabs_section_container">
			<div className="container">
				<div className="row">
					<div className="col">
						<div className="tabs_container">
							<ul className="tabs d-flex flex-sm-row flex-column align-items-left align-items-md-center justify-content-center">
								<li className="tab active" data-active-tab="tab_1">
									<span>Description</span>
								</li>
								<li className="tab" data-active-tab="tab_2">
									<span>Additional Information</span>
								</li>
								<li className="tab" data-active-tab="tab_3">
									<span>Reviews (2)</span>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="row">
					<div className="col">
						<div id="tab_1" className="tab_container active">
							<div className="row">
								<div className="col-lg-5 desc_col">
									<div className="tab_title">
										<h4>Description</h4>
									</div>
									<div className="tab_text_block">
										<h2>Pocket cotton sweatshirt</h2>
										<p>
											Nam tempus turpis at metus scelerisque placerat nulla
											deumantos solicitud felis. Pellentesque diam dolor,
											elementum etos lobortis des mollis ut...
										</p>
									</div>
									<div className="tab_image">
										{/* <IKImage path="product-image-3.jpeg" transformation={{width: 450}}	
											srcSet="https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-3.jpeg?tr=w-450 990w,
													https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-3.jpeg?tr=w-380 575w"
											sizes="(max-width: 600px) 575px,
													990px"
											alt="sample product image"
										/> */}
										<IKImage path="product-image-4.jpeg"
												srcSet="
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-300 300w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-450 450w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-574 574w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-687 687w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-445 850w"
												alt="sample product image"
										/>
									</div>
									<div className="tab_text_block">
										<h2>Pocket cotton sweatshirt</h2>
										<p>
											Nam tempus turpis at metus scelerisque placerat nulla
											deumantos solicitud felis. Pellentesque diam dolor,
											elementum etos lobortis des mollis ut...
										</p>
									</div>
								</div>
								<div className="col-lg-5 offset-lg-2 desc_col">
									<div className="tab_image">
										<IKImage path="product-image-4.jpeg"
												srcSet="
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-300 300w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-450 450w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-574 574w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-687 687w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-445 850w"
												alt="sample product image"
										/>
									</div>
									<div className="tab_text_block">
										<h2>Pocket cotton sweatshirt</h2>
										<p>
											Nam tempus turpis at metus scelerisque placerat nulla
											deumantos solicitud felis. Pellentesque diam dolor,
											elementum etos lobortis des mollis ut...
										</p>
									</div>
									<div className="tab_image desc_last">
										{/* <IKImage path="product-image-5.jpeg" transformation={{width: 450}}	
											srcSet="https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-5.jpeg?tr=w-450 990w,
													https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-5.jpeg?tr=w-380 575w"
											sizes="(max-width: 600px) 575px,
													990px"
											alt="sample product image"
										/> */}
										<IKImage path="product-image-4.jpeg"
												srcSet="
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-300 300w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-450 450w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-574 574w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-687 687w,
												https://ik.imagekit.io/tutorials/frontend_sdk_demo_files/product-image-4.jpeg?tr=w-445 850w"
												alt="sample product image"
										/>
									</div>
								</div>
							</div>
						</div>

						<div id="tab_2" className="tab_container">
							<div className="row">
								<div className="col additional_info_col">
									<div className="tab_title additional_info_title">
										<h4>Additional Information</h4>
									</div>
									<p>
										COLOR:<span>Gold, Red</span>
									</p>
									<p>
										SIZE:<span>L,M,XL</span>
									</p>
								</div>
							</div>
						</div>

						<div id="tab_3" className="tab_container">
							<div className="row">
								<div className="col-lg-6 reviews_col">
									<div className="tab_title reviews_title">
										<h4>Reviews (2)</h4>
									</div>

									<div className="user_review_container d-flex flex-column flex-sm-row">
										<div className="user">
											<div className="user_pic"></div>
											<div className="user_rating">
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
											</div>
										</div>
										<div className="review">
											<div className="review_date">27 Aug 2016</div>
											<div className="user_name">Brandon William</div>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
										</div>
									</div>

									<div className="user_review_container d-flex flex-column flex-sm-row">
										<div className="user">
											<div className="user_pic"></div>
											<div className="user_rating">
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
											</div>
										</div>
										<div className="review">
											<div className="review_date">27 Aug 2016</div>
											<div className="user_name">Brandon William</div>
											<p>
												Lorem ipsum dolor sit amet, consectetur adipisicing
												elit, sed do eiusmod tempor incididunt ut labore et
												dolore magna aliqua.
											</p>
										</div>
									</div>
								</div>

								<div className="col-lg-6 add_review_col">
									<div className="add_review">
										<div id="review_form">
											<div>
												<h1>Add Review</h1>
												<input
													id="review_name"
													className="form_input input_name"
													type="text"
													name="name"
													placeholder="Name*"
													required="required"
													data-error="Name is required."
												/>
												<input
													id="review_email"
													className="form_input input_email"
													type="email"
													name="email"
													placeholder="Email*"
													required="required"
													data-error="Valid email is required."
												/>
											</div>
											<div>
												<h1>Your Rating:</h1>
												<ul className="user_star_rating">
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
												<textarea
													id="review_message"
													className="input_review"
													name="message"
													placeholder="Your Review"
													rows="4"
													required
													data-error="Please, leave us a review."
												></textarea>
											</div>
											<div className="text-left text-sm-right">
												<button
													id="review_submit"
													type="submit"
													className="red_button review_submit_btn trans_300"
													value="Submit"
												>
													submit
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetails;
