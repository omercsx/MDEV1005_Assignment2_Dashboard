import '@mantine/core/styles.css';

import { Loader, MantineProvider } from '@mantine/core';
import { Register } from './screens/Register';
import { Navigate, Route, Routes } from 'react-router';
import { Login } from './screens/Login';
import { UserProvider } from './components/UserProvider';
import { ProtectedRoute } from './screens/ProtectedRoute';
import { useUser } from './contexts/UserContext';
import { AppLayout } from './components/AppLayout';
import { ProfilePage } from './screens/ProfilePage';
import { WeatherPage } from './screens/WeatherPage';
import { DogPage } from './screens/DogPage';
import { JokesPage } from './screens/JokesPage';

function RootRedirect() {
	const { user, loading } = useUser();

	if (loading) {
		return <Loader />;
	}

	return <Navigate to={user ? '/profile' : '/login'} replace />;
}

function App() {
	return (
		<MantineProvider>
			<UserProvider>
				<Routes>
					<Route path='/' element={<RootRedirect />} />
					<Route path='/register' element={<Register />} />
					<Route path='/login' element={<Login />} />
					<Route
						path='/'
						element={
							<ProtectedRoute>
								<AppLayout />
							</ProtectedRoute>
						}
					>
						<Route path='/profile' element={<ProfilePage />} />
						<Route path='/weather' element={<WeatherPage />} />
						<Route path='/dog' element={<DogPage />} />
						<Route path='/jokes' element={<JokesPage />} />
					</Route>
				</Routes>
			</UserProvider>
		</MantineProvider>
	);
}

export default App;
