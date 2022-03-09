import { useRouter } from 'next/dist/client/router';
import React, { useEffect } from 'react';
import { useAuth } from '../../hooks/use-auth';

type AuthProps = {
	children: any;
};

const Auth = ({ children }: AuthProps) => {
	const router = useRouter();
	const { profile, error, firstLoading } = useAuth();
	useEffect(() => {
		if (!firstLoading && !profile?.username) {
			router.push('/login');
		}
	}, [profile, firstLoading, router]);

	if (!profile?.username) return <div>...loading</div>;

	return <div>{children}</div>;
};

export default Auth;
