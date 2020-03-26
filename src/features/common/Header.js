import React from 'react';

const Header = () => {
	return (
		<div>
			<header className="header trans_300">
				<div className="top_nav">
					<div className="container">
						<div className="row">
							<div className="col-md-6">
								<div className="top_nav_left">
									free shipping on all u.s orders over $50
								</div>
							</div>
							<div className="col-md-6 text-right">
								<div className="top_nav_right">
									<ul className="top_nav_menu">
										<li className="currency">
											<a href="#no-link">
												usd
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="currency_selection">
												<li>
													<a href="#no-link">cad</a>
												</li>
												<li>
													<a href="#no-link">aud</a>
												</li>
												<li>
													<a href="#no-link">eur</a>
												</li>
												<li>
													<a href="#no-link">gbp</a>
												</li>
											</ul>
										</li>
										<li className="language">
											<a href="#no-link">
												English
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="language_selection">
												<li>
													<a href="#no-link">French</a>
												</li>
												<li>
													<a href="#no-link">Italian</a>
												</li>
												<li>
													<a href="#no-link">German</a>
												</li>
												<li>
													<a href="#no-link">Spanish</a>
												</li>
											</ul>
										</li>
										<li className="account">
											<a href="#no-link">
												My Account
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="account_selection">
												<li>
													<a href="#no-link">
														<i className="fa fa-sign-in" aria-hidden="true"></i>
														Sign In
													</a>
												</li>
												<li>
													<a href="#no-link">
														<i
															className="fa fa-user-plus"
															aria-hidden="true"
														></i>
														Register
													</a>
												</li>
											</ul>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="main_nav_container">
					<div className="container">
						<div className="row">
							<div className="col-lg-12 text-right">
								<div className="logo_container">
									<a href="/">
										colo<span>shop</span>
									</a>
								</div>
								<nav className="navbar">
									<ul className="navbar_menu">
										<li>
											<a href="/">Home</a>
										</li>
										<li>
											<a href="/categories">Product Listing</a>
										</li>
										<li>
											<a href="/single-product">Single Product Display</a>
										</li>
										<li>
											<a href="/product-upload">Product Upload</a>
										</li>
									</ul>
									<ul className="navbar_user">
										<li>
											<a href="#no-link">
												<i className="fa fa-search" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="#no-link">
												<i className="fa fa-user" aria-hidden="true"></i>
											</a>
										</li>
										<li className="checkout">
											<a href="#no-link">
												<i
													className="fa fa-shopping-cart"
													aria-hidden="true"
												></i>
												<span id="checkout_items" className="checkout_items">
													2
												</span>
											</a>
										</li>
									</ul>
									<div className="hamburger_container">
										<i className="fa fa-bars" aria-hidden="true"></i>
									</div>
								</nav>
							</div>
						</div>
					</div>
				</div>
			</header>

			<div className="fs_menu_overlay"></div>
			<div className="hamburger_menu">
				<div className="hamburger_close">
					<i className="fa fa-times" aria-hidden="true"></i>
				</div>
				<div className="hamburger_menu_content text-right">
					<ul className="menu_top_nav">
						<li className="menu_item has-children">
							<a href="#no-link">
								usd
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="menu_selection">
								<li>
									<a href="#no-link">cad</a>
								</li>
								<li>
									<a href="#no-link">aud</a>
								</li>
								<li>
									<a href="#no-link">eur</a>
								</li>
								<li>
									<a href="#no-link">gbp</a>
								</li>
							</ul>
						</li>
						<li className="menu_item has-children">
							<a href="#no-link">
								English
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="menu_selection">
								<li>
									<a href="#no-link">French</a>
								</li>
								<li>
									<a href="#no-link">Italian</a>
								</li>
								<li>
									<a href="#no-link">German</a>
								</li>
								<li>
									<a href="#no-link">Spanish</a>
								</li>
							</ul>
						</li>
						<li className="menu_item has-children">
							<a href="#no-link">
								My Account
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="menu_selection">
								<li>
									<a href="#no-link">
										<i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
									</a>
								</li>
								<li>
									<a href="#no-link">
										<i className="fa fa-user-plus" aria-hidden="true"></i>
										Register
									</a>
								</li>
							</ul>
						</li>
						<li className="menu_item">
							<a href="/">Home</a>
						</li>
						<li className="menu_item">
							<a href="/categories">Product Listing</a>
						</li>
						<li className="menu_item">
							<a href="/single-product">Single Product Display</a>
						</li>
						<li className="menu_item">
							<a href="/product-upload">Product Upload</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
