import styled from 'styled-components';

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
