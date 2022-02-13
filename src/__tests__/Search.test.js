import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search';

describe('Search', () => {
	const validProps = {
		setSearchResults: () => {},
	};
	it('renders correctly', () => {
		const { asFragment } = render(
			<Search setSearchResults={validProps.setSearchResults} />,
		);
		expect(asFragment()).toMatchSnapshot();
	});
	it('button renders with correct text', () => {
		render(<Search setSearchResults={validProps.setSearchResults} />);
		const buttonElement = screen.getByText('SEARCH IMAGES');
		expect(buttonElement).toBeInTheDocument();
	});
});
