import { GlobalStyle } from './styles/global';
import { Quotation } from './pages/Quotation';

import { ProductDescriptionProvider } from './context/ProductDescriptioContext';

function App() {
	return (
		<div className="App">
			<ProductDescriptionProvider>
				<Quotation />
			</ProductDescriptionProvider>

			<GlobalStyle />
		</div>
	);
}

export default App;
