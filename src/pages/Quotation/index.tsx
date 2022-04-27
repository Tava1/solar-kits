/* eslint-disable jsx-a11y/label-has-associated-control */
import { FaGithub } from 'react-icons/fa';
import { useContext, useState } from 'react';
import {
	ProductItem,
	IndicatorCard,
	TopBar,
	QuotationParameters,
	ProductDescriptionModal,
	Loading,
} from '@/components';
import { useFetch } from '@/hooks/useFetch';
import { GetQuotation, Installment, Kit } from '@/types/Quotation.types';

import {
	QuotationParametersContainer,
	PotentialContainer,
	TitleSection,
	Footer,
	Summary,
	Structure,
} from './styles';
import { ProductDescriptionContext } from '@/context/ProductDescriptioContext';
import { InstallmentContext } from '@/context/InstallmentContext';
import { InstallmentModal } from '@/components/InstallmentModal';

const CACHE_KEY = 'quotation';
const END_POINT = 'busca-cep';

export const Quotation = () => {
	const [isDescriptionModalOpen, setIsDescriptionModalOpen] = useState(false);
	const [isInstallmentModalOpen, setIsInstallmentModalOpen] = useState(false);

	const [type, setType] = useState('fibrocimento-metalico');
	// const [price, setPrice] = useState('');

	const { response, isLoading, isError } = useFetch<GetQuotation>(CACHE_KEY, END_POINT, type, {
		params: {
			estrutura: type,
			valor_conta: '2500',
			cep: '06543-001',
		},
	});

	const descriptionModalContext = useContext(ProductDescriptionContext);
	const installmentModalContext = useContext(InstallmentContext);

	const handleOpenProductDescription = (product: Kit) => {
		setIsDescriptionModalOpen(true);
		descriptionModalContext.setCurrentProduct(product);
	};

	const handleCloseProductDescription = () => {
		setIsDescriptionModalOpen(false);
	};

	const handleOpenInstallment = (installment: Installment[]) => {
		setIsInstallmentModalOpen(true);
		installmentModalContext.setInstallment(installment);
	};

	const handleCloseInstallment = () => {
		setIsInstallmentModalOpen(false);
	};

	return (
		<>
			{isError && <span>Erro</span>}
			{isLoading && <Loading />}

			{response && (
				<>
					<TopBar />

					<Structure>
						<label htmlFor="structure">Estrutura</label>
						<select
							value={type}
							onChange={(e) => setType(e.target.value)}
							name="structure"
							id="structure">
							<option value="fibrocimento-metalico">Fibrocimento Metálico</option>
							<option value="ceramico">Cerâmico</option>
							<option value="metalico">Metálico</option>
							<option value="laje ou solo">Laje ou solo</option>
						</select>
					</Structure>

					<QuotationParametersContainer>
						{/* <div>
							<label htmlFor="structure">Estrutura</label>
							<input type="number" value={price} onBlur={(e) => setPrice(e.target.value)} />
						</div> */}

						<QuotationParameters title="Estrutura" description={type} />
						<QuotationParameters title="Valor da conta de luz" description="2900" />
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
							<IndicatorCard
								primary
								title="Irradiância"
								min={response.irradiancia_minima}
								max={response.irradiancia_maxima}
								current={response.irradiancia}
							/>
							<IndicatorCard
								lightBlue
								title="Integradores"
								min={response.integradores_minimo}
								max={response.integradores_maximo}
								current={response.integradores_regiao}
							/>
							<IndicatorCard secondary title="Econômia" current={response.economia} />
							<IndicatorCard strongGrey title="CO2" current={response.co2} />
						</div>

						<TitleSection>
							<h2>KITs</h2>
						</TitleSection>

						{response.kit.map((kit) => (
							<ProductItem
								key={kit.id}
								name={kit.titulo}
								quantity={kit.qtde}
								power={kit.potenciaModulo || kit.potenciaInversor}
								subPrice={kit.valor}
								totalPrice={kit.valueTotal}
								image={kit.url}
								openDescription={() => handleOpenProductDescription(kit)}
							/>
						))}
					</PotentialContainer>

					<Summary>
						<div className="sub-price">
							<p>
								Até{' '}
								<strong>{response.parcelamento[response.parcelamento.length - 1].parcelas}x</strong>{' '}
								{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
									response.parcelamento[response.parcelamento.length - 1].valor_maximo,
								)}
							</p>
							<button type="button" onClick={() => handleOpenInstallment(response.parcelamento)}>
								Verificar condições de parcelamento
							</button>
						</div>

						<div className="total-price">
							<p>
								Valor da instação:{' '}
								<strong>
									{Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
										response.valor_instalacao,
									)}
								</strong>
							</p>
						</div>
					</Summary>

					<Footer>
						<p>
							Developed by <a href="https://github.com/Tava1">Gustavo Santos</a> <FaGithub />
						</p>
					</Footer>

					<ProductDescriptionModal
						isOpen={isDescriptionModalOpen}
						onRequestClose={handleCloseProductDescription}
					/>

					<InstallmentModal
						isOpen={isInstallmentModalOpen}
						onRequestClose={handleCloseInstallment}
					/>
				</>
			)}
		</>
	);
};
