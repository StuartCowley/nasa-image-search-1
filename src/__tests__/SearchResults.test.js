import React from 'react';
import { render } from '@testing-library/react';
import SearchResults from '../components/SearchResults';

describe('SearchResults', () => {
	const validProps = {
		results: ['image.jpg', 'image2.jpg', 'image3.jpg'],
	};
	it('renders correctly', () => {
		const { asFragment } = render(
			<SearchResults results={validProps.results} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
});
