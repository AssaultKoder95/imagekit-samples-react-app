import React from 'react';
import { IKImage } from 'imagekitio-react';

const Blogs = () => {
	return (
		<div className="blogs">
			<div className="container">
				<div className="row">
					<div className="col text-center">
						<div className="section_title">
							<h2>Latest Blogs</h2>
						</div>
					</div>
				</div>
				<div className="row blogs_container">
					<div className="col-lg-4 blog_item_col">
						<div className="blog_item">
							<IKImage
								className="blog_background"
								alt="blog content placeholder"
								path="blog_1.jpg"
							/>
							<div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
								<h4 className="blog_title">
									Here are the trends I see coming this fall
								</h4>
								<span className="blog_meta">by admin | dec 01, 2017</span>
								<a className="blog_more" href="#no-link">
									Read more
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 blog_item_col">
						<div className="blog_item">
							<IKImage
								className="blog_background"
								alt="blog content placeholder"
								path="blog_2.jpg"
							/>
							<div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
								<h4 className="blog_title">
									Here are the trends I see coming this fall
								</h4>
								<span className="blog_meta">by admin | dec 01, 2017</span>
								<a className="blog_more" href="#no-link">
									Read more
								</a>
							</div>
						</div>
					</div>
					<div className="col-lg-4 blog_item_col">
						<div className="blog_item">
							<IKImage
								className="blog_background"
								alt="blog content placeholder"
								path="blog_3.jpg"
							/>
							<div className="blog_content d-flex flex-column align-items-center justify-content-center text-center">
								<h4 className="blog_title">
									Here are the trends I see coming this fall
								</h4>
								<span className="blog_meta">by admin | dec 01, 2017</span>
								<a className="blog_more" href="#no-link">
									Read more
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Blogs;
