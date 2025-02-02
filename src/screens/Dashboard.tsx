import { UserList } from '../components/UserList';
import { UserProfileInformation } from '../components/UserProfileInformation';
import { QuoteWidget } from '../components/widgets/QuoteWidget';
import { WeatherWidget } from '../components/widgets/WeatherWidget';
import { DogImageWidget } from '../components/widgets/DogImageWidget';

export function Dashboard() {
	return (
		<div className='min-h-screen bg-gray-100 p-8'>
			<div className='max-w-7xl mx-auto'>
				<div className='mb-8'>
					<UserProfileInformation />
				</div>

				{/* Widgets Grid */}
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8'>
					<QuoteWidget />
					<WeatherWidget />
					<DogImageWidget />
				</div>

				{/* User List */}
				<div className='bg-white rounded-lg shadow-lg p-6'>
					<UserList />
				</div>
			</div>
		</div>
	);
}
