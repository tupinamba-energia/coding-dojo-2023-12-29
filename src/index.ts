export default function VerificarPlano(quotaMensal: number, meses: number, mbUsados: number[] ){
	// let used = mbUsados.map(u => quotaMensal - u)
	// let x = Array(meses).fill(0)
	// let z =	used.every(y => {
	// 	if(y == 0){
	// 		return true
	// 	}
	// })
	// if (z) {
	// 	return quotaMensal
	// }

	let sobrou: number[] = []
	let proximoMes: number[] = []
	let usadoMesAtual;

	mbUsados.forEach((u, i) => {
		usadoMesAtual = u
		if(i === 0){
			sobrou[i] = quotaMensal - usadoMesAtual
		} else {
			sobrou[i] = sobrou[i-1] + quotaMensal - usadoMesAtual
		}
		proximoMes[i] = sobrou[i] + quotaMensal
	})
	return proximoMes[meses -1]
}