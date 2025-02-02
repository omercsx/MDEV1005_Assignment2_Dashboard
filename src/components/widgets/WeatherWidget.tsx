import { useEffect, useState } from 'react';

interface WeatherData {
	main: {
		temp: number;
		humidity: number;
		feels_like: number;
	};
	weather: Array<{
		main: string;
		description: string;
	}>;
	name: string;
}

export function WeatherWidget() {
	const [weather, setWeather] = useState<WeatherData | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const fetchWeather = async () => {
			try {
				// Using Toronto's coordinates (you can change these for a different city)
				const response = await fetch(
					'https://api.openweathermap.org/data/2.5/weather?lat=44.385093&lon=-79.699995&units=metric&appid=d4a42dd82b6f8f52e1a7ff5eac7b25e6'
				);
				if (!response.ok) throw new Error('Failed to fetch weather data');
				const data = await response.json();
				setWeather(data);
			} catch (err) {
				setError(
					err instanceof Error ? err.message : 'Failed to fetch weather data'
				);
			} finally {
				setLoading(false);
			}
		};

		fetchWeather();
	}, []);

	return (
		<div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-md'>
			<h2 className='text-xl font-bold mb-4 text-gray-800'>Barrie Weather</h2>
			{loading && <p className='text-gray-600'>Loading weather data...</p>}
			{error && <p className='text-red-500'>Error: {error}</p>}
			{weather && (
				<div>
					<p className='text-3xl font-bold text-gray-700 mb-2'>
						{Math.round(weather.main.temp)}°C
					</p>
					<p className='text-gray-600 mb-2'>
						Feels like: {Math.round(weather.main.feels_like)}°C
					</p>
					<p className='text-gray-600 mb-2'>
						{weather.weather[0].description.charAt(0).toUpperCase() +
							weather.weather[0].description.slice(1)}
					</p>
					<p className='text-gray-600'>Humidity: {weather.main.humidity}%</p>
				</div>
			)}
		</div>
	);
}
