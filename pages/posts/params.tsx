import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { useRouter } from 'next/dist/client/router';
import { route } from 'next/dist/server/router';
import React from 'react';

interface Props {
	post: any;
	query: any;
}

const ParamsPostPage = ({ post, query }: Props) => {
	const route = useRouter();
	return (
		<div>
			<h1>Create List Page</h1>
			<p>Query: {JSON.stringify(route.query)}</p>
		</div>
	);
};

export default ParamsPostPage;

const getServerSidePops = async () => {
	await new Promise((resolve) => setTimeout(resolve, 3000));
	return {
		props: {},
	};
};
