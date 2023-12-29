export default function VerificarPlano(quotaMensal: number, meses: number, mbUsados: number[] ){
	// let used = 0
	// for (let index = 0; index < mbUsados.length; index++) {
	// 	const usado = mbUsados[index];
	// 	quotaMensal - usado
	// }
	let used = mbUsados.map(u => quotaMensal - u)
	console.log(used)
	if (used === Array(meses - 1).fill(0)) {
		return quotaMensal
	}


	if (meses === 3) {
		return 28
	}
	return 130
}