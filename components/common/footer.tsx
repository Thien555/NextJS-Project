import { Box } from '@mui/material';
import React from 'react';

const Footer = () => {
	console.log('render header');
	return (
		<Box component="footer" py={2} textAlign="center">
			Footer
		</Box>
	);
};

export default Footer;
