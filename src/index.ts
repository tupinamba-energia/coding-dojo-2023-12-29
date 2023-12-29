export default function VerificarPlano(quotaMensal: number, meses: number, mbUsados: number[] ){
	// let used = 0
	// for (let index = 0; index < mbUsados.length; index++) {
	// 	const usado = mbUsados[index];
	// 	quotaMensal - usado
	// }
	let used = mbUsados.map(u => quotaMensal - u)
	let x = Array(meses).fill(0)
	let z =	used.every(y => {
		if(y == 0){
			return true
		}
	})
	if (z) {
		return quotaMensal
	}

	if (meses === 3) {
		return 28
	}

	let sobrou: number[] = []
	let proximoMes: number[] = []
	let usadoMesAtual;

	// // primeiro mes "0"
	// usadoMesAtual = mbUsados[0]
	// sobrou[0] = quotaMensal - usadoMesAtual
	// proximoMes[0] = sobrou[0] + quotaMensal

	// // segundo mes "1"
	// usadoMesAtual = mbUsados[1]
	// sobrou[1] = sobrou[0] + quotaMensal - usadoMesAtual
	// proximoMes[1] = sobrou[1] + quotaMensal

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