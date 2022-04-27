import styled, { keyframes } from 'styled-components';

const dotAnimation = keyframes`
  0% {
      color: var(--primary);
  }
  50% {
      color:var(--top-text);
  }
  100% {
      color: var(--primary);
  }
`;

export const Container = styled.div`
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;

	span {
		font-size: 2rem;
		font-weight: bold;
		color: var(--primary);
	}

	#first-dot {
		animation: ${dotAnimation} 1.5s infinite linear;
	}
	#second-dot {
		animation: ${dotAnimation} 1s infinite linear;
	}
	#third-dot {
		animation: ${dotAnimation} 1.5s infinite linear;
	}
`;
