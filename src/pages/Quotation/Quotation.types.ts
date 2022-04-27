interface Parcela {
	parcelas: number;
	taxa_minina: number;
	taxa_maxima: number;
	valor_minimo: number;
	valor_maximo: number;
}

interface Kit {
	id: number;
	qtde: number;
	valor: number;
	categoria: number;
	potenciaModulo?: number;
	potenciaInversor?: number;
	valueTotal: number;
	descricao: string;
	datasheet: string;
	url: string;
	titulo: string;
	custo: number;
	estimativaEntrega?: number;
	fornecedor: number;
	garantia: number;
}

export interface GetQuotation {
	irradiancia: number;
	irradiancia_minima: number;
	irradiancia_maxima: number;
	integradores_regiao: number;
	integradores_minimo: number;
	integradores_maximo: number;
	economia: number;
	potencial: string;
	valor_instalacao: number;
	parcelamento: Parcela[];
	co2: number;
	kit: Kit[];
}
