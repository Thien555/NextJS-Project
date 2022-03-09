import type { NextApiRequest, NextApiResponse } from 'next';
import httpProxy from 'http-proxy';
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
	return new Promise((resolve) => {
		//convert cookie to Header Authorization
		const cookies = new Cookies(req, res);
		const accessToken = cookies.get('access_token');
		if (accessToken) {
			req.headers.authorization = `Bearer ${accessToken}`;
		}
		//don't send cookies to api server
		req.headers.cookie = ''; // bo cookie di

		//api/students
		//https://js-post-api.herokuapp.com/api/students
		proxy.web(req, res, {
			target: process.env.API_URL, //duong dan toi server
			changeOrigin: true, //vi gionf api/student giong leen chi can doi cai dang trc
			selfHandleResponse: false, //phan res tra ve thi proxy lam luon(handel res luon)
		});
		// res.status(200).json({ name: 'Path  main all here' });
		proxy.once('proxyRes', () => {
			resolve(true);
		});
	});
}
