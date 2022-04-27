import { ProductItem, IndicatorCard, TopBar, QuotationParameters } from '@/components';
import { QuotationParametersContainer, PotentialContainer, TitleSection } from './styles';

export const Quotation = () => {
	return (
		<>
			<TopBar />

			<QuotationParametersContainer>
				<QuotationParameters title="Estrutura" description="Fibrocimento Metálico" />
				<QuotationParameters title="Cotação solicitada" description="2900" />
				<QuotationParameters title="CEP" description="06543-001" />
			</QuotationParametersContainer>

			<PotentialContainer>
				<div>
					<TitleSection>
						<h2>POTENCIAL</h2>
					</TitleSection>
					<div className="potential-result">
						<span>ÓTIMO</span>
					</div>
				</div>

				<div className="indicators">
					<IndicatorCard primary title="Irradiância" min={4219} max={5309} current={4791} />
					<IndicatorCard lightBlue title="Integradores" min={1} max={168} current={35} />
					<IndicatorCard secondary title="Econômia" current={713400} />
					<IndicatorCard strongGrey title="CO2" current={46.66} />
				</div>

				<TitleSection>
					<h2>KITs</h2>
				</TitleSection>

				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
				<ProductItem />
			</PotentialContainer>
		</>
	);
};
