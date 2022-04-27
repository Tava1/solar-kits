import { Container } from './styles';

export const Loading = () => {
	return (
		<Container>
			<span>Carregando</span>
			<span id="first-dot">.</span>
			<span id="second-dot">.</span>
			<span id="third-dot">.</span>
		</Container>
	);
};
