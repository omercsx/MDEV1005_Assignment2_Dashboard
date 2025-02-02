import { useEffect, useState } from 'react';
import { collection, getDocs, getFirestore } from 'firebase/firestore';
import { Paper, Text, Avatar, Loader, Table } from '@mantine/core';

type UserData = {
	id: string;
	email: string;
	displayName: string | null;
	photoURL: string | null;
};

export function UserList() {
	const [users, setUsers] = useState<UserData[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		async function fetchUsers() {
			try {
				const db = getFirestore();
				const userCollection = collection(db, 'users');
				const querySnapshot = await getDocs(userCollection);

				const usersList = querySnapshot.docs.map(
					doc =>
						({
							id: doc.id,
							...doc.data(),
						} as UserData)
				);

				setUsers(usersList);
			} catch (error) {
				setError('Error fetching users');
				console.error('Error fetching users:', error);
			} finally {
				setLoading(false);
			}
		}

		fetchUsers();
	}, []);

	if (loading) {
		return (
			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<div className='flex items-center justify-center'>
					<Loader />
				</div>
			</Paper>
		);
	}

	if (error) {
		return (
			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				<Text className='text-red-500'>Error: {error}</Text>
			</Paper>
		);
	}

	return (
		<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
			<Text size='xl' fw={700} ta='center'>
				User List
			</Text>
			<Table striped highlightOnHover>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
						<th>Photo</th>
					</tr>
				</thead>
				<tbody>
					{users.map(user => (
						<tr key={user.id}>
							<td>{user.displayName}</td>
							<td>{user.email}</td>
							<td>
								<Avatar src={user.photoURL} size='sm' />
							</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Paper>
	);
}
