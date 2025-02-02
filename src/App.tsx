import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';
import { Register } from './screens/Register';
import { Route, Routes } from 'react-router';
import { Login } from './screens/Login';

function App() {
	return (
		<MantineProvider>
			<Routes>
				<Route path='/register' element={<Register />} />
				<Route path='/login' element={<Login />} />
			</Routes>
		</MantineProvider>
	);
}

export default App;
