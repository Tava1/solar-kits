import { Container, Min, Max } from './styles';

interface IndicatorCardProps {
	title: string;
	min?: number;
	max?: number;
	current: number;
	primary?: boolean;
	secondary?: boolean;
	lightBlue?: boolean;
	strongGrey?: boolean;
}

export const IndicatorCard = ({
	title,
	current,
	min,
	max,
	primary,
	secondary,
	lightBlue,
	strongGrey,
}: IndicatorCardProps) => {
	return (
		<Container
			primary={primary}
			secondary={secondary}
			lightBlue={lightBlue}
			strongGrey={strongGrey}>
			<div className="header">
				<h2>{title}</h2>
			</div>

			<div className="context">
				{min && (
					<Min>
						<span>min. {min}</span>
					</Min>
				)}

				<div className="current">
					<span>{current}</span>
				</div>

				{max && (
					<Max>
						<span>max. {max}</span>
					</Max>
				)}
			</div>
		</Container>
	);
};
