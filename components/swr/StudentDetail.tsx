import React from 'react';
import useSWR from 'swr';

type StudentDetailProps = {
	studentId: any;
};

const StudentDetail = ({ studentId }: StudentDetailProps) => {
	const { data, error, mutate, isValidating } = useSWR(`/students/${studentId}`, {
		revalidateOnFocus: false,
		dedupingInterval: 60 * 60 * 1000,
	});
	console.log('data', data);
	return (
		<div>
			<div>Name:{data?.name || '--'}</div>
		</div>
	);
};

export default StudentDetail;
