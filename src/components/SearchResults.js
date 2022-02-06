import React from 'react';
import '../styles/SearchResults.css';

const SearchResults = ({ results }) => {
	if (!results.length) {
		return <p>No results</p>;
	} else {
		/// if reasults.length results.map over it

		/// return img with src passed into it.

		// const images = parsedImages.map(image => image.links[0].href);
		return (
			<div className="search-results">
				<p>Search results</p>
				<>
					{results.map(image => (
						<img className="card-image" src={image} alt="moon" />
					))}
				</>
			</div>
		);

		// return (
		// 	<div className="search-results">
		// 		<p>Search results</p>
		// 		<img
		// 			className="trial-image"
		// 			src="https://images.unsplash.com/photo-1522030299830-16b8d3d049fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
		// 			alt="moon"
		// 		/>
		// 	</div>
		// );
	}
};
export default SearchResults;
