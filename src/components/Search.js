import React, { useState } from 'react';
import '../styles/Search.css';
import getImages from '../requests/getImages';

const Search = ({ setSearchResults }) => {
	const [value, setValue] = useState();

	const handleSubmit = async event => {
		event.preventDefault();
		setSearchResults(await getImages(value));
	};
	// console.log(searchResults);
	return (
		<>
			<form className="search-form" onSubmit={handleSubmit}>
				<input
					className="search-input"
					type="text"
					onChange={event => setValue(event.target.value)}
				/>
				<button className="search-button" type="submit">
					search images
				</button>
			</form>
		</>
	);
};

export default Search;
