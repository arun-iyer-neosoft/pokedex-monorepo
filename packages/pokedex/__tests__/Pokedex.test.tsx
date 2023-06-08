import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import Home from '../src/pages';
import { reduxMockData } from '../src/utils/reduxMockData';

jest.mock('next/router', () => require('next-router-mock'));

const mockStore = configureStore([thunk]);
const store = mockStore(reduxMockData);
describe('pokemon-list', () => {
	it('List rendered successfully', () => {
		const { container } = render(
			<Provider store={store}>
				<Home />
			</Provider>
		);
		expect(container).toMatchSnapshot();
	});

	it('Navigate to pokemon details page on view link click', () => {
		render(
			<Provider store={store}>
				<Home />
			</Provider>
		);

		let myLink =
			screen.getByText('bulbasaur').parentElement?.nextElementSibling
				?.firstChild;
		expect(myLink).toHaveAttribute('href', '/bulbasaur');
	});
});
