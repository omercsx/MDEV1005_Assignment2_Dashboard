import '@mantine/core/styles.css';

import { MantineProvider } from '@mantine/core';

function App() {
	return (
		<MantineProvider>
			<div className='flex flex-col items-center justify-center h-screen'>
				<h1 className='text-4xl font-bold'>Dashboard</h1>
			</div>
		</MantineProvider>
	);
}

export default App;
