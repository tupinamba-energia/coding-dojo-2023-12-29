export default function VerificarPlano(quotaMensal: number, meses: number, mbUsados: number[] ){
	if(meses === 0) return quotaMensal

	let sobrou: number[] = []
	let proximoMes: number[] = []
	let usadoMesAtual;

	mbUsados.forEach((usadoMesAtual, i) => {
		if(i === 0){
			sobrou[i] = quotaMensal - usadoMesAtual
		} else {
			sobrou[i] = sobrou[i-1] + quotaMensal - usadoMesAtual
		}
		proximoMes[i] = sobrou[i] + quotaMensal
	})
	return proximoMes[meses -1]
}