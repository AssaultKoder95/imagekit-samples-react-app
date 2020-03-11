import React, { Component } from 'react';
import { IKUpload } from 'imagekitio-react';

class SingleFileUpload extends Component {
	render() {
		return (
			<div>
				<h4>Single File Upload</h4>
				<div className="mt-1">
					<IKUpload
						fileName="abc.jpg"
						tags={['tag1']}
						useUniqueFileName={true}
						isPrivateFile={false}
					/>
				</div>
			</div>
		);
	}
}

const DropzoneFileUpload = () => {
	return <h4 className="mt-5">Dropzone File Upload</h4>;
};

class ProductUpload extends Component {
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
								<li className="active">
									<a href="#no-link">
										<i className="fa fa-angle-right" aria-hidden="true"></i>
										Product Upload
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="row">
					<div className="col-log-3"></div>
					<div className="col-lg-6">
						<SingleFileUpload />
						<DropzoneFileUpload />
					</div>
					<div className="col-log-3"></div>
				</div>
			</div>
		);
	}
}

export default ProductUpload;
