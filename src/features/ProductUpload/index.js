import React, { Component, useCallback, useState } from 'react';
import { IKUpload } from 'imagekitio-react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function getAuthParams() {
	return axios.get('http://localhost:5500/api/auth');
}

function createUploadData(data) {
	const uploadData = new FormData();
	uploadData.append('fileName', data.name);
	uploadData.append('file', data.file);
	uploadData.append('token', data.token);
	uploadData.append('expire', data.expire);
	uploadData.append('signature', data.signature);

	uploadData.append('publicKey', '6oogW9p+B5ZlRh7wRof6eB2OJZU=');

	return uploadData;
}

function MyDropzone() {
	const [files, setFiles] = useState();
	const onDrop = useCallback(
		acceptedFiles => {
			const reader = new FileReader();

			reader.onabort = () => console.log('file reading was aborted');
			reader.onerror = () => console.log('file reading has failed');
			reader.onload = () => {
				const file = reader.result;

				getAuthParams().then(response => {
					const { token, expire, signature } = response.data;

					const data = {
						name: acceptedFiles[0].name,
						file,
						token,
						expire,
						signature
					};

					const uploadData = createUploadData(data);

					axios
						.post('http://upload.imagekit.io/api/v1/files/upload', uploadData)
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
			reader.readAsDataURL(acceptedFiles[0]);
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
								<h5>Uploaded Images</h5>
								<img
									src={file.url + '?tr=n-media_library_thumbnail'}
									alt="uploaded images"
								/>
								<span>{file.name}</span>
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
		<div className="mt-5">
			<h4>Dropzone File Upload</h4>
			<div className="mt-2">
				<MyDropzone />
			</div>
		</div>
	);
};

const DynamicFileUpload = () => {
	const [tags, setTags] = useState([]);
	const [isPrivateFile, setIsPrivateFile] = useState(false);
	const [fileName, setFileName] = useState('');

	const typeActionObj = {
		tags: setTags,
		fileName: setFileName,
		isPrivateFile: setIsPrivateFile
	};

	const genericHandler = (e, type) => {
		e.preventDefault();
		const value = e.target.value;
		typeActionObj[type](value);
	};

	return (
		<div className="mt-5">
			<h4>Dynamic Fields File Upload</h4>
			<div className="mt-2 form-group">
				<input
					name="name"
					className="mt-2 form-control"
					placeholder="filename"
					onChange={e => genericHandler(e, 'fileName')}
				/>

				<input
					name="tags"
					className="mt-2 form-control"
					placeholder="tags"
					onChange={e => genericHandler(e, 'tags')}
				/>

				<select
					className="mt-2 form-control"
					onChange={e => genericHandler(e, 'isPrivateFile')}
				>
					<option>Is Private File</option>
					<option value="true">True</option>
					<option value="false">False</option>
				</select>

				<IKUpload
					className="mt-2 form-control"
					tags={tags}
					fileName={fileName}
					isPrivateFile={isPrivateFile}
				/>
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

				<div className="row" style={{ color: 'black' }}>
					<div className="col-log-3"></div>
					<div className="col-lg-6">
						<SingleFileUpload />
						<DropzoneFileUpload />
						<DynamicFileUpload />
					</div>
					<div className="col-log-3"></div>
				</div>
			</div>
		);
	}
}

export default ProductUpload;
