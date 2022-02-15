import { AppProps } from 'next/app';
import { Provider } from 'react-redux';

import { store } from '../app/store';

const CustomApp = ({ Component, pageProps }: AppProps) => {
	return (
		<Provider store={store}>
			<Component {...pageProps} />
		</Provider>
	);
};

export default CustomApp;
