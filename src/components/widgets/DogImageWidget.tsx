import { useEffect, useState } from 'react';

interface DogImage {
	message: string;
	status: string;
}

export function DogImageWidget() {
	const [dogImage, setDogImage] = useState<string | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	const fetchNewDog = async () => {
		setLoading(true);
		try {
			const response = await fetch('https://dog.ceo/api/breeds/image/random');
			if (!response.ok) throw new Error('Failed to fetch dog image');
			const data: DogImage = await response.json();
			setDogImage(data.message);
		} catch (err) {
			setError(
				err instanceof Error ? err.message : 'Failed to fetch dog image'
			);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		fetchNewDog();
	}, []);

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
			<h2 className='text-xl font-bold mb-4 text-gray-800'>Random Dog</h2>
			{loading && <p className='text-gray-600'>Loading dog image...</p>}
			{error && <p className='text-red-500'>Error: {error}</p>}
			{dogImage && (
				<div className='relative'>
					<img
						src={dogImage}
						alt='Random dog'
						className='w-full h-64 object-cover rounded-lg mb-4'
					/>
					<button
						onClick={fetchNewDog}
						className='bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors'
					>
						New Dog
					</button>
				</div>
			)}
		</div>
	);
}
