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
											<a href="/index.html">
												usd
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="currency_selection">
												<li>
													<a href="/index.html">cad</a>
												</li>
												<li>
													<a href="/index.html">aud</a>
												</li>
												<li>
													<a href="/index.html">eur</a>
												</li>
												<li>
													<a href="/index.html">gbp</a>
												</li>
											</ul>
										</li>
										<li className="language">
											<a href="/index.html">
												English
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="language_selection">
												<li>
													<a href="/index.html">French</a>
												</li>
												<li>
													<a href="/index.html">Italian</a>
												</li>
												<li>
													<a href="/index.html">German</a>
												</li>
												<li>
													<a href="/index.html">Spanish</a>
												</li>
											</ul>
										</li>
										<li className="account">
											<a href="/index.html">
												My Account
												<i className="fa fa-angle-down"></i>
											</a>
											<ul className="account_selection">
												<li>
													<a href="/index.html">
														<i className="fa fa-sign-in" aria-hidden="true"></i>Sign
														In
													</a>
												</li>
												<li>
													<a href="/index.html">
														<i className="fa fa-user-plus" aria-hidden="true"></i>
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
									<a href="/index.html">
										colo<span>shop</span>
									</a>
								</div>
								<nav className="navbar">
									<ul className="navbar_menu">
										<li>
											<a href="/index.html">home</a>
										</li>
										<li>
											<a href="/index.html">shop</a>
										</li>
										<li>
											<a href="/index.html">promotion</a>
										</li>
										<li>
											<a href="/index.html">pages</a>
										</li>
										<li>
											<a href="/index.html">blog</a>
										</li>
										<li>
											<a href="contact.html">contact</a>
										</li>
									</ul>
									<ul className="navbar_user">
										<li>
											<a href="/index.html">
												<i className="fa fa-search" aria-hidden="true"></i>
											</a>
										</li>
										<li>
											<a href="/index.html">
												<i className="fa fa-user" aria-hidden="true"></i>
											</a>
										</li>
										<li className="checkout">
											<a href="/index.html">
												<i className="fa fa-shopping-cart" aria-hidden="true"></i>
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
							<a href="/index.html">
								usd
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="menu_selection">
								<li>
									<a href="/index.html">cad</a>
								</li>
								<li>
									<a href="/index.html">aud</a>
								</li>
								<li>
									<a href="/index.html">eur</a>
								</li>
								<li>
									<a href="/index.html">gbp</a>
								</li>
							</ul>
						</li>
						<li className="menu_item has-children">
							<a href="/index.html">
								English
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="menu_selection">
								<li>
									<a href="/index.html">French</a>
								</li>
								<li>
									<a href="/index.html">Italian</a>
								</li>
								<li>
									<a href="/index.html">German</a>
								</li>
								<li>
									<a href="/index.html">Spanish</a>
								</li>
							</ul>
						</li>
						<li className="menu_item has-children">
							<a href="/index.html">
								My Account
								<i className="fa fa-angle-down"></i>
							</a>
							<ul className="menu_selection">
								<li>
									<a href="/index.html">
										<i className="fa fa-sign-in" aria-hidden="true"></i>Sign In
									</a>
								</li>
								<li>
									<a href="/index.html">
										<i className="fa fa-user-plus" aria-hidden="true"></i>Register
									</a>
								</li>
							</ul>
						</li>
						<li className="menu_item">
							<a href="/index.html">home</a>
						</li>
						<li className="menu_item">
							<a href="/index.html">shop</a>
						</li>
						<li className="menu_item">
							<a href="/index.html">promotion</a>
						</li>
						<li className="menu_item">
							<a href="/index.html">pages</a>
						</li>
						<li className="menu_item">
							<a href="/index.html">blog</a>
						</li>
						<li className="menu_item">
							<a href="/index.html">contact</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Header;
