import React from 'react';
import '../styles/SearchResults.css';
// import Search from '../components/Search.js';

const SearchResults = () => {
	return (
		<div className="search-results">
			<p>Search results</p>
			<img
				className="trial-image"
				src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
				alt="moon"
			/>
		</div>
	);
};
export default SearchResults;
