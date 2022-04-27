/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useState } from 'react';
import { Kit } from '@/types/Quotation.types';

interface ProductDescriptionProviderProps {
	children: ReactNode;
}

interface Product {
	currentProduct: Kit;
	setCurrentProduct: (x: Kit) => void;
}

export const ProductDescriptionContext = createContext<Product>({} as Product);

export const ProductDescriptionProvider = ({ children }: ProductDescriptionProviderProps) => {
	const [currentProduct, setCurrentProduct] = useState<Kit>({} as Kit);

	return (
		<ProductDescriptionContext.Provider value={{ currentProduct, setCurrentProduct }}>
			{children}
		</ProductDescriptionContext.Provider>
	);
};
