import React from 'react';
import { LayoutProps } from '../../models/common';
import Link from 'next/link';
import { Container, Stack } from '@mui/material';

import Footer from '../common/footer';
import { Box } from '@mui/system';
import Header from '../common/header';
interface PropsMainLayout {}

const MainLayout = ({ children }: LayoutProps) => {
	return (
		<Stack minHeight="100vh">
			<Header />
			<Box component="main" flexGrow={1}>
				{children}
			</Box>
			<Footer />
		</Stack>
	);
};

export default MainLayout;
