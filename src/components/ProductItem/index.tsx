import { Container } from './styles';
import imgTest from '../../../public/assets/teste.png';

// interface ProductItemProps {
// 	name: string;
// 	quantity?: number;
// 	power?: number;
// 	subPrice: number;
// 	totalPrice: number;
// }

export const ProductItem = () => {
	return (
		<Container>
			<div className="info">
				<div className="image">
					<img src={imgTest} alt="sdksj" />
				</div>
				<div className="context">
					<div className="description">
						<h2>Módulo solar</h2>
						<p>
							Potência: <strong>550W</strong>
						</p>
						<p>
							Quantidade: <strong>63</strong>
						</p>
					</div>

					<div className="price">
						<div className="sub">
							<span>
								<strong>R$ 23.696,95</strong>/cada
							</span>
						</div>

						<div className="total">
							<span>
								Total: <strong>R$ 23.696,95</strong>
							</span>
						</div>
					</div>
				</div>
			</div>

			<div className="detail">
				<button type="button">VER DETALHE</button>
			</div>
		</Container>
	);
};
