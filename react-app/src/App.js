import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import Newsletter from './components/Newsletter';
import Main from './components/Main';

function App() {
	return (
		<div>
			<Header />
			<Main />
			<Blogs />
			<Newsletter />
			<Footer />
		</div>
	);
}

export default App;
