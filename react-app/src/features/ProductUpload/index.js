import React, { Component, useCallback, useState } from 'react';
import { IKUpload } from 'imagekitio-react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function MyDropzone() {
	const [files, setFiles] = useState();
	const onDrop = useCallback(
		acceptedFiles => {
			const reader = new FileReader();

			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
			reader.onload = () => {
				const fileData = reader.result;

				axios.get('http://localhost:5500/api/auth').then(response => {
					const { token, expire, signature } = response.data;
					const uploadData = new FormData();

					uploadData.append('fileName', acceptedFiles[0].name);
					uploadData.append('file', fileData);
					uploadData.append('token', token);
					uploadData.append('expire', expire);
					uploadData.append('signature', signature);
					// uploadData.append('publicKey', 'public_wl8pd3tjDmxldkdjlzVAKETHZ24=') // prod
					uploadData.append('publicKey', 'LmviRpcmROpSQBRwXjZmAM75Mcg='); // dev

					axios
						.post(
							'http://dev-upload.imagekit.io/api/v1/files/upload',
							uploadData
						)
						.then(response => {
							if (files && files.length) {
								const updatedFiles = [...files];
								updatedFiles.push(response.data);
								setFiles(updatedFiles);
							} else {
								const updatedFiles = [response.data];
								setFiles(updatedFiles);
							}
						});
				});
			};
			reader.readAsBinaryString(acceptedFiles[0]);
		},
		[files]
	);

	const { getRootProps, getInputProps, isDragActive } = useDropzone({
		onDrop,
		accept: 'image/*'
	});

	return (
		<section className="container">
			<div {...getRootProps({ className: 'dropzone' })}>
				<input {...getInputProps()} />
				{isDragActive ? (
					<p>Drop the files here ...</p>
				) : (
					<p>Drag 'n' drop some files here, or click to select files</p>
				)}
			</div>
			<div>
				{files &&
					files.map((file, index) => {
						return (
							<div key={index}>
								<span>{file.name} successfully uploaded</span>
								<ul>
									<li>File Path: {file.filePath}</li>
									<li>Thumbnail: {file.thumbnail}</li>
									<li>URL: {file.url}</li>
								</ul>
							</div>
						);
					})}
			</div>
		</section>
	);
}

class SingleFileUpload extends Component {
	render() {
		return (
			<div>
				<h4>Single File Upload</h4>
				<div className="mt-1">
					<IKUpload
						fileName="sample_image.jpg"
						tags={['sample', 'image']}
						useUniqueFileName={false}
						isPrivateFile={false}
					/>
				</div>
			</div>
		);
	}
}

const DropzoneFileUpload = () => {
	return (
		<div>
			<h4 className="mt-5">Dropzone File Upload</h4>
			<div className="mt-2">
				<MyDropzone />
			</div>
		</div>
	);
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
