import { Box } from '@mui/material';
import React from 'react';
import HeaderDesktop from './header-desktop';
import HeaderMobile from './header-mobile';

interface HeaderProps {}

const Header = (props: HeaderProps) => {
	return (
		<>
			<HeaderMobile />
			<HeaderDesktop />
		</>
	);
};

export default Header;
