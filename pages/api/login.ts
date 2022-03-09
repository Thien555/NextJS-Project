import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy, { ProxyResCallback } from 'http-proxy';
import Cookies from 'cookies';
// type Data = {
// 	name: string;
// };

export const config = {
	api: {
		bodyParser: false,
	},
};

const proxy = httpProxy.createProxyServer();
export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
	if (req.method !== 'POST') {
		return res.status(404).json({ message: 'not support method' });
	}
	return new Promise((resolve) => {
		//don't send cookies to api server
		req.headers.cookie = '';

		const handelLoginResponse: ProxyResCallback = (proxyRes, req, res) => {
			let body = '';
			proxyRes.on('data', function (chunk) {
				body += chunk;
			});
			proxyRes.on('end', function () {
				try {
					const { accessToken, expiredAt } = JSON.parse(body);
					//convert token to cookie
					const cookies = new Cookies(req, res, { secure: process.env.NODE_ENV !== 'development' });
					cookies.set('access_token', accessToken, {
						httpOnly: true,
						sameSite: 'lax',
						expires: new Date(expiredAt),
					});
					// res.end('end hello');
					(res as NextApiResponse).status(200).json({ message: 'successfully' });
				} catch (error) {
					(res as NextApiResponse).status(200).json({ message: 'something went wrong' });
				}

				resolve(true);
			});
		};

		proxy.once('proxyRes', handelLoginResponse);

		proxy.web(req, res, {
			target: process.env.API_URL, //duong dan toi server
			changeOrigin: true, //vi gionf api/student giong leen chi can doi cai dang trc
			selfHandleResponse: true, //phan res tra ve thi proxy lam luon(handel res luon)
		});
		// res.status(200).json({ name: 'Path  main all here' });
		proxy.once('proxyRes', () => {
			resolve(true);
		});
	});
}
