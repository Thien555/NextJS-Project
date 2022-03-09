import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { useRouter } from 'next/dist/client/router';
import MainLayout from '../components/layout/main';
import { NextPageWithLayout } from '../models/common';
import { Box } from '@mui/material';

const Home: NextPageWithLayout = () => {
	const router = useRouter();
	const goToDetailPage = () => {
		// router.push("/posts/123");
		router.push({
			pathname: '/posts/[postId]',
			query: {
				postId: 123,
				ref: 'social',
			},
		});
	};
	return <Box>Home Page</Box>;
};

Home.Layout = MainLayout; //su dung mainlayout cho trang home

export default Home;
