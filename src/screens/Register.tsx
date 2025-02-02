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
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router';

export function Register() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		try {
			setLoading(true);
			await createUserWithEmailAndPassword(auth, email, password);
			navigate('/dashboard');
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'An unknown error occurred'
			);
		} finally {
			setLoading(false);
		}
	};

	return (
		<Container size={420} my={40}>
			<Title ta='center' className='font-bold mb-5'>
				Register
			</Title>
			<Paper withBorder shadow='md' p={30} radius='md'>
				<form onSubmit={handleSubmit} className='space-y-4'>
					<TextInput
						label='Email'
						placeholder='your@email.com'
						value={email}
						onChange={e => setEmail(e.target.value)}
						required
					/>
					<PasswordInput
						label='Password'
						placeholder='Your password'
						value={password}
						onChange={e => setPassword(e.target.value)}
						required
					/>

					{error && <Alert color='red'>{error}</Alert>}
					<Button type='submit' fullWidth loading={loading}>
						Register
					</Button>

					<div className='flex justify-center'>
						<Link to='/login'>Already have an account? Login</Link>
					</div>
				</form>
			</Paper>
		</Container>
	);
}
