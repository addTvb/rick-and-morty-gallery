import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CharactersPage } from './pages/characters/CharactersPage';
import { PersonPage } from './pages/person/PersonPage';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/characters' element={<CharactersPage />} />
				<Route path='/characters:id' element={<PersonPage />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
