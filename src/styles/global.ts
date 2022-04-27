import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
	:root {
		--primary: #063EF9;
		--secondary: linear-gradient(106.68deg, #85DCA2 -29.47%, #56BE7A 108.44%);
		--light-blue: #76BDFF;
		--strong-grey : #454545;

		--black: #121212;
		--text: #B4B4B4;
		--top-text: #ffffff;
		--secondary-text: #3BBD67;

		--header: #F7F7F7;

		--radius: 5px;
		--shadow: 0px 0px 25px rgba(0, 0, 0, 0.25);
	}
	
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
	}

	body {
		color: var(--black);
		font-family: 'Inter', sans-serif;
	}

`;
