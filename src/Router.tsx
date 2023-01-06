import { Routes, Route } from 'react-router-dom';
import { DefaultLayout } from './Layout/Default';
import { Home } from './pages/Home';
import { Women } from './pages/Women';
export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home/>}/>
				<Route path="/women" element={<Women />}/>
				<Route path="/lookbook" element={<p>Coming soon...</p>}/>
				<Route path="/mens" element={<p>Coming soon...</p>}/>
			</Route>
		</Routes>
	); 
}