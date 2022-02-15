import React, { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';
import PropTypes from 'prop-types';

const Search = ({ setSearchResults, setErrorMessage }) => {
	const [value, setValue] = useState();

	const handleSubmit = async event => {
		event.preventDefault();
		const images = await getImages(value);
		setSearchResults(images);
		if (images.length === 0) {
			setErrorMessage(true);
		} else {
			setErrorMessage(false);
		}
	};
	return (
		<div className="search-wrapper">
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					className="search-input"
					type="text"
					placeholder="find your perfect space"
					onChange={event => setValue(event.target.value)}
				/>
				<button className="search-button" type="submit">
					SEARCH IMAGES
				</button>
			</form>
		</div>
	);
};

Search.propTypes = {
	setSearchResults: PropTypes.func,
};

export default Search;
