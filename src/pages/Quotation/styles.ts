import styled from 'styled-components';

export const Structure = styled.section`
	display: flex;
	flex-direction: column;
	margin: 1rem;

	select {
		width: 200px;
	}
`;

export const QuotationParametersContainer = styled.section`
	margin: 2rem 0;
	display: flex;
	flex-wrap: wrap;
`;

export const PotentialContainer = styled.section`
	> div:first-child {
		display: flex;
		flex-direction: column;

		.potential-result {
			margin-top: calc(-48px / 2);
			margin-bottom: 2rem;
			align-self: center;

			background: var(--secondary);
			height: 48px;
			max-width: 220px;
			width: 160px;
			border-radius: var(--radius);

			display: flex;
			align-items: center;
			justify-content: center;

			span {
				font-weight: bold;
				font-size: 1.2rem;
				color: var(--top-text);
			}
		}
	}

	.indicators {
		margin: 0 1rem;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
`;

export const TitleSection = styled.div`
	background: var(--primary);
	color: var(--top-text);
	height: 95px;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Summary = styled.section`
	background: var(--primary);
	color: var(--top-text);
	padding: 2rem 1rem;
	text-align: end;
	box-shadow: 0 4px 30px rgba(0, 0, 0, 0.25);

	p {
		font-weight: 300;
	}

	.sub-price {
		margin-bottom: 2rem;

		button {
			cursor: pointer;
			border: 0;
			background: transparent;
			color: var(--top-text);
			text-decoration: underline;
			font-size: 1rem;
			font-weight: 300;
		}
	}
`;

export const Footer = styled.footer`
	p {
		padding: 2rem;
		text-align: center;
		font-weight: 300;

		a {
			color: var(--black);
		}
	}
`;
