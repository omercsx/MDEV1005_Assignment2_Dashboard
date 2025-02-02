import { useEffect, useState } from 'react';

interface Quote {
	content: string;
	author: string;
}

export function QuoteWidget() {
	const [quote, setQuote] = useState<Quote | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchQuote = async () => {
			try {
				const response = await fetch('https://api.quotable.io/random');
				if (!response.ok) throw new Error('Failed to fetch quote');
				const data = await response.json();
				setQuote(data);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'Failed to fetch quote');
			} finally {
				setLoading(false);
			}
		};

		fetchQuote();
	}, []);

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
			<h2 className='text-xl font-bold mb-4 text-gray-800'>
				Quote of the Moment
			</h2>
			{loading && <p className='text-gray-600'>Loading quote...</p>}
			{error && <p className='text-red-500'>Error: {error}</p>}
			{quote && (
				<div>
					<p className='text-gray-700 italic mb-2'>"{quote.content}"</p>
					<p className='text-gray-600 text-right'>- {quote.author}</p>
				</div>
			)}
		</div>
	);
}
