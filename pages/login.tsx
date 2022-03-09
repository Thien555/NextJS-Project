import { useRouter } from 'next/dist/client/router';
import React from 'react';
import { authApi } from '../api-client/auth-api';
import { useAuth } from '../hooks/use-auth';

type Props = {};

const Login = (props: Props) => {
	const router = useRouter();
	const { profile, login, logout } = useAuth({ revalidateOnMount: false });
	async function handleLoginClick() {
		try {
			await login();
			console.log('redirect to Home');
			router.push('/about');
		} catch (error) {
			console.log('failed to login', error);
		}
	}

	async function handelLogoutClick() {
		try {
			await logout();
		} catch (error) {
			console.log('failed to get profile', error);
		}
	}

	return (
		<div>
			<h1>Login Page</h1>
			<h1>Profile :{JSON.stringify(profile || {}, null, 4)} </h1>
			<button onClick={handleLoginClick}>Login</button>
			<button onClick={handelLogoutClick}>Logout</button>
		</div>
	);
};

export default Login;
