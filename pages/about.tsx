import { Box, Typography } from '@mui/material';
import axios from 'axios';
import { useRouter } from 'next/dist/client/router';
import React, { useEffect, useState } from 'react';
import Header from '../components/common/header';
import { AdminLayout } from '../components/layout/admin';
import MainLayout from '../components/layout/main';
import handler from './api/hello';
// import dynamic from "next/dynamic";
// const Header = dynamic(() => import("../components/common/header"), {
//   ssr: false,
// });
interface AboutPageProps {}

const AboutPage = (props: AboutPageProps) => {
	const route = useRouter();
	const [postList, setPostList] = useState([]);
	const page = Number(route.query.page);

	useEffect(() => {
		if (!page) return;
		(async () => {
			const res = await axios.get(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`);
			setPostList(res.data.data);
		})();
	}, [page]);
	const handleOnClick = () => {
		route.push({
			pathname: '/about',
			query: { page: Number(route.query.page) + 1 },
		});
	};
	return (
		<Box>
			<Typography component="h1" variant="h3" color="primary.main">
				About Page
			</Typography>
			<Header />
			<ul>
				{postList.map((post: any) => (
					<li key={post.id}>{post.title}</li>
				))}
			</ul>
			<button onClick={handleOnClick}>Next</button>
		</Box>
	);
};

AboutPage.Layout = AdminLayout; // su dung mainlayout cho trang about nay
export function getStaticProps() {
	return {
		props: {},
	};
}
// export async function getServerSideProps() {
//   return {
//     props: {}, // will be passed to the page component as props
//   };
// }
export default AboutPage;
