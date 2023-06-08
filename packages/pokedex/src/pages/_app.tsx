import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { Layout } from '../components/layouts/Layout';
import { wrapper } from '../store/store';
import '../styes/global.css';

export default function App({ Component, ...rest }: AppProps) {
	const { store, props } = wrapper.useWrappedStore(rest);
	const { pageProps } = props;
	return (
		<Provider store={store}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Provider>
	);
}
