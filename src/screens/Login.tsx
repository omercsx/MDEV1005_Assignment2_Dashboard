import { useState } from 'react';
import {
	TextInput,
	PasswordInput,
	Button,
	Paper,
	Title,
	Container,
	Alert,
} from '@mantine/core';
import { auth } from '../firebase';
import { useNavigate } from 'react-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router';

export function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			await signInWithEmailAndPassword(auth, email, password);
			navigate('/');
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: 'Failed to login. Please check your credentials.'
			);
		}
	};

	return (
		<Container size={420} my={40}>
			<Title ta='center' className='font-bold mb-6'>
				Welcome back!
			</Title>

			<Paper withBorder shadow='md' p={30} mt={30} radius='md'>
				{error && (
					<Alert color='red' className='mb-4'>
						{error}
					</Alert>
				)}

				<form onSubmit={handleSubmit}>
					<TextInput
						label='Email'
						placeholder='your@email.com'
						required
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>

					<PasswordInput
						label='Password'
						placeholder='Your password'
						required
						mt='md'
						value={password}
						onChange={e => setPassword(e.target.value)}
					/>

					<Button type='submit' fullWidth mt='xl'>
						Sign in
					</Button>
				</form>

				<div className='mt-4 text-center'>
					Don't have an account?{' '}
					<Link to='/register' className='text-blue-500 hover:underline'>
						Register
					</Link>
				</div>
			</Paper>
		</Container>
	);
}
