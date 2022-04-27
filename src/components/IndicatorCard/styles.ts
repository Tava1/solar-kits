import styled, { css } from 'styled-components';

interface HeaderProps {
	primary?: boolean;
	secondary?: boolean;
	lightBlue?: boolean;
	strongGrey?: boolean;
}

export const Container = styled.div<HeaderProps>`
	font-weight: bold;
	width: 180px;
	height: 120px;
	border-radius: var(--radius);
	box-shadow: var(--shadow);
	margin: 1rem 0;

	.header {
		border-top-left-radius: var(--radius);
		border-top-right-radius: var(--radius);
		text-align: center;
		padding: 0.5rem;

		background: var(--primary);
		color: var(--top-text);

		${({ primary }) =>
			primary &&
			css`
				background: var(--primary);
			`}

		${({ secondary }) =>
			secondary &&
			css`
				background: var(--secondary);
			`}

			${({ lightBlue }) =>
			lightBlue &&
			css`
				background: var(--light-blue);
			`}

			${({ strongGrey }) =>
			strongGrey &&
			css`
				background: var(--strong-grey);
			`}

		h2 {
			font-size: 1rem;
		}
	}

	.context {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		padding: 1rem;

		.current {
			font-size: 1.5rem;

			${({ primary }) =>
				primary &&
				css`
					color: var(--primary);
				`}

			${({ secondary }) =>
				secondary &&
				css`
					color: var(--secondary-text);
				`}

		${({ lightBlue }) =>
				lightBlue &&
				css`
					color: var(--light-blue);
				`}

			${({ strongGrey }) =>
				strongGrey &&
				css`
					color: var(--strong-grey);
				`}
		}
	}
`;

export const Min = styled.div`
	justify-self: flex-start;
	align-self: flex-start;

	span {
		color: var(--text);
		font-size: 0.8rem;
	}
`;

export const Max = styled.div`
	justify-self: flex-end;
	align-self: flex-end;

	span {
		color: var(--text);
		font-size: 0.8rem;
	}
`;
