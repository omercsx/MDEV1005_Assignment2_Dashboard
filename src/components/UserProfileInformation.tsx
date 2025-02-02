import { Text, Button, Paper, Loader, Avatar } from '@mantine/core';
import { useUser } from '../contexts/UserContext';
import { useNavigate } from 'react-router';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

export function UserProfileInformation() {
	const { user, loading } = useUser();
	const navigate = useNavigate();

	const handleLogout = async () => {
		await signOut(auth);
		navigate('/login');
	};

	return (
		<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
			<Text size='xl' fw={700} ta='center'>
				User Profile Information
			</Text>
			{loading ? (
				<Loader />
			) : (
				<div className='flex items-center justify-center gap-4'>
					<Avatar src={user?.photoURL} size='lg' />
					<div className='flex flex-col items-start justify-center'>
						<Text>Name: {user?.displayName || 'No name'}</Text>
						<Text>Email: {user?.email || 'No email'}</Text>
						<Button onClick={handleLogout} variant='outline' color='red'>
							Logout
						</Button>
					</div>
				</div>
			)}
		</Paper>
	);
}
