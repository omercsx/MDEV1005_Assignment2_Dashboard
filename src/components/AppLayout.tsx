import { AppShell, Navbar, UnstyledButton, Group, Text } from '@mantine/core';
import {
	IconUser,
	IconCloud,
	IconDog,
	IconMoodSmile,
} from '@tabler/icons-react';
import { Link, useLocation, Outlet } from 'react-router';

const navItems = [
	{ icon: IconUser, label: 'Profile', to: '/profile' },
	{ icon: IconCloud, label: 'Weather', to: '/weather' },
	{ icon: IconDog, label: 'Dog', to: '/dog' },
	{ icon: IconMoodSmile, label: 'Dad Jokes', to: '/jokes' },
];

export function AppLayout() {
	const location = useLocation();

	return (
		<AppShell padding='md' navbar={{ width: 300, breakpoint: 'sm' }}>
			<AppShell.Navbar p='md'>
				{navItems.map(item => (
					<UnstyledButton
						key={item.to}
						component={Link}
						to={item.to}
						w='100%'
						py='md'
						px='xs'
						style={{
							backgroundColor:
								location.pathname === item.to ? '#f0f0f0' : 'transparent',
							borderRadius: '8px',
						}}
					>
						<Group>
							<item.icon size={20} />
							<Text size='sm'>{item.label}</Text>
						</Group>
					</UnstyledButton>
				))}
			</AppShell.Navbar>

			<AppShell.Main>
				<Outlet />
			</AppShell.Main>
		</AppShell>
	);
}
