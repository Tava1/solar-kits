import { useContext } from 'react';
import Modal from 'react-modal';
import { ProductDescriptionContext } from '@/context/ProductDescriptioContext';

interface ProductDescriptionModalProps {
	isOpen: boolean;
	onRequestClose: () => void;
}

export const ProductDescriptionModal = ({
	isOpen,
	onRequestClose,
}: ProductDescriptionModalProps) => {
	const modalContext = useContext(ProductDescriptionContext);

	return (
		<Modal isOpen={isOpen} onRequestClose={onRequestClose}>
			<div dangerouslySetInnerHTML={{ __html: modalContext.currentProduct.descricao }} />
		</Modal>
	);
};
