import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Register } from './screens/Register';
import { Route, Routes } from 'react-router';
import { Login } from './screens/Login';
import { UserProvider } from './components/UserProvider';
import { ProtectedRoute } from './screens/ProtectedRoute';
import { Dashboard } from './screens/Dashboard';

function App() {
	return (
		<MantineProvider>
			<UserProvider>
				<Routes>
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
