import { UserProfileInformation } from '../components/UserProfileInformation';
import { UserList } from '../components/UserList';

export function ProfilePage() {
	return (
		<div className='space-y-6'>
			<UserProfileInformation />
			<UserList />
		</div>
	);
}
