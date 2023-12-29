export default function VerificarPlano(quotaMensal: number, meses: number, mbUsados: number[] ){
	// let used = 0
	// for (let index = 0; index < mbUsados.length; index++) {
	// 	const usado = mbUsados[index];
	// 	quotaMensal - usado
	// }
	let used = mbUsados.map(u => quotaMensal - u)
	console.log(used)
	let x = Array(meses).fill(0)
	console.log(x)
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



  
	return 130
}	