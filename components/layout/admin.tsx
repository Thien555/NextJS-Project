import React from 'react';
import { LayoutProps } from '../../models/common';
import Link from 'next/link';
import Auth from '../common/auth';
import { useRouter } from 'next/dist/client/router';
import { useAuth } from '../../hooks/use-auth';
interface Props {}

export const AdminLayout = ({ children }: LayoutProps) => {
	const router = useRouter();
	const { profile, logout } = useAuth();
	async function handelLogoutClick() {
		try {
			await logout();
			router.push('/login');
			router;
		} catch (error) {
			console.log('failed to get profile', error);
		}
	}
	return (
		<Auth>
			<div>
				<h1>Admin layout</h1>
				<div>Sidebar</div>
				<p>Profile:{JSON.stringify(profile)}</p>
				<button onClick={handelLogoutClick}>Logout</button>
				<Link href="/">
					<a>Home</a>
				</Link>
				<Link href="/about">
					<a>About</a>
				</Link>
				<div>{children}</div>
			</div>
		</Auth>
	);
};
