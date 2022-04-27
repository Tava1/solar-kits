import { GlobalStyle } from './styles/global';
import { Quotation } from './pages/Quotation';

import { ProductDescriptionProvider } from './context/ProductDescriptioContext';
import { InstallmentProvider } from './context/InstallmentContext';

function App() {
	return (
		<div className="App">
			<ProductDescriptionProvider>
				<InstallmentProvider>
					<Quotation />
				</InstallmentProvider>
			</ProductDescriptionProvider>

			<GlobalStyle />
		</div>
	);
}

export default App;
