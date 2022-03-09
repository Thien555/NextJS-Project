import { Box } from '@mui/material';
import React from 'react';

type Props = {};

const HeaderMobile = (props: Props) => {
	return <Box display={{ xs: 'block', md: 'none' }}>header-mobile</Box>;
};

export default HeaderMobile;
