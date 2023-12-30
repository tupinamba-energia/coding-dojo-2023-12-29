export default function VerificarPlano(quotaMensal: number, meses: number, mbUsados: number[] ){
	if(meses === 0) return quotaMensal

	let sobrou: number[] = []
	let proximoMes: number[] = []

	mbUsados.forEach((usadoMesAtual, i) => {
		let sobraMesAnterior = (i === 0 ? 0 : sobrou[i-1])
		sobrou[i] = sobraMesAnterior + quotaMensal - usadoMesAtual
		proximoMes[i] = sobrou[i] + quotaMensal
	})

	return proximoMes[meses -1]
}