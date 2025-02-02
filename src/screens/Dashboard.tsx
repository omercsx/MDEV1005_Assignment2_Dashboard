import { UserList } from '../components/UserList';
import { UserProfileInformation } from '../components/UserProfileInformation';

export function Dashboard() {
	return (
		<div className='flex flex-col items-center justify-center h-screen'>
			<UserProfileInformation />
			<UserList />
		</div>
	);
}
