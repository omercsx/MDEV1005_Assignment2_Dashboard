import '@mantine/core/styles.css';

import { Loader, MantineProvider } from '@mantine/core';
import { Register } from './screens/Register';
import { Navigate, Route, Routes } from 'react-router';
import { Login } from './screens/Login';
import { UserProvider } from './components/UserProvider';
import { ProtectedRoute } from './screens/ProtectedRoute';
import { Dashboard } from './screens/Dashboard';
import { useUser } from './contexts/UserContext';

function RootRedirect() {
	const { user, loading } = useUser();

	if (loading) {
		return <Loader />;
	}

	return <Navigate to={user ? '/dashboard' : '/login'} replace />;
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
						path='/dashboard'
						element={
							<ProtectedRoute>
								<Dashboard />
							</ProtectedRoute>
						}
					/>
				</Routes>
			</UserProvider>
		</MantineProvider>
	);
}

export default App;
