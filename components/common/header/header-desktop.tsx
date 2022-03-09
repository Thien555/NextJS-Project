import { Box, Container, Stack, Link as MuiLink } from '@mui/material';
import clsx from 'clsx';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import React from 'react';
import { ROUTE_LIST } from './routes';

type Props = {};

const HeaderDesktop = (props: Props) => {
	const router = useRouter();
	return (
		<Box display={{ xs: 'none', md: 'block' }} py={2}>
			<Container>
				<Stack direction="row" justifyContent="flex-end">
					{ROUTE_LIST.map((route) => (
						<Link key={route.path} href={route.path} passHref>
							<MuiLink sx={{ ml: 2 }} className={clsx({ active: router.pathname === route.path })}>
								{route.label}
							</MuiLink>
						</Link>
					))}
				</Stack>
			</Container>
		</Box>
	);
};

export default HeaderDesktop;
