import React from 'react';
import StudentDetail from '../components/swr/StudentDetail';

type Props = {};

const SWRPage = (props: Props) => {
	return (
		<div>
			<h1>SWR Page</h1>
			<ul>
				<li>
					<StudentDetail studentId="sktwi1cgkkuif36f3" />
				</li>
				<li>
					<StudentDetail studentId="sktwi1cgkkuif36f3" />
				</li>
				<li>
					<StudentDetail studentId="sktwi1cgkkuif36f3" />
				</li>
			</ul>
		</div>
	);
};

export default SWRPage;
