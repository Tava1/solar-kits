import { Container } from './styles';

interface ProductItemProps {
	name: string;
	quantity?: number;
	power?: number;
	subPrice: number;
	totalPrice: number;
	image: string;
}

export const ProductItem = ({
	name,
	quantity,
	power,
	subPrice,
	totalPrice,
	image,
}: ProductItemProps) => {
	return (
		<Container>
			<div className="info">
				<div className="image">
					<img src={image} alt="sdksj" />
				</div>
				<div className="context">
					<div className="description">
						<h2>{name}</h2>
						{power && (
							<p>
								Potência: <strong>{power}W</strong>
							</p>
						)}

						<p>
							Quantidade: <strong>{quantity}</strong>
						</p>
					</div>

					<div className="price">
						<div className="sub">
							<span>
								<strong>
									{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
										subPrice,
									)}
								</strong>
								/cada
							</span>
						</div>

						<div className="total">
							<span>
								Total:{' '}
								<strong>
									{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
										totalPrice,
									)}
								</strong>
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
