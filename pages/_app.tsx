import { CacheProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { SWRConfig } from 'swr';
import axiosClient from '../api-client/axios-client';
import { EmptyLayout } from '../components/layout/empty';
import { AppPropsWithLayout } from '../models/common';
import '../styles/globals.css';
import createEmotionCache from '../utils/creat-emotion-cache';
import theme from '../utils/theme';

const clientSideEmotionCache = createEmotionCache();

function MyApp({
	Component,
	pageProps,
	emotionCache = clientSideEmotionCache,
}: AppPropsWithLayout) {
	const Layout = Component.Layout ?? EmptyLayout;
	return (
		<CacheProvider value={emotionCache}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<SWRConfig value={{ fetcher: (url) => axiosClient.get(url), shouldRetryOnError: false }}>
					<Layout>
						<Component {...pageProps} />
					</Layout>
				</SWRConfig>
			</ThemeProvider>
		</CacheProvider>
	);
}
export default MyApp;
