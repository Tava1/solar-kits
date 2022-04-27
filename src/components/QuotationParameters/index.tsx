import { Container } from './styles';

interface QuotationParametersProps {
	title: string;
	description: string;
}

export const QuotationParameters = ({ title, description }: QuotationParametersProps) => {
	return (
		<Container>
			<h3>{title}</h3>
			<p>{description}</p>
		</Container>
	);
};
