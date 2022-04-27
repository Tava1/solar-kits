/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, ReactNode, useState } from 'react';
import { Installment } from '@/types/Quotation.types';

interface InstallmentProviderProps {
	children: ReactNode;
}

interface InstallmentData {
	installment: Installment[];
	setInstallment: (x: Installment[]) => void;
}

export const InstallmentContext = createContext<InstallmentData>({} as InstallmentData);

export const InstallmentProvider = ({ children }: InstallmentProviderProps) => {
	const [installment, setInstallment] = useState<Installment[]>([]);

	return (
		<InstallmentContext.Provider value={{ installment, setInstallment }}>
			{children}
		</InstallmentContext.Provider>
	);
};
