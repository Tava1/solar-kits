import { useContext } from 'react';
import Modal from 'react-modal';
import { InstallmentContext } from '@/context/InstallmentContext';

interface InstallmentModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export const InstallmentModal = ({ isOpen, onRequestClose }: InstallmentModalProps) => {
	const modalContext = useContext(InstallmentContext);

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<table>
				<tr>
					<th>Parcelas</th>
					<th>Taxa mínima</th>
					<th>Taxa máxima</th>
					<th>Valor mínimo</th>
					<th>Valor Máximo</th>
				</tr>

				{modalContext.installment.map((installment) => (
					<tr>
						<td>{installment.parcelas}x</td>
						<td>{installment.taxa_minina}%</td>
						<td>{installment.taxa_maxima}%</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								installment.valor_minimo,
							)}
						</td>
						<td>
							{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
								installment.valor_maximo,
							)}
						</td>
					</tr>
				))}
			</table>
		</Modal>
	);
};
