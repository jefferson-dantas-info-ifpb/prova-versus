/**
 * Gera um número aleatório entre dois números (incluindo eles mesmos)
 * @param {number} min Número mínimo a ser gerado aleatoriamente
 * @param {number} max Número máximo a ser gerado aleatoriamente
 * @returns Número aleatório
 */
export function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
