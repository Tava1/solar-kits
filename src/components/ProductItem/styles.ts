import styled from 'styled-components';

export const Container = styled.div`
	position: relative;
	margin: 1rem;
	border-radius: var(--radius);
	box-shadow: var(--shadow);
	height: 200px;

	.info {
		padding: 1rem;
		display: flex;
		flex-direction: row;
		justify-content: space-between;

		.image {
			img {
				width: 120px;
			}
		}

		.context {
			display: flex;
			flex-direction: column;
			justify-content: center;
			text-align: end;

			.description {
				p {
					font-weight: 300;

					strong {
						font-weight: 600;
					}
				}
			}

			.price {
				margin-top: 16px;

				.sub {
					color: var(--text);
					span {
						font-weight: 300;
						font-size: 0.8rem;
						strong {
							font-size: 0.9rem;
						}
					}
				}

				.total {
					color: var(--text);
					span {
						font-weight: bold;
						font-size: 0.8rem;
						strong {
							font-size: 1.2rem;
							color: var(--primary);
						}
					}
				}
			}
		}
	}

	.detail {
		position: absolute;
		bottom: 0;
		right: 0;
		left: 0;

		button {
			cursor: pointer;
			border: none;
			background: var(--primary);
			color: var(--top-text);
			font-size: 0.9rem;
			width: 100%;
			height: 38px;
			font-weight: bold;
			border-bottom-left-radius: var(--radius);
			border-bottom-right-radius: var(--radius);
		}
	}
`;
