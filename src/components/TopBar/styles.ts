import styled from 'styled-components';

export const Header = styled.header`
	background: var(--header);
	height: 80px;
	border-bottom: 1px solid blue;

	display: flex;
	align-items: center;
	justify-content: center;

	box-shadow: 0px 4px 30px rgba(0, 0, 0, 0.25);

	> div {
		height: 60px;

		img {
			height: 100%;
		}
	}
`;
