import { useEffect, useState } from 'react';
import { Button } from '@mantine/core';

interface DadJoke {
	id: string;
	joke: string;
	status: number;
}

export function DadJokeWidget() {
	const [joke, setJoke] = useState<DadJoke | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchJoke = async () => {
		setLoading(true);
		try {
			const response = await fetch('https://icanhazdadjoke.com/', {
				headers: {
					Accept: 'application/json',
					'User-Agent':
						'MDEV1005 Dashboard App (https://github.com/yourusername/your-repo)',
				},
			});
			if (!response.ok) throw new Error('Failed to fetch joke');
			const data = await response.json();
			setJoke(data);
		} catch (err) {
			setError(err instanceof Error ? err.message : 'Failed to fetch joke');
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchJoke();
	}, []);

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
			<h2 className='text-xl font-bold mb-4 text-gray-800'>
				Dad Joke of the Moment
			</h2>
			{loading && <p className='text-gray-600'>Loading joke...</p>}
			{error && <p className='text-red-500'>Error: {error}</p>}
			{joke && (
				<div>
					<p className='text-gray-700 italic mb-4'>{joke.joke}</p>
					<Button onClick={fetchJoke} variant='light' color='blue' fullWidth>
						Get Another Joke
					</Button>
				</div>
			)}
		</div>
	);
}
