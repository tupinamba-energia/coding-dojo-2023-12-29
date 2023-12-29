import { test, expect, it } from 'vitest';
import VerificarPlano from '../src';

test('Teste VerificarPlano', () => {
		expect(VerificarPlano(100, 2, [
			50,
			120,
		])).toBe(130)
})

test('Teste VerificarPlano', () => {
	expect(VerificarPlano(10, 3, [
		4,
		6,
		2,
	])).toBe(28)
})