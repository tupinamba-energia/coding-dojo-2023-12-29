import { test, expect, it } from 'vitest';
import VerificarPlano from '../src';

test('usando acima da quota', () => {
		expect(VerificarPlano(100, 2, [
			50,
			120,
		])).toBe(130)
})

test('usando abaixo da quota', () => {
	expect(VerificarPlano(10, 3, [
		4,
		6,
		2,
	])).toBe(28)
})

test('mês todo foi usado', () => {
	expect(VerificarPlano(100, 2, [
		100,
		100,
	])).toBe(100)
})

// test('usando 0', () => {
// 	expect(VerificarPlano(100, 4, [
// 		0,
// 		0,
// 		0,
// 		0,
// 	])).toBe(400)
	
// })

test('cliente novo', () => {
	expect(VerificarPlano(10, 0, [
		
	])).toBe(10)

})