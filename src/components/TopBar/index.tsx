import { Header } from './styles';

import img from '../../../public/assets/logo.png';

export function TopBar() {
	return (
		<Header>
			<div>
				<img src={img} alt="77Sol Logo" />
			</div>
		</Header>
	);
}
