import { useState } from 'react';
import '../styles/Search.css';

const Search = () => {
	const [value, setValue] = useState();
	return (
		<>
			<input
				className="search-input"
				type="text"
				onChange={event => setValue(event.target.value)}
			/>
			<button className="search-button" type="submit">
				search images
			</button>
		</>
	);
};

export default Search;
