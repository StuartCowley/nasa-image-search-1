import React from 'react';
import '../styles/SearchResults.css';
import PropTypes from 'prop-types';

const SearchResults = ({ results, error }) => {
	if (error) {
		return <h2>Sorry, no results</h2>;
	}
	if (results.length > 0) {
		return (
			<div className="search-results">
				<h2>Search results</h2>
				<div className="image-grid">
					{results.map(image => (
						<img
							key={image}
							className="card-image"
							src={image}
							alt="moon"
						/>
					))}
				</div>
			</div>
		);
	}
	return null;
};
export default SearchResults;

SearchResults.propTypes = {
	results: PropTypes.arrayOf(PropTypes.string),
};
